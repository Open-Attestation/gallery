import { Document, Tag } from "../documents/types";
import { uriToAction } from "../documents/utils";

export const documentsOpenCerts: Document[] = [
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
    title: "Geekout Cert",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/geekout-cert.json",
          permittedActions: ["VIEW"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "did"
      }
    ],
    imageSrc: "/static/img/preview/geekout-cert.png",
    tags: [Tag.OPEN_CERTS],
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
  }
];
