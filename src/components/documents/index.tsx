import { Document, Tag } from "./types";
import { uriToAction } from "./utils";
import { documentsTradeTrust } from "./documentsTradeTrust";
import { documentsOpenCerts } from "./documentsOpenCerts";
import { documentsHealthCerts } from "./documentsHealthCerts";
import { documentsNyc } from "./documentsNycCerts";

export const documentsAll: Document[] = [
  ...documentsTradeTrust,
  ...documentsOpenCerts,
  ...documentsHealthCerts,
  ...documentsNyc,
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
