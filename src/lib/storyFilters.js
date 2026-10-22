/** Match the reader's recorded signal rules.
 * @param {string} source @param {number | undefined} score
 * @param {string} sourceFilter @param {string} signalFilter
 */
export function matchesStoryFilters(source, score, sourceFilter, signalFilter) {
  if (sourceFilter !== 'all' && source !== sourceFilter) return false;
  if (signalFilter === 'all') return true;
  return Number.isFinite(score) && (signalFilter === '9' ? (score === 9 || score === 10) : score === Number(signalFilter));
}
