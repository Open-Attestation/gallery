import { Action } from "./types";

const stringifyAndEncode = (obj: object): string => window.encodeURIComponent(JSON.stringify(obj));

export const uriToAction = ({ uri, key, permittedActions, redirect, chainId }: Action): string => {
  const url = new URL(redirect);
  const action = {
    type: "DOCUMENT",
    payload: {
      uri,
      permittedActions,
      redirect,
      chainId
    }
  };

  url.searchParams.append("q", JSON.stringify(action));

  if (key) {
    url.hash = `#${stringifyAndEncode({ key })}`;
  }

  return url.toString();
};
