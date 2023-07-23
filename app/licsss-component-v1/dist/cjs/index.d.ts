/// <reference types="react" />
import Toolkit from '@reduxjs/toolkit';
import * as redux from 'redux';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import * as React from 'react';
import React__default, { HTMLAttributes } from 'react';
import Bootstrap from 'react-bootstrap';

interface ActionInterface {
    addLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/addLocal`>;
    removeLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/removeLocal`>;
}

interface StoreInterface extends ToolkitStore {
}

interface ReduxProps extends React__default.PropsWithChildren {
}

interface ModalFooterProps extends React__default.PropsWithChildren {
    className?: string;
}

interface ModalBodyProps extends React__default.PropsWithChildren {
    className?: string;
}

interface ModalHeaderProps extends Bootstrap.ModalHeaderProps {
}

interface ModalProps extends Bootstrap.ModalProps {
    Header?: ModalHeaderProps;
    children?: React__default.ReactNode;
    Body?: ModalBodyProps;
    Footer?: ModalFooterProps;
}

type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type ResponseStatusType = {
    result: boolean;
    nonce: string;
    code: number;
};
type ResponseErrorType<T = string[] | {
    [key: string]: string[];
}> = {
    abstract: string;
    title: string;
    code: number;
    messages: T;
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
type ResponseType<T = object, S = string[] | {
    [key: string]: string[];
}> = {
    status: ResponseStatusType;
    payloads?: T;
    error?: ResponseErrorType<S>;
};

interface RouteConfigInterface {
    [s: string]: object | {};
}
declare class View<ParametersInterface = {
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

interface ParametersInterface {
    [s: string]: string | number | undefined;
}
interface IndexParametersInterface extends ParametersInterface {
    per?: number;
    page?: number;
    order?: "asc" | "desc";
}
interface RouteSendInterface {
    [s: "index" | "store" | "show" | "update" | "destroy" | string]: {
        routeName: string;
        method: MethodType;
    };
}
declare class Model<Response = ResponseType, IndexParameters = IndexParametersInterface, ShowParameters = ParametersInterface, StoreParameters = ParametersInterface, UpdateParameters = ParametersInterface, DestroyParameters = ParametersInterface> {
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
type IndexQuery = {
    page?: number;
    per?: number;
    order?: "desc" | "asc";
};

interface PaginationProps extends Bootstrap.PaginationProps {
    meta: ResponseMetaType;
    setPage: React__default.Dispatch<React__default.SetStateAction<number>>;
}

interface ToastProps extends Bootstrap.ToastProps {
    header?: React__default.ReactNode;
}
interface ToastContainerProps extends Bootstrap.ToastContainerProps {
}

interface NotificationProps {
    header?: React__default.ReactNode;
    body?: React__default.ReactNode;
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

interface IconProps extends React__default.PropsWithChildren {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
    name: SvgName;
}
type SvgName = "normal" | "add" | "edit" | "trash" | "info" | "check" | "exclamation";

interface ButtonChildrenProps extends React__default.PropsWithChildren {
    mode?: SvgName;
}
type ButtonProps = Bootstrap.ButtonProps & ButtonChildrenProps & {};

type AlertProps = Bootstrap.AlertProps & AlertChildrenProps & {
    Heading?: React__default.ReactElement;
};
interface AlertChildrenProps extends React__default.PropsWithChildren {
    name?: SvgName;
    width?: number;
    heigth?: number;
}

interface FeedbackProps extends React__default.PropsWithChildren {
    validMessage?: React__default.ReactElement | string;
    invalidMessage?: React__default.ReactElement | string;
    name?: string;
}
interface FeedbackContextInterface {
    name: string;
    invalidMessages: string[] | false;
}
interface UseFeedback extends FeedbackContextInterface {
    changeInvalidMessages: (props: string[] | false) => void;
    changeResponse: (props: ResponseType<object, {
        [key: string]: string[];
    }> | undefined) => void;
}

interface FormElementWrapperProps extends React__default.PropsWithChildren {
    label: string;
    description?: string;
    parent?: HTMLAttributes<HTMLDivElement>;
    required?: boolean;
}

interface FormSelectProps extends Bootstrap.FormSelectProps {
    required?: boolean;
    validMessage?: React__default.ReactElement | string;
    invalidMessage?: React__default.ReactElement | string;
    name: string;
    options?: {
        value: string;
        label: string;
    }[];
}

type FormSelectWrapperProps = FormElementWrapperProps & FormSelectProps & {};

interface FormControlProps extends Bootstrap.FormControlProps {
    maxLength?: number;
    required?: boolean;
    validMessage?: React__default.ReactElement | string;
    invalidMessage?: React__default.ReactElement | string;
    name: string;
}

type FormControlWrapperProps = FormElementWrapperProps & FormControlProps & {};

interface FormContextProps<T = ResponseType> {
    Response?: T;
    setResponse: (response: T | undefined) => void;
}
interface UseFormProps<T = ResponseType> extends FormContextProps<T> {
    Response: T | undefined;
    setResponse: (response: T | undefined) => void;
}

interface FormProps extends Bootstrap.FormProps {
    successMessage?: React__default.ReactElement | false;
    Response?: ResponseType;
}
interface FormNotificationProps {
    Response: UseFormProps;
    successMessage?: React__default.ReactElement | false;
}

declare const returnLibrary: {
    createHeader(headers?: object | undefined): HeadersInit;
    checkNonce(expectedNonce: string, receivedNonce: string | undefined): boolean;
    route(__ROUTES__: Record<string, string>, routeName: string, parameters?: Record<string, string>, containDomain?: boolean): string;
    createQueries(parameters?: Record<string, string>): string;
    getQueries(path: string): {
        [s: string]: string;
    };
    getQuery(key: string, path?: string | undefined): string | undefined;
    View: typeof View;
    cookies(): Record<string, string>;
    cookie(key?: string | undefined): string | Record<string, string> | undefined;
    createKey(): string;
    isString(value: any): boolean;
    date_format(date?: string | Date | null | undefined, format?: string): string;
    number_format(number: number): string;
    sortJSON<T = object>(json: T): T;
    saveStorage(key: string, value: any): void;
    getStorage(key: string): any;
    getEndpoint(base_uri: string, parameters?: {}): string;
    changeParameters(uri: string, parameters?: {
        [s: string]: string;
    }): string;
    getIndex<T_1 = ResponseType<ResponseIndexType<object>, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, parameters?: IndexQuery): Promise<string | T_1>;
    getShow<T_2 = ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, parameters?: {}): Promise<string | T_2>;
    postStore<T_3 = ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, body?: {}, parameters?: {}): Promise<string | T_3>;
    putUpdate<T_4 = ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, body?: {}, parameters?: {}): Promise<string | T_4>;
    deleteDestroy<T_5 = ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, parameters?: {}): Promise<string | T_5>;
    Model: typeof Model;
    Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
    FormNotification: React.ForwardRefExoticComponent<FormNotificationProps>;
    FormContext: React.Context<FormContextProps<ResponseType<object, string[] | {
        [key: string]: string[];
    }>>>;
    useForm: <T_6>() => UseFormProps<T_6>;
    Control: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    ControlWrapper: React.ForwardRefExoticComponent<FormControlWrapperProps>;
    ElementWrapper: React.ForwardRefExoticComponent<FormElementWrapperProps>;
    Select: React.ForwardRefExoticComponent<FormSelectProps>;
    SelectWrapper: React.ForwardRefExoticComponent<FormSelectWrapperProps>;
    Feedback: (props: FeedbackProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    FeedbackContext: React.Context<UseFeedback>;
    useFeedback: (props: FeedbackContextInterface) => UseFeedback;
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
    Pagination: React.ForwardRefExoticComponent<PaginationProps>;
    Modal: React.ForwardRefExoticComponent<ModalProps>;
    ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps>;
    ModalBody: React.ForwardRefExoticComponent<ModalBodyProps>;
    ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps>;
    Redux: {
        Redux: (props: ReduxProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        store: StoreInterface;
        reducer: redux.Reducer<any, redux.AnyAction>;
    } & ActionInterface;
};

export { returnLibrary as default };
