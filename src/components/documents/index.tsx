import { Document, Tag } from "./types";
import { uriToAction } from "./utils";
import { documentsTradeTrust } from "./documentsTradeTrust";
import { documentsOpenCerts } from "./documentsOpenCerts";
import { documentsHealthCerts } from "./documentsHealthCerts";

export const documentsAll: Document[] = [
  ...documentsTradeTrust,
  ...documentsOpenCerts,
  ...documentsHealthCerts,
  {
    title: "CAAS UAPL",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/caas.json",
          permittedActions: ["VIEW", "STORE"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/cass-uapl.png",
    tags: [Tag.LICENCE],
    version: "2"
  } // leaving CAAS license here since it does not belong to any product
];
