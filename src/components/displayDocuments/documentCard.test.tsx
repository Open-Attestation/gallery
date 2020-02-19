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
  it("should show Document, before QrCodeButton button is pressed", () => {
    expect.assertions(1);
    const { queryByTestId } = render(<DisplayDocuments documents={sampleDocuments} />);
    expect(queryByTestId("document-container")).not.toBeNull();
  });

  it("should hide QrCodeButton and document, and show QrCode, when QrCodeButton button is pressed", () => {
    expect.assertions(3);
    const { queryByTestId, getByTestId } = render(<DisplayDocuments documents={sampleDocuments} />);
    const QrCodeButton = getByTestId("qr-button");
    fireEvent.click(QrCodeButton);
    expect(queryByTestId("qr-button")).toBeNull();
    expect(queryByTestId("document-container")).toBeNull();
    expect(queryByTestId("qr-code")).not.toBeNull();
  });

  it("should display ShowDocumentButton, when hovering over HoverContainer", () => {
    expect.assertions(1);
    const { queryByTestId, getByTestId } = render(<DisplayDocuments documents={sampleDocuments} />);
    const QrCodeButton = getByTestId("qr-button");
    fireEvent.click(QrCodeButton);
    const HoverContainer = getByTestId("hover-container");
    fireEvent.mouseOver(HoverContainer);
    expect(queryByTestId("show-document-button")).not.toBeNull();
  });
});
