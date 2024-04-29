export enum Tag {
  TRADE_TRUST = "TradeTrust",
  OPEN_CERTS = "OpenCerts",
  HEALTH_CERTS = "HealthCerts",
  NYC_CERTS = "NycCerts",
  LICENCE = "Licence"
}

export interface Document {
  title: string;
  documents: { uri: string; kind: "verifiable" | "transferable" | "did"; downloadUrl?: string }[];
  imageSrc: string;
  tags: Tag[];
  version: "2" | "3";
}

export enum ChainId {
  Local = 1337,
  Ethereum = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Polygon = 137,
  PolygonMumbai = 80001,
  Sepolia = 11155111
}

export interface Action {
  uri: string;
  key?: string;
  permittedActions: string[];
  redirect: string;
  chainId?: ChainId;
}
