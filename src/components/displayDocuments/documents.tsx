export interface Document {
  title: string;
  url: string;
  imageName: string;
  tags: Tag[];
}

const urlToAction = (url: string, key: string, permittedActions: string, redirect: string): string => {
  return `https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%7B%22uri%22:%22${url}%22,%22key%22:%22${key}%22,%22permittedActions%22:${permittedActions},%22redirect%22:%22${redirect}%22%7D%7D`;
};

export enum Tag {
  TRADETRUST = "TradeTrust",
  OPENCERTS = "OpenCerts",
  LICENCE = "Licence"
}

export const documents: Document[] = [
  {
    title: "OpenCerts Demo",
    url: urlToAction(
      "https://api.myjson.com/bins/1a9acm",
      "1b8c334a38f9ff96108303a4ba0cc592f1559eb24f5b48b70c9300c60a34d5e9",
      `["STORE"]`,
      "https://dev.opencerts.io"
    ),
    imageName: "opencerts-demo",
    tags: [Tag.OPENCERTS]
  },
  {
    title: "Degree Certificate with Transcript",
    url: "",
    imageName: "opencerts-demo",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "Certificate of Non-manipulation",
    url: "",
    imageName: "opencerts-demo",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "Ngee Ann Polytechnic",
    url: "",
    imageName: "opencerts-demo",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "MPA Certificate of Competency",
    url: "",
    imageName: "opencerts-demo",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "ACRA BizFile+",
    url: "",
    imageName: "opencerts-demo",
    tags: [Tag.TRADETRUST]
  }
];
