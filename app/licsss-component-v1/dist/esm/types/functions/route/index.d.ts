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
export declare function route(__ROUTES__: Record<string, string>, routeName: string, parameters?: Record<string, string>, containDomain?: boolean): string;
/**
 * クエリ作成
 *
 * @export
 * @param {Record<string, string>} [parameters={}]
 * @return {*}  {string}
 */
export declare function createQueries(parameters?: Record<string, string>): string;
/**
 * 全クエリ取得
 *
 * @export
 * @param {string} path
 * @return {*}  {{ [s: string]: string }}
 */
export declare function getQueries(path: string): {
    [s: string]: string;
};
/**
 * クエリ取得
 *
 * @export
 * @param {string} key
 * @param {(string | undefined)} [path=undefined]
 * @return {*}  {(string | undefined)}
 */
export declare function getQuery(key: string, path?: string | undefined): string | undefined;
export interface RouteConfigInterface {
    [s: string]: object | {};
}
export declare class View<ParametersInterface = {
    [s: string]: string;
}> {
    protected routes: RouteConfigInterface;
    getRoute(routeName: string, parameters?: ParametersInterface | any): string;
    convertURI(routeName: string): string;
    /**
     * httpから取得
     *
     * @param {string} routeName
     * @param {(ParametersInterface | any)} [parameters={}]
     * @return {*}
     * @memberof View
     */
    getFullUrl(routeName: string, parameters?: ParametersInterface | any): string;
    /**
     * 2つ目の/以降取得
     *
     * @param {string} routeName
     * @param {(ParametersInterface | any)} [parameters={}]
     * @memberof View
     */
    getUnderPath(routeName: string, parameters?: ParametersInterface | any): string;
}
