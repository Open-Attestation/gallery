export interface Document {
  title: string;
  documents: { uri: string; kind: "verifiable" | "transferable" | "did"; downloadUrl?: string }[];
  imageSrc: string;
  tags: Tag[];
  version: "2" | "3";
}

enum ChainId {
  Local = 1337,
  Ethereum = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Polygon = 137,
  PolygonMumbai = 80001,
  Sepolia = 11155111
}

interface Action {
  uri: string;
  key?: string;
  permittedActions: string[];
  redirect: string;
  chainId?: ChainId;
}

const stringifyAndEncode = (obj: object): string => window.encodeURIComponent(JSON.stringify(obj));

const uriToAction = ({ uri, key, permittedActions, redirect, chainId }: Action): string => {
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

export enum Tag {
  TRADE_TRUST = "TradeTrust",
  OPEN_CERTS = "OpenCerts",
  HEALTH_CERTS = "HealthCerts",
  LICENCE = "Licence"
}
export type TagType = keyof typeof Tag;

export const documents: Document[] = [
  {
    title: "OpenCerts Demo",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/transcript-encrypted.opencert",
          key: "5b433c297f3b35690461b9ee08d77f3e8ee47ec86e5b8b1322b056da6f0b86c4",
          permittedActions: ["STORE"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "verifiable"
      },
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/transcript-did.opencert",
          permittedActions: ["STORE"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "did"
      }
    ],
    imageSrc: "/static/img/preview/opencerts-demo.jpg",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "GovTech Internship Certificate",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/govtech-intern-cert-sample.opencert",
          permittedActions: ["STORE"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/govtech-intern-cert-sample.png",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "TradeTrust Bill of Lading",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v2/ebl-ropsten.tt",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.Ropsten
        }),
        kind: "transferable"
      }
    ],
    imageSrc: "/static/img/preview/tradetrust-ebl.png",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
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
  },
  {
    title: "TradeTrust Invoice",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v2/invoice-ropsten.tt",
          permittedActions: ["VIEW"],
          redirect: "http://localhost:3000",
          chainId: ChainId.Ropsten
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
          uri: window.location.origin + "/static/documents/tradetrust/v2/invoice-redacted-ropsten.tt",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.Ropsten
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/invoice-redacted.png",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
  {
    title: "PDT v2 (ART) HealthCert",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/pdt-v2-art-healthcert.json",
          permittedActions: ["VIEW"],
          redirect: "https://www.verify.gov.sg/verify"
        }),
        kind: "did",
        downloadUrl: window.location.origin + "/static/documents/pdt-v2-art-healthcert.json"
      }
    ],
    imageSrc: "/static/img/preview/pdt-art-healthcert.png",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },
  {
    title: "PDT v2 (LAMP) HealthCert",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/pdt-v2-lamp-healthcert.json",
          permittedActions: ["VIEW"],
          redirect: "https://www.verify.gov.sg/verify"
        }),
        kind: "did",
        downloadUrl: window.location.origin + "/static/documents/pdt-v2-lamp-healthcert.json"
      }
    ],
    imageSrc: "/static/img/preview/pdt-lamp-healthcert.png",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },
  {
    title: "PDT v2 (PCR) HealthCert",
    documents: [
      {
        uri: uriToAction({
          uri: "https://schemata.openattestation.com/sg/gov/moh/pdt-healthcert/2.0/endorsed-wrapped.json",
          permittedActions: ["VIEW"],
          redirect: "https://www.verify.gov.sg/verify"
        }),
        kind: "did",
        downloadUrl: "https://schemata.openattestation.com/sg/gov/moh/pdt-healthcert/2.0/endorsed-wrapped.json"
      }
    ],
    imageSrc: "/static/img/preview/pdt-pcr-healthcert.png",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },
  {
    title: "PDT v2 (PCR + SER) HealthCert",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/pdt-v2-pcr-ser-healthcert.json",
          permittedActions: ["VIEW"],
          redirect: "https://www.verify.gov.sg/verify"
        }),
        kind: "did",
        downloadUrl: window.location.origin + "/static/documents/pdt-v2-pcr-ser-healthcert.json"
      }
    ],
    imageSrc: "/static/img/preview/pdt-pcr-healthcert.png",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },
  {
    title: "Recovery v2 HealthCert",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/rec-v2-pcr-healthcert.json",
          permittedActions: ["VIEW"],
          redirect: "https://www.verify.gov.sg/verify"
        }),
        kind: "did",
        downloadUrl: window.location.origin + "/static/documents/rec-v2-pcr-healthcert.json"
      }
    ],
    imageSrc: "/static/img/preview/recovery-healthcert.png",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },
  {
    title: "Vaccination v1 (2 doses) HealthCert",
    documents: [
      {
        uri: uriToAction({
          uri:
            "https://schemata.openattestation.com/sg/gov/moh/vaccination-healthcert/1.0/interim-vaccination-healthcert-wrapped.json",
          permittedActions: ["VIEW"],
          redirect: "https://www.verify.gov.sg/verify"
        }),
        kind: "did",
        downloadUrl:
          "https://schemata.openattestation.com/sg/gov/moh/vaccination-healthcert/1.0/interim-vaccination-healthcert-wrapped.json"
      }
    ],
    imageSrc: "/static/img/preview/vaccination-healthcert.png",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },
  {
    title: "Vaccination v1 (2 doses + 1 booster) HealthCert",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/vac-v1-2-plus-1-healthcert.json",
          permittedActions: ["VIEW"],
          redirect: "https://www.verify.gov.sg/verify"
        }),
        kind: "did",
        downloadUrl: window.location.origin + "/static/documents/vac-v1-2-plus-1-healthcert.json"
      }
    ],
    imageSrc: "/static/img/preview/vaccination-healthcert.png",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },
  {
    title: "Geekout Cert",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/geekout-cert.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/geekout-cert.png",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "ChAFTA Certificate of Origin",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v2/chafta-coo-ropsten.tt",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.Ropsten
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/chafta-coo.jpg",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
  {
    title: "OpenCerts Testimonial",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/testimonial.opencert",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "verifiable"
      },
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/testimonial-did.opencert",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "did"
      }
    ],
    imageSrc: "/static/img/preview/testimonial.png",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "OpenCerts Testimonial",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/testimonial2.opencert",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "verifiable"
      },
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/testimonial2-did.opencert",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "did"
      }
    ],
    imageSrc: "/static/img/preview/testimonial2.png",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "OpenCerts Certificate of Award",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/certificate-of-award.opencert",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "verifiable"
      },
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/certificate-of-award-did.opencert",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "did"
      }
    ],
    imageSrc: "/static/img/preview/certificate-of-award.png",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "TradeTrust Bill of Lading",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/tradetrust/v3/ebl-ropsten.tt",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.Ropsten
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
          uri: window.location.origin + "/static/documents/tradetrust/v3/invoice-ropsten.tt",
          permittedActions: ["VIEW"],
          redirect: "https://dev.tradetrust.io",
          chainId: ChainId.Ropsten
        }),
        kind: "verifiable"
      }
    ],
    imageSrc: "/static/img/preview/invoice.png",
    tags: [Tag.TRADE_TRUST],
    version: "3"
  }
];
