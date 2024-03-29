import { Document, Tag, ChainId } from "../documents/types";
import { uriToAction } from "../documents/utils";

export const documentsTradeTrust: Document[] = [
  {
    title: "TradeTrust Bill of Lading",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v2/ebl-mumbai.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.PolygonMumbai
        }),
        kind: "transferable"
      }
    ],
    imageSrc: "/static/img/preview/tradetrust-ebl.png",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
  {
    title: "TradeTrust Invoice",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v2/invoice-mumbai.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.PolygonMumbai
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/invoice.png",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
  {
    title: "TradeTrust Invoice (Redacted)",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v2/invoice-redacted-mumbai.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.PolygonMumbai
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/invoice-redacted.png",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
  {
    title: "ChAFTA Certificate of Origin",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v2/chafta-coo-mumbai.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.PolygonMumbai
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/chafta-coo.jpg",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
  {
    title: "TradeTrust Bill of Lading",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v3/ebl-mumbai.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.PolygonMumbai
        }),
        kind: "transferable"
      }
    ],
    imageSrc: "/static/img/preview/tradetrust-ebl.png",
    tags: [Tag.TRADE_TRUST],
    version: "3"
  },
  {
    title: "TradeTrust Invoice",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v3/invoice-mumbai.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.PolygonMumbai
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/invoice.png",
    tags: [Tag.TRADE_TRUST],
    version: "3"
  }
];
