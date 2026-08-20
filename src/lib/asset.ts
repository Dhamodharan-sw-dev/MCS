/** Resolves a path under /public against the app's base URL so it works both
 * in dev and when deployed under a GitHub Pages project subpath. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path}`.replace(/([^:])\/\/+/g, '$1/')
}
