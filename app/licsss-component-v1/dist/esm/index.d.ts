/// <reference types="react" />
import * as React from 'react';
import React__default, { HTMLAttributes } from 'react';
import Bootstrap from 'react-bootstrap';

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
type ResponseType<T = object> = {
    status: ResponseStatusType;
    payloads?: T;
    error?: ResponseErrorType;
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

interface FormElementWrapperProps extends React__default.PropsWithChildren {
    label: string;
    description?: string;
    parent?: HTMLAttributes<HTMLDivElement>;
    required?: boolean;
}

interface FormSelectProps extends Bootstrap.FormSelectProps {
    required?: boolean;
    validMessage?: React__default.ReactNode;
    invalidMessage?: React__default.ReactNode;
    options?: {
        value: string;
        label: string;
    }[];
}

type FormSelectWrapperProps = FormElementWrapperProps & FormSelectProps & {};

interface FormControlProps extends Bootstrap.FormControlProps {
    maxLength?: number;
    required?: boolean;
    validMessage?: React__default.ReactNode;
    invalidMessage?: React__default.ReactNode;
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
    cookies(): Record<string, string>;
    cookie(key?: string | undefined): string | Record<string, string> | undefined;
    createKey(): string;
    isString(value: any): boolean;
    date_format(date?: string | Date | null | undefined, format?: string): string;
    number_format(number: number): string;
    sortJSON<T = object>(json: T): T;
    Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
    FormNotification: React.ForwardRefExoticComponent<FormNotificationProps>;
    FormContext: React.Context<FormContextProps<ResponseType<object>>>;
    useForm: <T_1>() => UseFormProps<T_1>;
    Control: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    ControlWrapper: React.ForwardRefExoticComponent<FormControlWrapperProps>;
    ElementWrapper: React.ForwardRefExoticComponent<FormElementWrapperProps>;
    Select: React.ForwardRefExoticComponent<FormSelectProps>;
    SelectWrapper: React.ForwardRefExoticComponent<FormSelectWrapperProps>;
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
};

export { returnLibrary as default };
