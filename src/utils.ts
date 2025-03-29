/**
 * Simple awaitable timeout.
 *
 * @export
 * @param { number } [delay=1000]
 * @return { Promise<void> }
 */
export async function sleep(delay: number = 1000): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), delay));
}
