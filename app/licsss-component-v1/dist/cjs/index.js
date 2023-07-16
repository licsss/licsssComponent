'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactBootstrap = require('react-bootstrap');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Icon = React.forwardRef((props, ref) => {
    let _a = Object.assign({}, props), { name } = _a, Props = __rest(_a, ["name"]);
    if (name === "normal" || !name)
        return props.children;
    if (svgs[name])
        Props = Object.assign(Object.assign({}, props), svgs[name]);
    if (!Props["width"])
        Props["width"] = 16;
    if (!Props["height"])
        Props["height"] = 16;
    Props["className"] = `pb-1 ${props["className"] || ""} ${Props["className"] || ""}`;
    return (jsxRuntime.jsx("svg", Object.assign({ ref: ref, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: `0 0 16 16` }, Props)));
});
const svgs = {
    normal: { name: "normal" },
    add: {
        name: "add",
        className: "bi bi-plus-circle",
        children: (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), jsxRuntime.jsx("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })] })),
    },
    edit: {
        name: "edit",
        className: "bi bi-pencil-fill",
        children: (jsxRuntime.jsx("path", { d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" })),
    },
    trash: {
        name: "trash",
        className: "bi bi-trash-fill",
        children: (jsxRuntime.jsx("path", { d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" })),
    },
    info: {
        name: "info",
        className: "bi bi-info-circle-fill",
        children: (jsxRuntime.jsx("path", { d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" })),
    },
    check: {
        name: "check",
        className: "bi bi-check-circle-fill",
        children: (jsxRuntime.jsx("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })),
    },
    exclamation: {
        name: "exclamation",
        className: "bi bi-exclamation-triangle-fill",
        children: (jsxRuntime.jsx("path", { d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" })),
    },
};

var Alert = React.forwardRef((_a, ref) => {
    var { name, width, heigth, children, className = "", variant, Heading } = _a, props = __rest(_a, ["name", "width", "heigth", "children", "className", "variant", "Heading"]);
    function getVariant() {
        if (variant)
            return variant;
        switch (name) {
            case "info":
                return "info";
            case "check":
                return "warning";
            case "exclamation":
                return "danger";
        }
        return "primary";
    }
    return (jsxRuntime.jsx(reactBootstrap.Alert, Object.assign({ ref: ref, variant: getVariant() }, props, { className: `position-static px-2 py-3 ${className}` }, { children: jsxRuntime.jsxs(AlertChildren, Object.assign({ name: name, width: width, heigth: heigth }, { children: [Heading && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(reactBootstrap.Alert.Heading, { children: Heading }), jsxRuntime.jsx("hr", {})] })), children] })) })));
});
const AlertChildren = React.forwardRef((_a, ref) => {
    var { width = 32, heigth = 32 } = _a, props = __rest(_a, ["width", "heigth"]);
    if (!props.name || props.name === "normal")
        return jsxRuntime.jsx("div", { ref: ref });
    return (jsxRuntime.jsx("table", Object.assign({ ref: ref, className: "w-100" }, { children: jsxRuntime.jsxs("tr", { children: [jsxRuntime.jsx("td", Object.assign({ className: "w-0 align-middle p-0 pe-3" }, { children: jsxRuntime.jsx(Icon, { name: props.name, width: width, height: heigth, className: "mt-auto align-middle" }) })), jsxRuntime.jsx("td", { children: props.children })] }) })));
});

var Button = React.forwardRef((props, ref) => {
    const { mode, children, className } = props, ButtonProps = __rest(props, ["mode", "children", "className"]);
    return (jsxRuntime.jsx(reactBootstrap.Button, Object.assign({}, ButtonProps, { className: `mt-2 ${className || ""}`, ref: ref }, { children: jsxRuntime.jsx(ButtonChildren, Object.assign({ mode: props.mode }, { children: children })) })));
});
const ButtonChildren = React.forwardRef((props, ref) => {
    let Children = props.children;
    switch (props.mode) {
        case "add":
            if (!Children)
                Children = "登録";
            break;
        case "edit":
            if (!Children)
                Children = "編集";
            break;
        case "trash":
            if (!Children)
                Children = "削除";
            break;
        case "normal":
        default:
            return jsxRuntime.jsx("div", Object.assign({ ref: ref }, { children: Children }));
    }
    return (jsxRuntime.jsxs(reactBootstrap.Row, Object.assign({ className: "px-2" }, { children: [jsxRuntime.jsx(reactBootstrap.Col, Object.assign({ className: "px-0" }, { children: Children })), jsxRuntime.jsx(reactBootstrap.Col, Object.assign({ xs: "auto", className: "px-0 ps-1" }, { children: jsxRuntime.jsx(Icon, { name: props.mode }) }))] })));
});

var Toast = React.forwardRef((_a, ref) => {
    var { header, children, animation = true } = _a, props = __rest(_a, ["header", "children", "animation"]);
    return (jsxRuntime.jsxs(reactBootstrap.Toast, Object.assign({}, props, { animation: animation, ref: ref }, { children: [header && (jsxRuntime.jsx(reactBootstrap.Toast.Header, { children: jsxRuntime.jsx("div", Object.assign({ className: "me-auto" }, { children: header })) })), jsxRuntime.jsx(reactBootstrap.Toast.Body, { children: children })] })));
});
const ToastContainer = React.forwardRef((props, ref) => {
    return jsxRuntime.jsx(reactBootstrap.ToastContainer, Object.assign({}, props, { ref: ref }));
});

/**
 * 全てのクッキー取得
 *
 * @export
 * @return {Record<string, string>}
 */
function cookies() {
    let all_cookies = {};
    document.cookie.split("; ").forEach(function (value) {
        let tmp_cookie = value.split("=");
        all_cookies[tmp_cookie[0]] = decodeURIComponent(tmp_cookie[1]);
    });
    return all_cookies;
}
/**
 * 指定クッキー取得
 *
 * @export
 * @param {string | undefined} key
 * @return {(string | undefined)}
 */
function cookie(key = undefined) {
    let all_cookies = cookies();
    if (key === undefined)
        return all_cookies;
    if (all_cookies[key] !== undefined)
        return all_cookies[key];
    return undefined;
}
/**
 * ランダム文字列生成
 *
 * @export
 * @return {*}  {string}
 */
function createKey() {
    return Math.random().toString(32).substring(2);
}
/**
 * 文字列判定
 * @param value
 * @returns
 */
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
/**
 * 日付フォーマット
 * @param date
 * @param format
 * @returns
 */
function date_format(date = undefined, format = "Y/n/j H:i") {
    let dateObject;
    switch (date) {
        case null:
        case undefined:
            dateObject = new Date();
            break;
        default:
            if (isString(date)) {
                dateObject = new Date(date);
            }
            else {
                dateObject = date;
            }
    }
    const Y = String(dateObject.getFullYear());
    const n = String(Number(dateObject.getMonth()) + 1);
    const m = String(("00" + n).slice(-2));
    const j = String(dateObject.getDate());
    const d = String(("00" + j).slice(-2));
    const H = String(dateObject.getHours());
    const i = String(("00" + dateObject.getMinutes()).slice(-2));
    const s = String(("00" + dateObject.getSeconds()).slice(-2));
    const WeekDays = ["日", "月", "火", "水", "木", "金", "土"];
    return format
        .replace("Y", Y)
        .replace("n", n)
        .replace("j", j)
        .replace("m", m)
        .replace("d", d)
        .replace("H", H)
        .replace("i", i)
        .replace("s", s)
        .replace("w", WeekDays[dateObject.getDay()]);
}
/**
 * 数値フォーマット
 * @param number
 * @returns
 */
function number_format(number) {
    return Number(number).toLocaleString(undefined, {
        maximumFractionDigits: 20,
    });
}
/**
 * JSONキーによる並び替え
 *
 * @export
 * @param {object} json
 * @return {*}  {object}
 */
function sortJSON(json) {
    return Object.fromEntries(Object.entries(json).sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)));
}

/**
 * 送信ヘッダ作成
 *
 * @export
 * @param {(object | undefined)} [headers=undefined]
 * @return {HeadersInit}
 */
function createHeader(headers = undefined) {
    let add_header = {
        Accept: "application/json",
    };
    let xsrf_token = cookie("XSRF-TOKEN");
    if (xsrf_token)
        add_header["X-XSRF-TOKEN"] = xsrf_token;
    let header = Object.assign({}, add_header, headers || {});
    if (!header["Content-Type"])
        header["Content-Type"] = "application/json";
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
function checkNonce(expectedNonce, receivedNonce) {
    return expectedNonce === receivedNonce;
}

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
function route(__ROUTES__, routeName, parameters = {}, containDomain = false) {
    if (!__ROUTES__[routeName])
        return "";
    let uri = __ROUTES__[routeName];
    if (containDomain) {
        uri = `${window.location.protocol}//${window.location.hostname}` + uri;
    }
    Object.keys(parameters).forEach((key) => {
        uri = uri.replace(`:${key}`, encodeURIComponent(parameters[key]));
    });
    return uri;
}
/**
 * クエリ作成
 *
 * @export
 * @param {Record<string, string>} [parameters={}]
 * @return {*}  {string}
 */
function createQueries(parameters = {}) {
    let query = [];
    Object.keys(parameters).forEach((key) => {
        query.push(`${key}=${encodeURIComponent(parameters[key])}`);
    });
    return query.join("&");
}

var Functions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    checkNonce: checkNonce,
    cookie: cookie,
    cookies: cookies,
    createHeader: createHeader,
    createKey: createKey,
    createQueries: createQueries,
    date_format: date_format,
    isString: isString,
    number_format: number_format,
    route: route,
    sortJSON: sortJSON
});

var NotificationContext = React.createContext({
    Notifications: {},
    addNotification: () => "",
    removeNotification: () => "",
});
function useNotification(props) {
    const [Notifications, setNotifications] = React.useState(props.Notifications || {});
    function addNotification(notification) {
        const key = createKey();
        Notifications[key] = notification;
        setNotifications(Object.assign({}, Notifications));
        return key;
    }
    function removeNotification(key) {
        if (!Notifications[key])
            return;
        delete Notifications[key];
        setNotifications(Object.assign({}, Notifications));
    }
    return {
        Notifications: Notifications,
        addNotification: addNotification,
        removeNotification: removeNotification,
    };
}

var Notification = React.forwardRef((props, ref) => {
    const NotificationContextValue = useNotification({
        Notifications: props.Notifications || {},
        addNotification: () => "",
        removeNotification: () => "",
    });
    return (jsxRuntime.jsx(NotificationContext.Provider, Object.assign({ value: NotificationContextValue }, { children: jsxRuntime.jsx(ToastContainer, Object.assign({ ref: ref, className: "position-fixed me-2 mb-2", position: "bottom-end" }, { children: Object.keys(NotificationContextValue.Notifications).map((notificationkey) => (jsxRuntime.jsx(NotificationToast, { Notification: NotificationContextValue.Notifications[notificationkey], notificationKey: notificationkey, delay: NotificationContextValue.Notifications[notificationkey].delay, NotificationContextValue: NotificationContextValue }, notificationkey))) })) })));
});
const NotificationToast = React.forwardRef((_a, ref) => {
    var { delay = 5000, NotificationContextValue } = _a, props = __rest(_a, ["delay", "NotificationContextValue"]);
    const [Show, setShow] = React.useState(true);
    let ToastProps = {};
    ToastProps["header"] = props.Notification.header;
    ToastProps["children"] = props.Notification.body;
    React.useEffect(() => {
        if (delay === false)
            return;
        setTimeout(close, delay);
    }, [delay]);
    function close() {
        setShow(false);
        setTimeout(() => {
            NotificationContextValue === null || NotificationContextValue === void 0 ? void 0 : NotificationContextValue.removeNotification(props.notificationKey);
        }, 1500);
    }
    return jsxRuntime.jsx(Toast, Object.assign({ show: Show }, ToastProps, { onClose: close, ref: ref }));
});

const Components = {
    Alert: Alert,
    AlertChildren: AlertChildren,
    Button: Button,
    ButtonChildren: ButtonChildren,
    Icon: Icon,
    svgs: svgs,
    Notification: Notification,
    NotificationToast: NotificationToast,
    NotificationContext: NotificationContext,
    useNotification: useNotification,
    Toast: Toast,
    ToastContainer: ToastContainer,
};

var Control = React.forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, props), { onChange: onChange }), { validMessage, invalidMessage } = _a, Prop = __rest(_a, ["validMessage", "invalidMessage"]);
    if (!Prop.maxLength)
        Prop.maxLength = undefined;
    const [Cnt, setCnt] = React.useState(String(props.value ? props.value : props.defaultValue ? props.defaultValue : "").length);
    function onChange(e) {
        setCnt(String(e.currentTarget.value).length);
        if (props.onChange)
            props.onChange(e);
    }
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(reactBootstrap.FormControl, Object.assign({}, Prop, { ref: ref })), jsxRuntime.jsx(reactBootstrap.FormControl.Feedback, { children: validMessage }), jsxRuntime.jsx(reactBootstrap.FormControl.Feedback, Object.assign({ type: "invalid" }, { children: invalidMessage })), jsxRuntime.jsx("div", Object.assign({ className: "form-control-info " + (Prop.maxLength ? "" : "d-none") }, { children: `${Cnt}/${Prop.maxLength}文字` }))] }));
});

