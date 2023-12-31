import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React from 'react';
import { Alert as Alert$1, Button as Button$1, Row, Col, Toast as Toast$1, ToastContainer as ToastContainer$1, Pagination as Pagination$1, ModalHeader as ModalHeader$1, ModalFooter as ModalFooter$1, ModalBody as ModalBody$1, Modal, FormControl, Form as Form$1, FormSelect } from 'react-bootstrap';
import { Provider, useSelector } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

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
        return jsx(Fragment, { children: props.children });
    if (svgs[name])
        Props = Object.assign(Object.assign({}, props), svgs[name]);
    if (!Props["width"])
        Props["width"] = 16;
    if (!Props["height"])
        Props["height"] = 16;
    Props["className"] = `pb-1 ${props["className"] || ""} ${Props["className"] || ""}`;
    return (jsx("svg", Object.assign({ ref: ref, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: `0 0 16 16` }, Props)));
});
const svgs = {
    normal: { name: "normal" },
    add: {
        name: "add",
        className: "bi bi-plus-circle",
        children: (jsxs(Fragment, { children: [jsx("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), jsx("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })] })),
    },
    edit: {
        name: "edit",
        className: "bi bi-pencil-fill",
        children: (jsx("path", { d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" })),
    },
    trash: {
        name: "trash",
        className: "bi bi-trash-fill",
        children: (jsx("path", { d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" })),
    },
    info: {
        name: "info",
        className: "bi bi-info-circle-fill",
        children: (jsx("path", { d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" })),
    },
    check: {
        name: "check",
        className: "bi bi-check-circle-fill",
        children: (jsx("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })),
    },
    exclamation: {
        name: "exclamation",
        className: "bi bi-exclamation-triangle-fill",
        children: (jsx("path", { d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" })),
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
            default:
                return "primary";
        }
    }
    return (jsx(Alert$1, Object.assign({ ref: ref, variant: getVariant() }, props, { className: `position-static px-2 py-3 ${className}` }, { children: jsxs(AlertChildren, Object.assign({ name: name, width: width, heigth: heigth }, { children: [Heading && (jsxs(Fragment, { children: [jsx(Alert$1.Heading, { children: Heading }), jsx("hr", {})] })), children] })) })));
});
const AlertChildren = React.forwardRef((_a, ref) => {
    var { width = 32, heigth = 32 } = _a, props = __rest(_a, ["width", "heigth"]);
    if (!props.name || props.name === "normal")
        return jsx("div", Object.assign({ ref: ref }, { children: props.children }));
    return (jsx("table", Object.assign({ ref: ref, className: "w-100" }, { children: jsxs("tr", { children: [jsx("td", Object.assign({ className: "w-0 align-middle p-0 pe-3" }, { children: jsx(Icon, { name: props.name, width: width, height: heigth, className: "mt-auto align-middle" }) })), jsx("td", { children: props.children })] }) })));
});

var Button = React.forwardRef((props, ref) => {
    const { mode, children, className } = props, ButtonProps = __rest(props, ["mode", "children", "className"]);
    return (jsx(Button$1, Object.assign({}, ButtonProps, { className: `mt-2 ${className || ""}`, ref: ref }, { children: jsx(ButtonChildren, Object.assign({ mode: props.mode }, { children: children })) })));
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
            return jsx("div", Object.assign({ ref: ref }, { children: Children }));
    }
    return (jsxs(Row, Object.assign({ className: "px-2" }, { children: [jsx(Col, Object.assign({ className: "px-0" }, { children: Children })), jsx(Col, Object.assign({ xs: "auto", className: "px-0 ps-1" }, { children: jsx(Icon, { name: props.mode }) }))] })));
});

var Toast = React.forwardRef((_a, ref) => {
    var { header, children, animation = true } = _a, props = __rest(_a, ["header", "children", "animation"]);
    return (jsxs(Toast$1, Object.assign({}, props, { animation: animation, ref: ref }, { children: [header && (jsx(Toast$1.Header, { children: jsx("div", Object.assign({ className: "me-auto" }, { children: header })) })), jsx(Toast$1.Body, { children: children })] })));
});
const ToastContainer = React.forwardRef((props, ref) => {
    return jsx(ToastContainer$1, Object.assign({}, props, { ref: ref }));
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
 * ストレージ保存
 *
 * @export
 * @param {string} key
 * @param {*} value
 */
function saveStorage(key, value) {
    window.localStorage.setItem(`licsss-storage-${key}`, JSON.stringify(value));
}
/**
 * ストレージ取得
 *
 * @export
 * @param {string} key
 * @return {*}  {(any | object)}
 */
function getStorage(key) {
    console.log(window.localStorage.getItem(`licsss-storage-${key}`));
    try {
        return JSON.parse(window.localStorage.getItem(`licsss-storage-${key}`) || "{}");
    }
    catch (_a) {
        return {};
    }
}

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
function send({ base_url = undefined, endpoint = "", method = "GET", body = undefined, headers = undefined, nonceKey = "X-LiCSSs-Nonce", }) {
    return __awaiter(this, void 0, void 0, function* () {
        //NONCE
        const nonce = createKey();
        //URL生成
        let url = "/";
        if (base_url !== undefined) {
            url = base_url;
        }
        url += endpoint;
        //送信オプション作成
        let opt = {
            method: method,
            credentials: "include",
        };
        if (body !== undefined)
            opt["body"] = body;
        //ヘッダ作成
        let customHeaders = Object.assign({}, (headers || {}));
        customHeaders[nonceKey] = nonce;
        opt["headers"] = createHeader(customHeaders);
        const res = yield fetch(url, opt)
            .then((response) => response.json())
            .then((res) => res)
            .catch((error) => error);
        return res;
    });
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

class Model {
    constructor() {
        this.baseUri = "";
        this.routeSend = {
            index: {
                routeName: "index",
                method: "GET",
            },
            store: {
                routeName: "store",
                method: "POST",
            },
            show: {
                routeName: "show",
                method: "GET",
            },
            update: {
                routeName: "",
                method: "PUT",
            },
            destroy: {
                routeName: "",
                method: "DELETE",
            },
        };
    }
    getRoute(endpoint, parameters = {}) {
        return getEndpoint(this.convertURI(endpoint), parameters || {});
    }
    convertURI(endpoint) {
        return `${this.baseUri}/${endpoint.replace(/\/*/, "")}`.replace(/\/$/, "");
    }
    send({ endpoint, parameters = {}, body = {}, method = "GET", }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield send({
                endpoint: this.getRoute(endpoint, parameters),
                body: JSON.stringify(body),
                method: method,
            });
        });
    }
    index(parameters) {
        return this.send({
            endpoint: this.routeSend["index"].routeName,
            parameters: parameters,
            method: this.routeSend["index"].method,
        });
    }
    show(parameters) {
        return this.send({
            endpoint: this.routeSend["show"].routeName,
            parameters: parameters,
            method: this.routeSend["show"].method,
        });
    }
    store(parameters) {
        return this.send({
            endpoint: this.routeSend["store"].routeName,
            parameters: parameters,
            method: this.routeSend["store"].method,
        });
    }
    update(parameters) {
        return this.send({
            endpoint: this.routeSend["update"].routeName,
            parameters: parameters,
            method: this.routeSend["update"].method,
        });
    }
    destroy(parameters) {
        return this.send({
            endpoint: this.routeSend["destroy"].routeName,
            parameters: parameters,
            method: this.routeSend["destroy"].method,
        });
    }
}
/**
 * パラメータ編集
 *
 * @export
 * @param {string} base_uri
 * @param {{}} [parameters={}]
 * @return {*}  {string}
 */
function getEndpoint(base_uri, parameters = {}) {
    return changeParameters(base_uri, parameters);
}
/**
 *パラメータ置換
 *
 * @export
 * @param {string} uri
 * @param {{}} [parameters={[s: string]: string }]
 * @return {*}  {string}
 */
function changeParameters(uri, parameters = {}) {
    let new_uri = uri;
    Object.keys(parameters).forEach((key) => {
        if (new_uri.search(RegExp(`:${key}/|:${key}$`, "ig")) > -1) {
            new_uri =
                "/" +
                    new_uri
                        .replace(RegExp(`:${key}/|:${key}$`, "ig"), `${parameters[key] || ""}/`)
                        .split("/")
                        .filter(Boolean)
                        .join("/");
            delete parameters[key];
        }
    });
    new_uri = removeParameters(new_uri);
    if (Object.keys(parameters).length > 0)
        new_uri += `?${createQueries(parameters)}`;
    return new_uri.replace(/\/$/, "");
}
function removeParameters(uri) {
    return uri.replace(/:[a-z]*\/|:[a-z]$/gi, "");
}
function getIndex(base_uri, parameters = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield send({
            endpoint: getEndpoint(base_uri, parameters),
            method: "GET",
        });
    });
}
function getShow(base_uri, parameters = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield send({
            endpoint: getEndpoint(base_uri, parameters),
            method: "GET",
        });
    });
}
function postStore(base_uri, body = {}, parameters = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return send({
            endpoint: getEndpoint(base_uri, parameters),
            body: JSON.stringify(body),
            method: "POST",
        });
    });
}
function putUpdate(base_uri, body = {}, parameters = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield send({
            endpoint: getEndpoint(base_uri, parameters),
            body: JSON.stringify(body),
            method: "PUT",
        });
    });
}
function deleteDestroy(base_uri, parameters = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield send({
            endpoint: getEndpoint(base_uri, parameters),
            method: "DELETE",
        });
    });
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
/**
 * 全クエリ取得
 *
 * @export
 * @param {string} path
 * @return {*}  {{ [s: string]: string }}
 */
function getQueries(path) {
    let queries = {};
    let splited_question = path.split("?");
    let splited_equal = splited_question[splited_question.length - 1].split("&");
    splited_equal.forEach((val) => {
        let splited = val.split("=");
        if (splited.length > 1)
            queries[splited[0]] = splited[1];
    });
    return queries;
}
/**
 * クエリ取得
 *
 * @export
 * @param {string} key
 * @param {(string | undefined)} [path=undefined]
 * @return {*}  {(string | undefined)}
 */
function getQuery(key, path = undefined) {
    let queries = getQueries(path === undefined ? window.location.href : path);
    return queries[key];
}
class View {
    constructor() {
        this.routes = {
            school: {
                index: "/school/:school",
            },
        };
    }
    getRoute(routeName, parameters = {}) {
        return getEndpoint(this.convertURI(routeName), parameters);
    }
    convertURI(routeName) {
        const splited = routeName.split(".");
        let route = "";
        let routes = Object.assign({}, this.routes);
        for (let i = 0; i < splited.length; ++i) {
            if (!routes[splited[i]])
                throw new Error("存在しないルートです");
            if (!isString(routes[splited[i]])) {
                routes = Object.assign({}, routes[splited[i]]);
            }
            else {
                route = routes[splited[i]];
            }
        }
        return `/${route.replace(/\/*/, "")}`.replace(/\/$/, "");
    }
    /**
     * httpから取得
     *
     * @param {string} routeName
     * @param {(ParametersInterface | any)} [parameters={}]
     * @return {*}
     * @memberof View
     */
    getFullUrl(routeName, parameters = {}) {
        return `${window.location.protocol}//${window.location.hostname}${this.getRoute(routeName, parameters)}`;
    }
    /**
     * 2つ目の/以降取得
     *
     * @param {string} routeName
     * @param {(ParametersInterface | any)} [parameters={}]
     * @memberof View
     */
    getUnderPath(routeName, parameters = {}) {
        return `/${this.getRoute(routeName, parameters).replace(/\/[\S]*\//, "")}`;
    }
}

var Functions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Model: Model,
    View: View,
    changeParameters: changeParameters,
    checkNonce: checkNonce,
    cookie: cookie,
    cookies: cookies,
    createHeader: createHeader,
    createKey: createKey,
    createQueries: createQueries,
    date_format: date_format,
    deleteDestroy: deleteDestroy,
    getEndpoint: getEndpoint,
    getIndex: getIndex,
    getQueries: getQueries,
    getQuery: getQuery,
    getShow: getShow,
    getStorage: getStorage,
    isString: isString,
    number_format: number_format,
    postStore: postStore,
    putUpdate: putUpdate,
    route: route,
    saveStorage: saveStorage,
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
    return (jsx(NotificationContext.Provider, Object.assign({ value: NotificationContextValue }, { children: jsx(ToastContainer, Object.assign({ ref: ref, className: "position-fixed me-2 mb-2", position: "bottom-end" }, { children: Object.keys(NotificationContextValue.Notifications).map((notificationkey) => (jsx(NotificationToast, { Notification: NotificationContextValue.Notifications[notificationkey], notificationKey: notificationkey, delay: NotificationContextValue.Notifications[notificationkey].delay, NotificationContextValue: NotificationContextValue }, notificationkey))) })) })));
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
    return jsx(Toast, Object.assign({ show: Show }, ToastProps, { onClose: close, ref: ref }));
});

