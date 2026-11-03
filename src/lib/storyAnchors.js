/** Use the edition's existing story identity, independent of title and ordering.
 * @param {{ id: string }} story
 */
export function storyAnchor(story) {
  return `story-${story.id}`;
}
