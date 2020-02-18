import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Document, Tag } from "./documents";
import { DisplayDocuments } from "../displayDocuments/displayDocuments";

const sampleDocuments: Document[] = [
  {
    title: "test1",
    url: "test1",
    imageName: "",
    tags: [Tag.TRADETRUST]
  }
];

describe("displayDocuments", () => {
  it("should hide QrCodeButton, when QrCodeButton button is pressed", () => {
    expect.assertions(1);
    const { queryByTestId, getByTestId } = render(<DisplayDocuments documents={sampleDocuments} />);
    const QrCodeButton = getByTestId("qr-button");
    fireEvent.click(QrCodeButton);
    expect(queryByTestId("qr-button")).toBeNull();
  });
});
