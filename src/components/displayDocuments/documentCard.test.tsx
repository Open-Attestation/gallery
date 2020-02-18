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
    const { getByTestId } = render(<DisplayDocuments documents={sampleDocuments} />);
    const QrCodeButton = getByTestId("qr-button");
    fireEvent.click(QrCodeButton);
    expect(getByTestId("qr-button")).toThrow(`Unable to find an element by: [data-testid="qr-button"]`);
  });
});
