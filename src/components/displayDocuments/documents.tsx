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

const stringifyAndEncode = (obj: object): string => window.encodeURIComponent(JSON.stringify(obj));

const uriToAction = ({ uri, key, permittedActions, redirect }: Action): string => {
  const action = stringifyAndEncode({
    type: "DOCUMENT",
    payload: {
      uri,
      permittedActions,
      redirect
    }
  });
  const anchor = key ? `#${stringifyAndEncode({ key })}` : ``;
  return `https://action.openattestation.com?q=${action}${anchor}`;
};

export enum Tag {
  TRADE_TRUST = "TradeTrust",
  OPEN_CERTS = "OpenCerts",
  HEALTH_CERTS = "HealthCerts",
  LICENCE = "Licence",
  STORABLE = "Storable"
}
export type TagType = keyof typeof Tag;

export const documents: Document[] = [
  {
    title: "OpenCerts Demo",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/ropsten-encrypted.opencert",
      key: "5b433c297f3b35690461b9ee08d77f3e8ee47ec86e5b8b1322b056da6f0b86c4",
      permittedActions: ["STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/opencerts-demo.jpg",
    tags: [Tag.OPEN_CERTS, Tag.STORABLE]
  },
  {
    title: "GovTech Internship Certificate",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/govtech-intern-cert-sample.opencert",
      permittedActions: ["STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/govtech-intern-cert-sample.png",
    tags: [Tag.OPEN_CERTS, Tag.STORABLE]
  },
  {
    title: "TradeTrust eBL",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/ebl.tt",
      permittedActions: ["VIEW", "STORE"],
      redirect: "https://dev.tradetrust.io"
    }),
    imageSrc: "/static/img/preview/tradetrust-ebl.png",
    tags: [Tag.TRADE_TRUST]
  },
  {
    title: "CAAS UAPL",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/caas.json",
      permittedActions: ["VIEW", "STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/cass-uapl.png",
    tags: [Tag.LICENCE, Tag.STORABLE]
  },
  {
    title: "TradeTrust Invoice",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/invoice-ropsten.json",
      permittedActions: ["VIEW"],
      redirect: "https://dev.tradetrust.io"
    }),
    imageSrc: "/static/img/preview/invoice.png",
    tags: [Tag.TRADE_TRUST]
  },
  {
    title: "PDT (ART) HealthCert",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/pdt-art-healthcert.json",
      permittedActions: ["VIEW"],
      redirect: "https://www.verify.gov.sg/verify"
    }),
    imageSrc: "/static/img/preview/pdt-art-healthcert.png",
    tags: [Tag.HEALTH_CERTS]
  },
  {
    title: "PDT (PCR) HealthCert",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/pdt-pcr-healthcert.json",
      permittedActions: ["VIEW"],
      redirect: "https://www.verify.gov.sg/verify"
    }),
    imageSrc: "/static/img/preview/pdt-pcr-healthcert.png",
    tags: [Tag.HEALTH_CERTS]
  },
  {
    title: "Vaccination HealthCert",
    uri: uriToAction({
      uri:
        "https://schemata.openattestation.com/sg/gov/moh/vaccination-healthcert/1.0/interim-vaccination-healthcert-wrapped.json",
      permittedActions: ["VIEW"],
      redirect: "https://www.verify.gov.sg/verify"
    }),
    imageSrc: "/static/img/preview/vaccination-healthcert.png",
    tags: [Tag.HEALTH_CERTS]
  },
  {
    title: "Geekout Cert",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/geekout-cert.json",
      permittedActions: ["VIEW"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/geekout-cert.png",
    tags: [Tag.OPEN_CERTS]
  },
  {
    title: "Chafta Certificate of Origin",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/chafta-coo-ropsten.json",
      permittedActions: ["VIEW"],
      redirect: "https://dev.tradetrust.io"
    }),
    imageSrc: "/static/img/preview/chafta-coo.jpg",
    tags: [Tag.TRADE_TRUST]
  },
  {
    title: "OpenCerts Testimonial",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/testimonial.opencert",
      permittedActions: ["VIEW"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/testimonial.png",
    tags: [Tag.OPEN_CERTS]
  },
  {
    title: "OpenCerts Testimonial",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/testimonial2.opencert",
      permittedActions: ["VIEW"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/testimonial2.png",
    tags: [Tag.OPEN_CERTS]
  },
  {
    title: "OpenCerts Certificate of Award",
    uri: uriToAction({
      uri: window.location.origin + "/static/documents/certificate-of-award.opencert",
      permittedActions: ["VIEW"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/preview/certificate-of-award.png",
    tags: [Tag.OPEN_CERTS]
  }
];