var FormContext = React.createContext({
    Response: undefined,
    setResponse: () => "",
});
function useForm() {
    const [Response, changeResponse] = React.useState(undefined);
    function setResponse(response) {
        changeResponse(response === undefined ? undefined : Object.assign({}, response));
    }
    return {
        Response: Response,
        setResponse: setResponse,
    };
}

var Form = React.forwardRef((_a, ref) => {
    var { validated = false, noValidate = true, onSubmit = undefined, successMessage = false, Response = undefined } = _a, props = __rest(_a, ["validated", "noValidate", "onSubmit", "successMessage", "Response"]);
    const FormContextValue = useForm();
    const [Validated, setValidated] = React.useState(validated);
    React.useEffect(() => {
        setValidated(validated);
    }, [validated]);
    function doSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            if (!e.currentTarget.checkValidity()) {
                e.stopPropagation();
                setValidated(true);
                return;
            }
            setValidated(false);
            if (onSubmit)
                yield onSubmit(e);
            if (Response)
                FormContextValue.setResponse(Response);
        });
    }
    return (jsxRuntime.jsxs(FormContext.Provider, Object.assign({ value: FormContextValue }, { children: [jsxRuntime.jsx(FormNotification, { Response: FormContextValue, successMessage: successMessage }), jsxRuntime.jsx(reactBootstrap.Form, Object.assign({}, props, { ref: ref, validated: Validated, noValidate: noValidate, onSubmit: doSubmit }))] })));
});
const FormNotification = React.forwardRef((props, ref) => {
    var _a, _b, _c;
    if (!props.Response.Response || props.successMessage === false)
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    let AlertProp = {};
    if (props.Response.Response.status.result) {
        AlertProp["name"] = "info";
        AlertProp["variant"] = "success";
        AlertProp["children"] = props.successMessage || "処理が完了しました";
    }
    else {
        AlertProp["name"] = "exclamation";
        AlertProp["Heading"] = (jsxRuntime.jsx(jsxRuntime.Fragment, { children: `[${(_a = props.Response.Response.error) === null || _a === void 0 ? void 0 : _a.abstract}]${(_b = props.Response.Response.error) === null || _b === void 0 ? void 0 : _b.title}` }));
        AlertProp["children"] = (jsxRuntime.jsx("ul", { children: (_c = props.Response.Response.error) === null || _c === void 0 ? void 0 : _c.messages.map((message) => (jsxRuntime.jsx("li", { children: message }, message))) }));
    }
    return jsxRuntime.jsx(Alert, Object.assign({}, AlertProp, { ref: ref }));
});

