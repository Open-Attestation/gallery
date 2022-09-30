import { Action } from "./types";

const stringifyAndEncode = (obj: object): string => window.encodeURIComponent(JSON.stringify(obj));

export const uriToAction = ({ uri, key, permittedActions, redirect, chainId }: Action): string => {
  const action = stringifyAndEncode({
    type: "DOCUMENT",
    payload: {
      uri,
      permittedActions,
      redirect,
      chainId
    }
  });
  const anchor = key ? `#${stringifyAndEncode({ key })}` : ``;
  return `https://action.openattestation.com?q=${action}${anchor}`;
};
