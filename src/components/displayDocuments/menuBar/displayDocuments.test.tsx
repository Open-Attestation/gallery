import { Document, Tag } from "../documents";

const sampleDocuments: Document[] = [
  {
    title: "test1",
    url: "test1",
    imageName: "",
    tags: [Tag.OPENCERTS]
  },
  {
    title: "test2",
    url: "test2",
    imageName: "",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "test3",
    url: "test3",
    imageName: "",
    tags: [Tag.TRADETRUST]
  },
  {
    title: "test4",
    url: "test4",
    imageName: "",
    tags: [Tag.LICENCE]
  },
  {
    title: "MPA Certificate of Competency",
    url: "test5",
    imageName: "test5",
    tags: [Tag.LICENCE]
  },
  {
    title: "test6",
    url: "test6",
    imageName: "",
    tags: [Tag.LICENCE]
  }
];

const mockDisplayCards = (documents: Document[], selectedButton: Tag | undefined): Document[] => {
  let filteredDocuments;
  if (selectedButton) {
    filteredDocuments = documents.filter(document => document.tags.includes(selectedButton));
  } else {
    filteredDocuments = documents;
  }

  return filteredDocuments;
};

describe("displayDocuments", () => {
  it("should show all documents when there is no filter", () => {
    expect.assertions(1);
    const filteredDocuments = mockDisplayCards(sampleDocuments, undefined);
    expect(filteredDocuments).toHaveLength(sampleDocuments.length);
  });
});