var Pagination = React.forwardRef((_a, ref) => {
    var { meta, setPage, className } = _a, props = __rest(_a, ["meta", "setPage", "className"]);
    const [TopPage, setTopPage] = React.useState(true);
    const [LastPage, setLastPage] = React.useState(true);
    React.useEffect(() => {
        setTopPage(meta.currentPage === 1);
        setLastPage(meta.currentPage === meta.lastPage);
    }, [meta]);
    function changePage(e) {
        e.preventDefault();
        setPage(Number(getQuery("page", e.currentTarget.pathname)));
    }
    return (jsx("div", Object.assign({ className: "w-100", ref: ref }, { children: jsxs(Pagination$1, Object.assign({ className: "mx-auto mt-3 position-static " + className }, props, { children: [jsx(Pagination$1.First, { href: "?page=1", onClick: changePage, disabled: TopPage }), jsx(Pagination$1.Prev, { href: TopPage ? `?page=1` : `?page=${meta.currentPage - 1}`, onClick: changePage, disabled: TopPage }), jsx(Pagination$1.Item, Object.assign({ disabled: true }, { children: meta.currentPage })), jsx(Pagination$1.Next, { href: `?page=${meta.currentPage + 1}`, onClick: changePage, disabled: LastPage }), jsx(Pagination$1.Last, { href: LastPage ? `?page=${meta.lastPage}` : `?page=${meta.lastPage}`, onClick: changePage, disabled: LastPage })] })) })));
});