var ElementWrapper = React.forwardRef((props, ref) => {
    const _a = props.parent || {}, { className = "" } = _a, ParentProps = __rest(_a, ["className"]);
    return (jsxRuntime.jsxs("div", Object.assign({}, ParentProps, { className: `mt-3 ${className}`, ref: ref }, { children: [jsxRuntime.jsxs(reactBootstrap.Form.Label, { children: [props.label, props.required && jsxRuntime.jsx("span", Object.assign({ className: "text-danger" }, { children: "\uFF0A" })), jsxRuntime.jsx(reactBootstrap.Form.Text, Object.assign({ className: "d-block ps-1" }, { children: props.description }))] }), props.children] })));
});

var ControlWrapper = React.forwardRef((props, ref) => {
    const { label, description, parent } = props, ControlProps = __rest(props, ["label", "description", "parent"]);
    if (!ControlProps.placeholder)
        ControlProps.placeholder = label;
    return (jsxRuntime.jsx(ElementWrapper, Object.assign({ label: label, description: description, parent: parent, required: props.required }, { children: jsxRuntime.jsx(Control, Object.assign({}, ControlProps, { ref: ref })) })));
});

var Select = React.forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, props), { onChange: onChange }), { validMessage, invalidMessage, children, options } = _a, SelectProp = __rest(_a, ["validMessage", "invalidMessage", "children", "options"]);
    function onChange(e) {
        if (props.onChange)
            props.onChange(e);
    }
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(reactBootstrap.FormSelect, Object.assign({}, SelectProp, { ref: ref }, { children: [jsxRuntime.jsx("option", { label: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044", className: SelectProp.required ? "d-none" : "" }), options === null || options === void 0 ? void 0 : options.map((option) => jsxRuntime.jsx("option", Object.assign({}, option), option.value)), children] })), jsxRuntime.jsx(reactBootstrap.FormControl.Feedback, { children: validMessage }), jsxRuntime.jsx(reactBootstrap.FormControl.Feedback, Object.assign({ type: "invalid" }, { children: invalidMessage }))] }));
});

var SelectWrapper = React.forwardRef((props, ref) => {
    const { label, description, parent } = props, SelectProps = __rest(props, ["label", "description", "parent"]);
    return (jsxRuntime.jsx(ElementWrapper, Object.assign({ label: label, description: description, parent: parent, required: props.required }, { children: jsxRuntime.jsx(Select, Object.assign({}, SelectProps, { ref: ref })) })));
});

const Forms = {
    Form: Form,
    FormNotification: FormNotification,
    FormContext: FormContext,
    useForm: useForm,
    Control: Control,
    ControlWrapper: ControlWrapper,
    ElementWrapper: ElementWrapper,
    Select: Select,
    SelectWrapper: SelectWrapper,
};

const Component = Object.assign(Object.assign({}, Forms), Components);

const returnLibrary = Object.assign(Object.assign({}, Component), Functions);

module.exports = returnLibrary;
