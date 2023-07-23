import { MethodType, ResponseIndexType, ResponseType } from "../fetch";
export interface ParametersInterface {
    [s: string]: string | number | undefined;
}
export interface IndexParametersInterface extends ParametersInterface {
    per?: number;
    page?: number;
    order?: "asc" | "desc";
}
export interface RouteSendInterface {
    [s: "index" | "store" | "show" | "update" | "destroy" | string]: {
        routeName: string;
        method: MethodType;
    };
}
export declare class Model<Response = ResponseType, IndexParameters = IndexParametersInterface, ShowParameters = ParametersInterface, StoreParameters = ParametersInterface, UpdateParameters = ParametersInterface, DestroyParameters = ParametersInterface> {
    protected baseUri: string;
    protected routeSend: RouteSendInterface;
    getRoute(endpoint: string, parameters?: undefined | object | IndexParameters | ShowParameters | StoreParameters | UpdateParameters | DestroyParameters): string;
    convertURI(endpoint: string): string;
    send<R = Response>({ endpoint, parameters, body, method, }: {
        endpoint: string;
        parameters?: object | IndexParameters | ShowParameters | StoreParameters | UpdateParameters | DestroyParameters;
        body?: object;
        method?: MethodType;
    }): Promise<R | string>;
    index<R = Response>(parameters: IndexParameters): Promise<R | string>;
    show<R = Response>(parameters: ShowParameters): Promise<R | string>;
    store<R = Response>(parameters: StoreParameters): Promise<R | string>;
    update<R = Response>(parameters: UpdateParameters): Promise<R | string>;
    destroy<R = Response>(parameters: DestroyParameters): Promise<R | string>;
}
/**
 * パラメータ編集
 *
 * @export
 * @param {string} base_uri
 * @param {{}} [parameters={}]
 * @return {*}  {string}
 */
export declare function getEndpoint(base_uri: string, parameters?: {}): string;
/**
 *パラメータ置換
 *
 * @export
 * @param {string} uri
 * @param {{}} [parameters={[s: string]: string }]
 * @return {*}  {string}
 */
export declare function changeParameters(uri: string, parameters?: {
    [s: string]: string;
}): string;
export type IndexQuery = {
    page?: number;
    per?: number;
    order?: "desc" | "asc";
};
export declare function getIndex<T = ResponseType<ResponseIndexType>>(base_uri: string, parameters?: IndexQuery): Promise<T | string>;
export declare function getShow<T = ResponseType>(base_uri: string, parameters?: {}): Promise<T | string>;
export declare function postStore<T = ResponseType>(base_uri: string, body?: {}, parameters?: {}): Promise<T | string>;
export declare function putUpdate<T = ResponseType>(base_uri: string, body?: {}, parameters?: {}): Promise<T | string>;
export declare function deleteDestroy<T = ResponseType>(base_uri: string, parameters?: {}): Promise<T | string>;