var ModalHeader = React.forwardRef((_a, ref) => {
    var { closeButton = true } = _a, props = __rest(_a, ["closeButton"]);
    return jsx(ModalHeader$1, Object.assign({ closeButton: closeButton }, props, { ref: ref }));
});

var ModalFooter = React.forwardRef((props, ref) => {
    return jsx(ModalFooter$1, Object.assign({}, props, { ref: ref }));
});

var ModalBody = React.forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    return jsx(ModalBody$1, Object.assign({}, props, { ref: ref }));
});

const _default = React.forwardRef((_a, ref) => {
    var { animation = true, scrollable = true, centered = true, Header, Body, Footer, children } = _a, props = __rest(_a, ["animation", "scrollable", "centered", "Header", "Body", "Footer", "children"]);
    return (jsxs(Modal, Object.assign({ animation: animation, scrollable: scrollable, centered: centered }, props, { ref: ref }, { children: [Header !== undefined && jsx(ModalHeader, Object.assign({}, Header)), jsx(ModalBody, { children: children }), Body !== undefined && jsx(ModalBody, Object.assign({}, Body)), Footer !== undefined && jsx(ModalFooter, Object.assign({}, Footer))] })));
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
    Pagination: Pagination,
    Modal: _default,
    ModalHeader: ModalHeader,
    ModalBody: ModalBody,
    ModalFooter: ModalFooter,
};

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

function Feedback(props) {
    const FormContext$1 = React.useContext(FormContext);
    const invalidMessages = React.useContext(FeedbackContext);
    React.useEffect(() => {
        if (!invalidMessages.changeResponse)
            return;
        invalidMessages.changeResponse(FormContext$1.Response);
    }, [FormContext$1.Response, invalidMessages]);
    return (jsxs(Fragment, { children: [props.children, props.validMessage && (jsx(FormControl.Feedback, { children: props.validMessage })), invalidMessages.invalidMessages !== false && (jsx("div", Object.assign({ className: "text-danger" }, { children: jsx("ul", { children: invalidMessages.invalidMessages.map((message) => (jsx("li", { children: message }, `${props.name}-${message}`))) }) }))), props.invalidMessage && (jsx(FormControl.Feedback, Object.assign({ type: "invalid" }, { children: props.invalidMessage })))] }));
}
const FeedbackContext = React.createContext({
    name: "",
    invalidMessages: false,
    changeInvalidMessages: (p) => "",
    changeResponse: (p) => "",
});
function useFeedback(props) {
    const [invalidMessages, setInvalidMessages] = React.useState(props.invalidMessages);
    function changeInvalidMessages(invalidMessages) {
        setInvalidMessages(invalidMessages === false ? false : [...invalidMessages]);
    }
    function changeResponse(response) {
        var _a, _b;
        let invalidMessages = false;
        if (response !== undefined &&
            !response.status.result &&
            ((_a = response.error) === null || _a === void 0 ? void 0 : _a.messages[props.name]) &&
            Array.isArray((_b = response.error) === null || _b === void 0 ? void 0 : _b.messages[props.name]))
            invalidMessages = response.error.messages[props.name];
        changeInvalidMessages(invalidMessages);
    }
    return {
        name: props.name,
        invalidMessages: invalidMessages,
        changeInvalidMessages: changeInvalidMessages,
        changeResponse: changeResponse,
    };
}

var Control = React.forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, props), { onChange: onChange }), { validMessage, invalidMessage } = _a, Prop = __rest(_a, ["validMessage", "invalidMessage"]);
    if (!Prop.maxLength)
        Prop.maxLength = undefined;
    const [Cnt, setCnt] = React.useState(String(props.value ? props.value : props.defaultValue ? props.defaultValue : "").length);
    const FeedbackValue = useFeedback({
        name: Prop.name,
        invalidMessages: false,
    });
    function onChange(e) {
        setCnt(String(e.currentTarget.value).length);
        if (props.onChange)
            props.onChange(e);
    }
    return (jsxs(FeedbackContext.Provider, Object.assign({ value: FeedbackValue }, { children: [jsx(FormControl, Object.assign({}, Prop, { ref: ref, className: `
            ${Prop.className || ""}${FeedbackValue.invalidMessages !== false ? " border-danger" : ""}
          ` })), jsx(Feedback, { validMessage: validMessage, invalidMessage: invalidMessage, name: Prop.name }), jsx("div", Object.assign({ className: "form-control-info " + (Prop.maxLength ? "" : "d-none") }, { children: `${Cnt}/${Prop.maxLength}文字` }))] })));
});

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
            if (Response) {
                FormContextValue.setResponse(Response);
                if (!Response.status.result)
                    setValidated(true);
            }
        });
    }
    return (jsxs(FormContext.Provider, Object.assign({ value: FormContextValue }, { children: [jsx(FormNotification, { Response: FormContextValue, successMessage: successMessage }), jsx(Form$1, Object.assign({}, props, { ref: ref, validated: Validated, noValidate: noValidate, onSubmit: doSubmit }))] })));
});
const FormNotification = React.forwardRef((props, ref) => {
    var _a, _b, _c, _d;
    if (!props.Response.Response || props.successMessage === false)
        return jsx(Fragment, {});
    let AlertProp = {};
    if (props.Response.Response.status.result) {
        AlertProp["name"] = "info";
        AlertProp["variant"] = "success";
        AlertProp["children"] = props.successMessage || "処理が完了しました";
    }
    else {
        AlertProp["name"] = "exclamation";
        AlertProp["Heading"] = (jsx(Fragment, { children: `[${(_a = props.Response.Response.error) === null || _a === void 0 ? void 0 : _a.abstract}]${(_b = props.Response.Response.error) === null || _b === void 0 ? void 0 : _b.title}` }));
        if (Array.isArray((_c = props.Response.Response.error) === null || _c === void 0 ? void 0 : _c.messages)) {
            AlertProp["children"] = (jsx("ul", { children: (_d = props.Response.Response.error) === null || _d === void 0 ? void 0 : _d.messages.map((message) => (jsx("li", { children: message }, message))) }));
        }
    }
    return jsx(Alert, Object.assign({}, AlertProp, { ref: ref }));
});

