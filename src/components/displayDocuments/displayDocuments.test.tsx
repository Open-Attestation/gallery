import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Document, Tag } from "./documents";
import { DisplayDocuments } from "../displayDocuments/displayDocuments";

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

describe("displayDocuments", () => {
  it("should show all documents, when 'All' button is pressed", () => {
    expect.assertions(1);
    const { getByText, getAllByTestId } = render(<DisplayDocuments documents={sampleDocuments} />);
    const allButton = getByText("All");
    fireEvent.click(allButton);
    const displayCard = getAllByTestId("display-card");
    expect(displayCard).toHaveLength(sampleDocuments.length);
  });
});
