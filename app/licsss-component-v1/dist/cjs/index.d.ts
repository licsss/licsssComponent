import React, { HTMLAttributes } from 'react';
import Bootstrap from 'react-bootstrap';

interface IconProps extends React.PropsWithChildren {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
    name: SvgName;
}
type SvgName = "normal" | "add" | "edit" | "trash" | "info" | "check" | "exclamation";

type AlertProps = Bootstrap.AlertProps & AlertChildrenProps & {
    Heading?: React.ReactElement;
};
interface AlertChildrenProps extends React.PropsWithChildren {
    name?: SvgName;
    width?: number;
    heigth?: number;
}

interface ButtonChildrenProps extends React.PropsWithChildren {
    mode?: SvgName;
}
type ButtonProps = Bootstrap.ButtonProps & ButtonChildrenProps & {};

interface NotificationProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    delay?: number | false;
}
interface NotificationContextProps {
    Notifications: {
        [s: string]: NotificationProps;
    };
    addNotification: (notification: NotificationProps) => string;
    removeNotification: (key: string) => void;
}
interface UseNotificationProps {
    Notifications: {
        [s: string]: NotificationProps;
    };
    addNotification: (notification: NotificationProps) => string;
    removeNotification: (key: string) => void;
}

interface NotiProps {
    Notifications?: {
        [s: string]: NotificationProps;
    };
}
interface NotificationToastProps {
    Notification: NotificationProps;
    notificationKey: string;
    NotificationContextValue?: UseNotificationProps;
    delay?: number | false;
}

interface ToastProps extends Bootstrap.ToastProps {
    header?: React.ReactNode;
}
interface ToastContainerProps extends Bootstrap.ToastContainerProps {
}

interface ComponentsInterface {
    Alert: React.ForwardRefExoticComponent<AlertProps>;
    AlertChildren: React.ForwardRefExoticComponent<AlertChildrenProps>;
    Button: React.ForwardRefExoticComponent<ButtonProps>;
    ButtonChildren: React.ForwardRefExoticComponent<ButtonChildrenProps>;
    Icon: React.ForwardRefExoticComponent<IconProps>;
    svgs: Record<SvgName, IconProps>;
    Notification: React.ForwardRefExoticComponent<NotiProps>;
    NotificationToast: React.ForwardRefExoticComponent<NotificationToastProps>;
    NotificationContext: React.Context<NotificationContextProps>;
    useNotification: (props: NotificationContextProps) => UseNotificationProps;
    Toast: React.ForwardRefExoticComponent<ToastProps>;
    ToastContainer: React.ForwardRefExoticComponent<ToastContainerProps>;
}

interface FormControlProps extends Bootstrap.FormControlProps {
    maxLength?: number;
    required?: boolean;
    validMessage?: React.ReactNode;
    invalidMessage?: React.ReactNode;
}

type ApiBaseType = {
    base_url?: string;
    endpoint: string;
    headers?: object;
    nonceKey: string;
};
type ApiType = ApiBaseType & {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: BodyInit;
};
type ResponseStatusType = {
    result: boolean;
    nonce: string;
    code: number;
};
type ResponseErrorType = {
    abstract: string;
    title: string;
    code: number;
    messages: string[];
};
type ResponseMetaType = {
    currentPage: number;
    lastPage: number;
    length: number;
    getLength: number;
    per: number;
};
type ResponseIndexType<T = object> = {
    meta: ResponseMetaType;
    items: T[];
};
type ResponseType<T = object> = {
    status: ResponseStatusType;
    payloads?: T;
    error?: ResponseErrorType;
};
/**
 * 送信ヘッダ作成
 *
 * @export
 * @param {(object | undefined)} [headers=undefined]
 * @return {HeadersInit}
 */
declare function createHeader(headers?: object | undefined): HeadersInit;
/**
 * NONCE確認
 *
 * @export
 * @param {string} expectedNonce
 * @param {string} receivedNonce
 * @return {boolean}
 */
declare function checkNonce(expectedNonce: string, receivedNonce: string | undefined): boolean;

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
declare function route(__ROUTES__: Record<string, string>, routeName: string, parameters?: Record<string, string>, containDomain?: boolean): string;
/**
 * クエリ作成
 *
 * @export
 * @param {Record<string, string>} [parameters={}]
 * @return {*}  {string}
 */
declare function createQueries(parameters?: Record<string, string>): string;

/**
 * 全てのクッキー取得
 *
 * @export
 * @return {Record<string, string>}
 */
