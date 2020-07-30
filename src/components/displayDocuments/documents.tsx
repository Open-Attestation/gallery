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
      uri: "https://raw.githubusercontent.com/gjj/opencerts-certificates/master/ropsten-encrypted.opencert",
      key: "5b433c297f3b35690461b9ee08d77f3e8ee47ec86e5b8b1322b056da6f0b86c4",
      permittedActions: ["STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/opencerts-demo.jpg",
    tags: [Tag.OPENCERTS, Tag.STORABLE]
  },
  {
    title: "TradeTrust eBL",
    uri: uriToAction({
      uri:
        "https://gist.githubusercontent.com/simboonlong/64242ae4e0472bc91f98dfefb4a83f22/raw/2dbe17a28f9b26072e560babd6f40bde6ff7de69/ebl.tt",
      permittedActions: ["VIEW", "STORE"],
      redirect: "https://dev.tradetrust.io"
    }),
    imageSrc: "/static/img/tradetrust-ebl.png",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "CAAS UAPL",
    uri: uriToAction({
      uri:
        "https://gist.githubusercontent.com/benjaminlim00/cb4022177ad28418379285499c8d2203/raw/94bb01480df3b502434c7453ebef278ed7187c85/caas.json",
      permittedActions: ["VIEW", "STORE"],
      redirect: "https://dev.opencerts.io"
    }),
    imageSrc: "/static/img/cass-uapl.png",
    tags: [Tag.LICENCE, Tag.STORABLE]
  }
];
