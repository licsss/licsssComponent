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
export function route(
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

/**
 * 全クエリ取得
 *
 * @export
 * @param {string} path
 * @return {*}  {{ [s: string]: string }}
 */
export function getQueries(path: string): { [s: string]: string } {
  let queries: { [s: string]: string } = {};
  let splited_question = path.split("?");
  let splited_equal = splited_question[splited_question.length - 1].split("&");
  splited_equal.forEach((val: string): void => {
    let splited: string[] = val.split("=");
    if (splited.length > 1) queries[splited[0]] = splited[1];
  });
  return queries;
}

/**
 * クエリ取得
 *
 * @export
 * @param {string} key
 * @param {(string | undefined)} [path=undefined]
 * @return {*}  {(string | undefined)}
 */
export function getQuery(
  key: string,
  path: string | undefined = undefined
): string | undefined {
  let queries: { [s: string]: string } = getQueries(
    path === undefined ? window.location.href : path
  );
  return queries[key];
}