declare function cookies(): Record<string, string>;
/**
 * 指定クッキー取得
 *
 * @export
 * @param {string | undefined} key
 * @return {(string | undefined)}
 */
declare function cookie(key?: string | undefined): string | Record<string, string> | undefined;
/**
 * ランダム文字列生成
 *
 * @export
 * @return {*}  {string}
 */
declare function createKey(): string;
/**
 * 文字列判定
 * @param value
 * @returns
 */
declare function isString(value: any): boolean;
/**
 * 日付フォーマット
 * @param date
 * @param format
 * @returns
 */
declare function date_format(date?: string | null | undefined | Date, format?: string): string;
/**
 * 数値フォーマット
 * @param number
 * @returns
 */
declare function number_format(number: number): string;
/**
 * JSONキーによる並び替え
 *
 * @export
 * @param {object} json
 * @return {*}  {object}
 */
declare function sortJSON<T = object>(json: T): T;

type Functions_ApiBaseType = ApiBaseType;
type Functions_ApiType = ApiType;
type Functions_ResponseErrorType = ResponseErrorType;
type Functions_ResponseIndexType<T = object> = ResponseIndexType<T>;
type Functions_ResponseMetaType = ResponseMetaType;
type Functions_ResponseStatusType = ResponseStatusType;
type Functions_ResponseType<T = object> = ResponseType<T>;
declare const Functions_checkNonce: typeof checkNonce;
declare const Functions_cookie: typeof cookie;
declare const Functions_cookies: typeof cookies;
declare const Functions_createHeader: typeof createHeader;
declare const Functions_createKey: typeof createKey;
declare const Functions_createQueries: typeof createQueries;
declare const Functions_date_format: typeof date_format;
declare const Functions_isString: typeof isString;
declare const Functions_number_format: typeof number_format;
declare const Functions_route: typeof route;
declare const Functions_sortJSON: typeof sortJSON;
declare namespace Functions {
  export {
    Functions_ApiBaseType as ApiBaseType,
    Functions_ApiType as ApiType,
    Functions_ResponseErrorType as ResponseErrorType,
    Functions_ResponseIndexType as ResponseIndexType,
    Functions_ResponseMetaType as ResponseMetaType,
    Functions_ResponseStatusType as ResponseStatusType,
    Functions_ResponseType as ResponseType,
    Functions_checkNonce as checkNonce,
    Functions_cookie as cookie,
    Functions_cookies as cookies,
    Functions_createHeader as createHeader,
    Functions_createKey as createKey,
    Functions_createQueries as createQueries,
    Functions_date_format as date_format,
    Functions_isString as isString,
    Functions_number_format as number_format,
    Functions_route as route,
    Functions_sortJSON as sortJSON,
  };
}

interface FormContextProps<T = ResponseType> {
    Response?: T;
    setResponse: (response: T | undefined) => void;
}
interface UseFormProps<T = ResponseType> extends FormContextProps<T> {
    Response: T | undefined;
    setResponse: (response: T | undefined) => void;
}

interface FormProps extends Bootstrap.FormProps {
    successMessage?: React.ReactElement | false;
    Response?: ResponseType;
}
interface FormNotificationProps {
    Response: UseFormProps;
    successMessage?: React.ReactElement | false;
}

interface FormElementWrapperProps extends React.PropsWithChildren {
    label: string;
    description?: string;
    parent?: HTMLAttributes<HTMLDivElement>;
    required?: boolean;
}

type FormControlWrapperProps = FormElementWrapperProps & FormControlProps & {};

interface FormSelectProps extends Bootstrap.FormSelectProps {
    required?: boolean;
    validMessage?: React.ReactNode;
    invalidMessage?: React.ReactNode;
    options?: {
        value: string;
        label: string;
    }[];
}

type FormSelectWrapperProps = FormElementWrapperProps & FormSelectProps & {};

interface FormsInterface {
    Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
    FormNotification: React.ForwardRefExoticComponent<FormNotificationProps>;
    FormContext: React.Context<FormContextProps>;
    useForm: <T>() => UseFormProps<T>;
    Control: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    ControlWrapper: React.ForwardRefExoticComponent<FormControlWrapperProps>;
    ElementWrapper: React.ForwardRefExoticComponent<FormElementWrapperProps>;
    Select: React.ForwardRefExoticComponent<FormSelectProps>;
    SelectWrapper: React.ForwardRefExoticComponent<FormSelectWrapperProps>;
}

declare const _default: {
    components: FormsInterface & ComponentsInterface;
    functions: typeof Functions;
};

export { _default as default };