var ElementWrapper = React.forwardRef((props, ref) => {
    const _a = props.parent || {}, { className = "" } = _a, ParentProps = __rest(_a, ["className"]);
    return (jsxs("div", Object.assign({}, ParentProps, { className: `mt-3 ${className}`, ref: ref }, { children: [jsxs(Form$1.Label, { children: [props.label, props.required && jsx("span", Object.assign({ className: "text-danger" }, { children: "\uFF0A" })), jsx(Form$1.Text, Object.assign({ className: "d-block ps-1" }, { children: props.description }))] }), props.children] })));
});

var ControlWrapper = React.forwardRef((props, ref) => {
    const { label, description, parent } = props, ControlProps = __rest(props, ["label", "description", "parent"]);
    if (!ControlProps.placeholder)
        ControlProps.placeholder = label;
    return (jsx(ElementWrapper, Object.assign({ label: label, description: description, parent: parent, required: props.required }, { children: jsx(Control, Object.assign({}, ControlProps, { ref: ref })) })));
});

var Select = React.forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, props), { onChange: onChange }), { validMessage, invalidMessage, children, options } = _a, SelectProp = __rest(_a, ["validMessage", "invalidMessage", "children", "options"]);
    const FeedbackValue = useFeedback({
        name: SelectProp.name,
        invalidMessages: false,
    });
    function onChange(e) {
        if (props.onChange)
            props.onChange(e);
    }
    return (jsxs(FeedbackContext.Provider, Object.assign({ value: FeedbackValue }, { children: [jsxs(FormSelect, Object.assign({}, SelectProp, { ref: ref, className: `
            ${SelectProp.className || ""}${FeedbackValue.invalidMessages !== false ? " border-danger" : ""}
          ` }, { children: [jsx("option", { label: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044", className: SelectProp.required ? "d-none" : "" }), options === null || options === void 0 ? void 0 : options.map((option) => jsx("option", Object.assign({}, option), option.value)), children] })), jsx(Feedback, { name: SelectProp.name, validMessage: validMessage, invalidMessage: invalidMessage })] })));
});

var SelectWrapper = React.forwardRef((props, ref) => {
    const { label, description, parent } = props, SelectProps = __rest(props, ["label", "description", "parent"]);
    return (jsx(ElementWrapper, Object.assign({ label: label, description: description, parent: parent, required: props.required }, { children: jsx(Select, Object.assign({}, SelectProps, { ref: ref })) })));
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
    Feedback: Feedback,
    FeedbackContext: FeedbackContext,
    useFeedback: useFeedback,
};

const localSlice = createSlice({
    name: "local",
    initialState: getStorage("local"),
    reducers: {
        addLocal(state, action) {
            state[action.payload.key] = action.payload.value;
        },
        removeLocal(state, action) {
            delete state[action.payload.key];
        },
    },
});
const { addLocal, removeLocal } = localSlice.actions;
var reducer = localSlice.reducer;

const store = configureStore({
    reducer: {
        local: reducer,
    },
});

function Redux(props) {
    return (jsx(Provider, Object.assign({ store: store }, { children: jsx(ReduxChildren, Object.assign({}, props)) })));
}
function ReduxChildren(props) {
    const local = useSelector((state) => state.local);
    React.useEffect(() => {
        saveStorage("local", local);
    }, [local]);
    return jsx(Fragment, { children: props.children });
}

const Wrapper = {
    Redux: {
        Redux: Redux,
        store: store,
        reducer: reducer,
        addLocal: addLocal,
        removeLocal: removeLocal,
    },
};

const Component = Object.assign(Object.assign(Object.assign({}, Forms), Components), Wrapper);

const returnLibrary = Object.assign(Object.assign({}, Component), Functions);

export { returnLibrary as default };
