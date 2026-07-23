export interface CountryStat {
	country: string;
	views: number;
}

export interface DayStats {
	date: string;
	analytics: {
		totalViews: number;
		uniqueVisitors: number;
		countries: CountryStat[];
	};
	tokenUsage: {
		inputTokens: number;
		outputTokens: number;
		totalTokens: number;
		costUsd: number;
	};
}

export interface StatsSnapshot {
	totalViews: number;
	uniqueVisitors: number;
	countries: CountryStat[];
	tokenUsage: {
		inputTokens: number;
		outputTokens: number;
		totalTokens: number;
		costUsd: number;
	};
}

export function parseJsonl(raw: string): DayStats[] {
	return raw
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean)
		.map((line) => JSON.parse(line));
}

export function snapshotForDay(day: DayStats): StatsSnapshot {
	return {
		totalViews: day.analytics.totalViews,
		uniqueVisitors: day.analytics.uniqueVisitors,
		countries: day.analytics.countries,
		tokenUsage: day.tokenUsage,
	};
}

export function aggregate(days: DayStats[]): StatsSnapshot {
	const countryTotals = new Map<string, number>();
	let totalViews = 0;
	let uniqueVisitors = 0;
	let inputTokens = 0;
	let outputTokens = 0;
	let totalTokens = 0;
	let costUsd = 0;

	for (const day of days) {
		totalViews += day.analytics.totalViews;
		uniqueVisitors += day.analytics.uniqueVisitors;
		for (const { country, views } of day.analytics.countries) {
			countryTotals.set(country, (countryTotals.get(country) ?? 0) + views);
		}
		inputTokens += day.tokenUsage.inputTokens;
		outputTokens += day.tokenUsage.outputTokens;
		totalTokens += day.tokenUsage.totalTokens;
		costUsd += day.tokenUsage.costUsd;
	}

	return {
		totalViews,
		uniqueVisitors,
		countries: [...countryTotals.entries()].map(([country, views]) => ({ country, views })),
		tokenUsage: {
			inputTokens,
			outputTokens,
			totalTokens,
			costUsd: Math.round(costUsd * 100) / 100,
		},
	};
}

export function daysInMonth(days: DayStats[], monthPrefix: string): DayStats[] {
	return days.filter((day) => day.date.startsWith(monthPrefix));
}

export function daysInRange(days: DayStats[], from: string, to: string): DayStats[] {
	return days.filter((day) => day.date >= from && day.date <= to);
}

export function dayLabel(date: string): string {
	return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

export function monthLabel(date: string): string {
	return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});
}
