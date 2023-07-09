/**
 * URL取得
 *
 * @export
 * @param {Record<string, string>} __ROUTES__
 * @param {string} routeName
 * @param {Record<string, string>} [parameters={}]
 * @param {boolean} [containDomain=false]
 * @return {*}  {string}
 */
export default function route(
  __ROUTES__: Record<string, string>,
  routeName: string,
  parameters: Record<string, string> = {},
  containDomain: boolean = false
): string {
  if (!__ROUTES__[routeName]) return "";
  let uri: string = __ROUTES__[routeName];
  if (containDomain) {
    uri = `${window.location.protocol}//${window.location.hostname}` + uri;
  }
  Object.keys(parameters).forEach((key) => {
    uri = uri.replace(`:${key}`, encodeURIComponent(parameters[key]));
  });
  return uri;
}

/**
 * クエリ作成
 *
 * @export
 * @param {Record<string, string>} [parameters={}]
 * @return {*}  {string}
 */
export function createQueries(parameters: Record<string, string> = {}): string {
  let query: string[] = [];
  Object.keys(parameters).forEach((key) => {
    query.push(`${key}=${encodeURIComponent(parameters[key])}` as never);
  });
  return query.join("&");
}
