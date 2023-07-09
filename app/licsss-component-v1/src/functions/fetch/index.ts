import { cookie, createKey } from "./../";
import { ApiType, ResponseType } from "./index.d";

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
export default async function send<R = ResponseType>({
  base_url = undefined,
  endpoint = "",
  method = "GET",
  body = undefined,
  headers = undefined,
  nonceKey = "",
}: ApiType): Promise<R | string> {
  //NONCE
  const nonce: string = createKey();

  //URL生成
  let url = "/";
  if (base_url !== undefined) {
    url = base_url;
  }
  url += endpoint;

  //送信オプション作成
  let opt: RequestInit = {
    method: method,
    credentials: "include",
  };
  if (body !== undefined) opt["body"] = body;

  //ヘッダ作成
  let customHeaders: Record<string, string> = { ...(headers || {}) };
  customHeaders[nonceKey] = nonce;
  opt["headers"] = createHeader(customHeaders);

  const res: R | string = await fetch(url, opt)
    .then((response: Response): Promise<R> => response.json())
    .then((res: R): R => res)
    .catch((error: string): string => error);

  return res;
}

/**
 * 送信ヘッダ作成
 *
 * @export
 * @param {(object | undefined)} [headers=undefined]
 * @return {HeadersInit}
 */
export function createHeader(
  headers: object | undefined = undefined
): HeadersInit {
  let add_header: Record<string, string> = {
    Accept: "application/json",
  };

  let xsrf_token: string | undefined = cookie("XSRF-TOKEN") as
    | string
    | undefined;
  if (xsrf_token) add_header["X-XSRF-TOKEN"] = xsrf_token;

  let header = Object.assign({}, add_header, headers || {});
  if (!header["Content-Type"]) header["Content-Type"] = "application/json";
  if (header["Content-Type"] === "multipart/form-data")
    delete header["Content-Type"];
  return header;
}

/**
 * NONCE確認
 *
 * @export
 * @param {string} expectedNonce
 * @param {string} receivedNonce
 * @return {boolean}
 */
export function checkNonce(
  expectedNonce: string,
  receivedNonce: string | undefined
): boolean {
  return expectedNonce === receivedNonce;
}
