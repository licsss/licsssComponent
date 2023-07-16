export type ApiBaseType = {
    base_url?: string;
    endpoint: string;
    headers?: object;
    nonceKey: string;
};
export type ApiType = ApiBaseType & {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: BodyInit;
};
export type ResponseStatusType = {
    result: boolean;
    nonce: string;
    code: number;
};
export type ResponseErrorType = {
    abstract: string;
    title: string;
    code: number;
    messages: string[];
};
export type ResponseMetaType = {
    currentPage: number;
    lastPage: number;
    length: number;
    getLength: number;
    per: number;
};
export type ResponseIndexType<T = object> = {
    meta: ResponseMetaType;
    items: T[];
};
export type ResponseType<T = object> = {
    status: ResponseStatusType;
    payloads?: T;
    error?: ResponseErrorType;
};
/**
 * API通信
 *
 * @export
 * @template R
 * @param {ApiType} {
 *   base_url = undefined,
 *   endpoint = "",
 *   method = "GET",
 *   body = undefined,
 *   headers = undefined,
 * }
 * @return {*}  {(Promise<R | false>)}
 */
export default function send<R = ResponseType>({ base_url, endpoint, method, body, headers, nonceKey, }: ApiType): Promise<R | string>;
/**
 * 送信ヘッダ作成
 *
 * @export
 * @param {(object | undefined)} [headers=undefined]
 * @return {HeadersInit}
 */
export declare function createHeader(headers?: object | undefined): HeadersInit;
/**
 * NONCE確認
 *
 * @export
 * @param {string} expectedNonce
 * @param {string} receivedNonce
 * @return {boolean}
 */
export declare function checkNonce(expectedNonce: string, receivedNonce: string | undefined): boolean;
