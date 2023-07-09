// 関数引数
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
// レスポンスステータス
export type ResponseStatusType = {
  result: boolean;
  nonce: string;
  code: number;
};
//エラーレスポンス
export type ResponseErrorType = {
  abstract: string;
  title: string;
  code: number;
  messages: string[];
};
//ページネーションメタ
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
// レスポンス
export type ResponseType<T = object> = {
  status: ResponseStatusType;
  payloads?: T;
  error?: ResponseErrorType;
};
