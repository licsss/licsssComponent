/**
 * 全てのクッキー取得
 *
 * @export
 * @return {Record<string, string>}
 */
export declare function cookies(): Record<string, string>;
/**
 * 指定クッキー取得
 *
 * @export
 * @param {string | undefined} key
 * @return {(string | undefined)}
 */
export declare function cookie(key?: string | undefined): string | Record<string, string> | undefined;
/**
 * ランダム文字列生成
 *
 * @export
 * @return {*}  {string}
 */
export declare function createKey(): string;
/**
 * 文字列判定
 * @param value
 * @returns
 */
export declare function isString(value: any): boolean;
/**
 * 日付フォーマット
 * @param date
 * @param format
 * @returns
 */
export declare function date_format(date?: string | null | undefined | Date, format?: string): string;
/**
 * 数値フォーマット
 * @param number
 * @returns
 */
export declare function number_format(number: number): string;
/**
 * JSONキーによる並び替え
 *
 * @export
 * @param {object} json
 * @return {*}  {object}
 */
export declare function sortJSON<T = object>(json: T): T;
