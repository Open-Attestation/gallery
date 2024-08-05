import { Document, Tag } from "../documents/types";
import { uriToAction } from "../documents/utils";

export const documentsOpenCerts: Document[] = [
  {
    title: "v4 OpenCerts Demo",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/embedded-renderer-v4",
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
    title: "v4 SVG Demo",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/remote-svg-v4", // Can also replace with embedded-svg-v4
          permittedActions: ["STORE"],
          redirect: "https://dev.opencerts.io"
        }),
        kind: "did"
      }
    ],
    imageSrc: "/static/img/preview/svg-demo.svg",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "OpenCerts Demo",
    documents: [
      {
        uri: uriToAction({
          uri: window.location.origin + "/static/documents/transcript-encrypted.opencert",
          key: "691add1930798b63b17c8683a4776bedc16771ea5664337e21a563be0529024f",
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
