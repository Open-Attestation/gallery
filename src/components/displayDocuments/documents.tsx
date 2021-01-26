export interface Document {
  title: string;
  uri: string;
  imageSrc: string;
  tags: Tag[];
}

interface Action {
  uri: string;
  key?: string;
  permittedActions: string[];
  redirect: string;
}

const uriToAction = ({ uri, key, permittedActions, redirect }: Action): string => {
  return (
    "https://action.openattestation.com?q=" +
    window.encodeURIComponent(
      JSON.stringify({
        type: "DOCUMENT",
        payload: {
          uri,
          key,
          permittedActions,
          redirect
        }
      })
    )
  );
};

export enum Tag {
  TRADETRUST = "TradeTrust",
  OPENCERTS = "OpenCerts",
  HEALTHCERTS = "HealthCerts",
  LICENCE = "Licence",
  STORABLE = "Storable"
}
export type TagType = keyof typeof Tag;

export const documents: Document[] = [
  {
    title: "OpenCerts Demo",
    uri: uriToAction({
      uri: window.location.href + "static/documents/ropsten-encrypted.opencert",
      key: "5b433c297f3b35690461b9ee08d77f3e8ee47ec86e5b8b1322b056da6f0b86c4",
      permittedActions: ["STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/opencerts-demo.jpg",
    tags: [Tag.OPENCERTS, Tag.STORABLE]
  },
  {
    title: "GovTech Internship Certificate",
    uri: uriToAction({
      uri: window.location.href + "static/documents/govtech-intern-cert-sample.opencert",
      permittedActions: ["STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/govtech-intern-cert-sample.png",
    tags: [Tag.OPENCERTS, Tag.STORABLE]
  },
  {
    title: "TradeTrust eBL",
    uri: uriToAction({
      uri: window.location.href + "static/documents/ebl.tt",
      permittedActions: ["VIEW", "STORE"],
      redirect: "https://dev.tradetrust.io"
    }),
    imageSrc: "/static/img/preview/tradetrust-ebl.png",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "CAAS UAPL",
    uri: uriToAction({
      uri: window.location.href + "static/documents/caas.json",
      permittedActions: ["VIEW", "STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/cass-uapl.png",
    tags: [Tag.LICENCE, Tag.STORABLE]
  },
  {
    title: "TradeTrust Invoice",
    uri: uriToAction({
      uri: window.location.href + "static/documents/invoice-ropsten.json",
      permittedActions: ["VIEW"],
      redirect: "https://dev.tradetrust.io"
    }),
    imageSrc: "/static/img/preview/invoice.png",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "HealthCert Memo",
    uri: uriToAction({
      uri: "https://notarise.gov.sg/static/documents/healthcerts-memo-notarised.json",
      permittedActions: ["VIEW"],
      redirect: "https://verify.gov.sg/"
    }),
    imageSrc: "/static/img/preview/healthcerts-memo-notarised.png",
    tags: [Tag.HEALTHCERTS]
  },
  {
    title: "Geekout Cert",
    uri: uriToAction({
      uri: window.location.href + "static/documents/geekout-cert.json",
      permittedActions: ["VIEW"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/geekout-cert.png",
    tags: [Tag.OPENCERTS]
  },
  {
    title: "Chafta Certificate of Origin",
    uri: uriToAction({
      uri: window.location.href + "static/documents/chafta-coo-ropsten.json",
      permittedActions: ["VIEW"],
      redirect: "https://dev.tradetrust.io"
    }),
    imageSrc: "/static/img/preview/chafta-coo.jpg",
    tags: [Tag.TRADETRUST]
  }
];
