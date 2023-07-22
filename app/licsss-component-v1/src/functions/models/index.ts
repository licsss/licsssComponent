import send, { MethodType, ResponseIndexType, ResponseType } from "../fetch";
import { createQueries } from "../route";

export interface ParametersInterface {
  [s: string]: string | number | undefined;
}
export interface IndexParametersInterface extends ParametersInterface {
  per?: number;
  page?: number;
  order?: "asc" | "desc";
}
export interface RouteSendInterface {
  [s: "index" | "store" | "show" | "update" | "destroy" | string]: {
    routeName: string;
    method: MethodType;
  };
}
export class Model<
  Response = ResponseType,
  IndexParameters = IndexParametersInterface,
  ShowParameters = ParametersInterface,
  StoreParameters = ParametersInterface,
  UpdateParameters = ParametersInterface,
  DestroyParameters = ParametersInterface,
> {
  protected baseUri = "";
  protected routeSend: RouteSendInterface = {
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

  getRoute(
    endpoint: string,
    parameters:
      | undefined
      | object
      | IndexParameters
      | ShowParameters
      | StoreParameters
      | UpdateParameters
      | DestroyParameters = {}
  ): string {
    return getEndpoint(this.convertURI(endpoint), parameters || {});
  }

  convertURI(endpoint: string): string {
    return `${this.baseUri}/${endpoint.replace(/\/*/, "")}`.replace(/\/$/, "");
  }

  async send<R = Response>({
    endpoint,
    parameters = {},
    body = {},
    method = "GET",
  }: {
    endpoint: string;
    parameters?:
      | object
      | IndexParameters
      | ShowParameters
      | StoreParameters
      | UpdateParameters
      | DestroyParameters;
    body?: object;
    method?: MethodType;
  }): Promise<R | string> {
    return await send({
      endpoint: this.getRoute(endpoint, parameters),
      body: JSON.stringify(body),
      method: method,
    });
  }

  index<R = Response>(parameters: IndexParameters): Promise<R | string> {
    return this.send<R>({
      endpoint: this.routeSend["index"].routeName,
      parameters: parameters,
      method: this.routeSend["index"].method,
    });
  }
  show<R = Response>(parameters: ShowParameters): Promise<R | string> {
    return this.send<R>({
      endpoint: this.routeSend["show"].routeName,
      parameters: parameters,
      method: this.routeSend["show"].method,
    });
  }
  store<R = Response>(parameters: StoreParameters): Promise<R | string> {
    return this.send<R>({
      endpoint: this.routeSend["store"].routeName,
      parameters: parameters,
      method: this.routeSend["store"].method,
    });
  }
  update<R = Response>(parameters: UpdateParameters): Promise<R | string> {
    return this.send<R>({
      endpoint: this.routeSend["update"].routeName,
      parameters: parameters,
      method: this.routeSend["update"].method,
    });
  }
  destroy<R = Response>(parameters: DestroyParameters): Promise<R | string> {
    return this.send<R>({
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
export function getEndpoint(base_uri: string, parameters: {} = {}): string {
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
export function changeParameters(
  uri: string,
  parameters: { [s: string]: string } = {}
): string {
  let new_uri = uri;
  Object.keys(parameters).forEach((key) => {
    if (new_uri.search(RegExp(`:${key}/|:${key}$`, "ig")) > -1) {
      new_uri =
        "/" +
        new_uri
          .replace(
            RegExp(`:${key}/|:${key}$`, "ig"),
            `${parameters[key] || ""}/`
          )
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
function removeParameters(uri: string): string {
  return uri.replace(/:[a-z]*\/|:[a-z]$/gi, "");
}

export type IndexQuery = {
  page?: number;
  per?: number;
  order?: "desc" | "asc";
};
export async function getIndex<T = ResponseType<ResponseIndexType>>(
  base_uri: string,
  parameters: IndexQuery = {}
): Promise<T | string> {
  return await send<T>({
    endpoint: getEndpoint(base_uri, parameters),
    method: "GET",
  });
}
export async function getShow<T = ResponseType>(
  base_uri: string,
  parameters: {} = {}
): Promise<T | string> {
  return await send<T>({
    endpoint: getEndpoint(base_uri, parameters),
    method: "GET",
  });
}
export async function postStore<T = ResponseType>(
  base_uri: string,
  body: {} = {},
  parameters: {} = {}
): Promise<T | string> {
  return send<T>({
    endpoint: getEndpoint(base_uri, parameters),
    body: JSON.stringify(body),
    method: "POST",
  });
}
export async function putUpdate<T = ResponseType>(
  base_uri: string,
  body: {} = {},
  parameters: {} = {}
): Promise<T | string> {
  return await send({
    endpoint: getEndpoint(base_uri, parameters),
    body: JSON.stringify(body),
    method: "PUT",
  });
}
export async function deleteDestroy<T = ResponseType>(
  base_uri: string,
  parameters: {} = {}
): Promise<T | string> {
  return await send({
    endpoint: getEndpoint(base_uri, parameters),
    method: "DELETE",
  });
}
