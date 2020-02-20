export interface Document {
  title: string;
  uri: string;
  imageSrc: string;
  tags: Tag[];
}

interface Action {
  uri: string;
  key: string;
  permittedActions: string;
  redirect: string;
}

const uriToAction = ({ uri, key, permittedActions, redirect }: Action): string => {
  return (
    "https://action.openattestation.com/?q=" +
    window.encodeURI(
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
  LICENCE = "Licence",
  STORABLE = "Storable"
}
export type TagType = keyof typeof Tag;

export const documents: Document[] = [
  {
    title: "OpenCerts Demo",
    uri: uriToAction({
      uri: "https://api.myjson.com/bins/1a9acm",
      key: "1b8c334a38f9ff96108303a4ba0cc592f1559eb24f5b48b70c9300c60a34d5e9",
      permittedActions: `["STORE"]`,
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/opencerts-demo.jpg",
    tags: [Tag.OPENCERTS]
  },
  {
    title: "Degree Certificate with Transcript",
    uri: "",
    imageSrc: "/static/img/opencerts-demo.jpg",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "Certificate of Non-manipulation",
    uri: "",
    imageSrc: "/static/img/opencerts-demo.jpg",
    tags: [Tag.TRADETRUST, Tag.STORABLE]
  },
  {
    title: "Ngee Ann Polytechnic",
    uri: "",
    imageSrc: "/static/img/opencerts-demo.jpg",
    tags: [Tag.TRADETRUST, Tag.STORABLE]
  },
  {
    title: "MPA Certificate of Competency",
    uri: "",
    imageSrc: "/static/img/opencerts-demo.jpg",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "ACRA BizFile+",
    uri: "",
    imageSrc: "/static/img/opencerts-demo.jpg",
    tags: [Tag.TRADETRUST]
  }
];
