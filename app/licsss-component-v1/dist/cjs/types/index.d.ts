/// <reference types="react" />
import * as Functions from "./functions";
declare const returnLibrary: {
    createHeader(headers?: object | undefined): HeadersInit;
    checkNonce(expectedNonce: string, receivedNonce: string | undefined): boolean;
    route(__ROUTES__: Record<string, string>, routeName: string, parameters?: Record<string, string>, containDomain?: boolean): string;
    createQueries(parameters?: Record<string, string>): string;
    getQueries(path: string): {
        [s: string]: string;
    };
    getQuery(key: string, path?: string | undefined): string | undefined;
    View: typeof Functions.View;
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
    getIndex<T_1 = Functions.ResponseType<Functions.ResponseIndexType<object>, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, parameters?: Functions.IndexQuery): Promise<string | T_1>;
    getShow<T_2 = Functions.ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, parameters?: {}): Promise<string | T_2>;
    postStore<T_3 = Functions.ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, body?: {}, parameters?: {}): Promise<string | T_3>;
    putUpdate<T_4 = Functions.ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, body?: {}, parameters?: {}): Promise<string | T_4>;
    deleteDestroy<T_5 = Functions.ResponseType<object, string[] | {
        [key: string]: string[];
    }>>(base_uri: string, parameters?: {}): Promise<string | T_5>;
    Model: typeof Functions.Model;
    Form: import("react").ForwardRefExoticComponent<import("./components/Form/Form").FormProps & import("react").RefAttributes<HTMLFormElement>>;
    FormNotification: import("react").ForwardRefExoticComponent<import("./components/Form/Form").FormNotificationProps>;
    FormContext: import("react").Context<import("./components/Form/Context").FormContextProps<Functions.ResponseType<object, string[] | {
        [key: string]: string[];
    }>>>;
    useForm: <T_6>() => import("./components/Form/Context").UseFormProps<T_6>;
    Control: import("react").ForwardRefExoticComponent<import("./components/Form/Control").FormControlProps & import("react").RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    ControlWrapper: import("react").ForwardRefExoticComponent<import("./components/Form/ControlWrapper").FormControlWrapperProps>;
    ElementWrapper: import("react").ForwardRefExoticComponent<import("./components/Form/ElementWrapper").FormElementWrapperProps>;
    Select: import("react").ForwardRefExoticComponent<import("./components/Form/Select").FormSelectProps>;
    SelectWrapper: import("react").ForwardRefExoticComponent<import("./components/Form/SelectWrapper").FormSelectWrapperProps>;
    Feedback: (props: import("./components/Form/Feedback").FeedbackProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    FeedbackContext: import("react").Context<import("./components/Form/Feedback").UseFeedback>;
    useFeedback: (props: import("./components/Form/Feedback").FeedbackContextInterface) => import("./components/Form/Feedback").UseFeedback;
    Alert: import("react").ForwardRefExoticComponent<import("./components/Component/Alert").AlertProps>;
    AlertChildren: import("react").ForwardRefExoticComponent<import("./components/Component/Alert").AlertChildrenProps>;
    Button: import("react").ForwardRefExoticComponent<import("./components/Component/Button").ButtonProps>;
    ButtonChildren: import("react").ForwardRefExoticComponent<import("./components/Component/Button").ButtonChildrenProps>;
    Icon: import("react").ForwardRefExoticComponent<import("./components/Component/Icon").IconProps>;
    svgs: Record<import("./components/Component/Icon").SvgName, import("./components/Component/Icon").IconProps>;
    Notification: import("react").ForwardRefExoticComponent<import("./components/Component/Notification").NotiProps>;
    NotificationToast: import("react").ForwardRefExoticComponent<import("./components/Component/Notification").NotificationToastProps>;
    NotificationContext: import("react").Context<import("./components/Component/Notification/Context").NotificationContextProps>;
    useNotification: (props: import("./components/Component/Notification/Context").NotificationContextProps) => import("./components/Component/Notification/Context").UseNotificationProps;
    Toast: import("react").ForwardRefExoticComponent<import("./components/Component/Toast").ToastProps>;
    ToastContainer: import("react").ForwardRefExoticComponent<import("./components/Component/Toast").ToastContainerProps>;
    Pagination: import("react").ForwardRefExoticComponent<import("./components/Component/Pagination").PaginationProps>;
    Modal: import("react").ForwardRefExoticComponent<import("./components/Component/Modal").ModalProps>;
    ModalHeader: import("react").ForwardRefExoticComponent<import("./components/Component/Modal/Header").ModalHeaderProps>;
    ModalBody: import("react").ForwardRefExoticComponent<import("./components/Component/Modal/Body").ModalBodyProps>;
    ModalFooter: import("react").ForwardRefExoticComponent<import("./components/Component/Modal/Footer").ModalFooterProps>;
    Redux: {
        Redux: (props: import("./components/Wrapper/Redux").ReduxProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        store: import("./components/Wrapper/Redux/store").StoreInterface;
        reducer: import("redux").Reducer<any, import("redux").AnyAction>;
    } & import("./components/Wrapper/Redux/reducer").ActionInterface;
};
export default returnLibrary;
