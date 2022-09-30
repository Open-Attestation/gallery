import { Document, Tag } from "../documents/types";
import { uriToAction } from "../documents/utils";

export const documentsHealthCerts: Document[] = [
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
  }
];
