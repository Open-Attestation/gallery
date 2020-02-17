import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { Document, Tag } from "./documents";
import { documents } from "./documents";
import { App } from "../../app";

// const sampleDocuments: Document[] = [
//   {
//     title: "test1",
//     url: "test1",
//     imageName: "",
//     tags: [Tag.OPENCERTS]
//   },
//   {
//     title: "test2",
//     url: "test2",
//     imageName: "",
//     tags: [Tag.TRADETRUST]
//   },
//   {
//     title: "test3",
//     url: "test3",
//     imageName: "",
//     tags: [Tag.TRADETRUST]
//   },
//   {
//     title: "test4",
//     url: "test4",
//     imageName: "",
//     tags: [Tag.LICENCE]
//   },
//   {
//     title: "MPA Certificate of Competency",
//     url: "test5",
//     imageName: "test5",
//     tags: [Tag.LICENCE]
//   },
//   {
//     title: "test6",
//     url: "test6",
//     imageName: "",
//     tags: [Tag.LICENCE]
//   }
// ];

describe("displayDocuments", () => {
  it("should show all documents, when 'All' button is pressed", () => {
    const { getByText, getByTestId } = render(<App />);
    const allButton = getByText("All");
    fireEvent.click(allButton);

    const displayCard = getByTestId("display-card");
    expect(displayCard).toBe(6);
  });
});
