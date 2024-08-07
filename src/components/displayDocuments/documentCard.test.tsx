import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Document, Tag } from "../documents/types";
import { DisplayDocuments } from "../displayDocuments/displayDocuments";
import { describe, it, expect, afterEach, vi } from "vitest"

const sampleDocuments: Document[] = [
  {
    title: "test1",
    documents: [{ uri: "test1", kind: "did" }],
    imageSrc: "",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  }
];

const sampleDownloadableDocuments: Document[] = [
  {
    title: "test2",
    documents: [{ uri: "test2", kind: "did", downloadUrl: "http://example.com" }],
    imageSrc: "",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  }
];

describe("displayDocuments", () => {
  afterEach(() => {
    cleanup()
  })
  
  it("should show Document, before QrCodeButton button is pressed", () => {
    expect.assertions(1);
    render(
      <Router>
          <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.queryByTestId("document-container")).not.toBeNull();
  });

  it("should hide QrCodeButton and document, and show QrCode, when QrCodeButton button is pressed", () => {
    expect.assertions(3);
    render(
      <Router>
          <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    fireEvent.click(screen.getByTestId("qr-button"));
    expect(screen.queryByTestId("qr-button")).toBeNull();
    expect(screen.queryByTestId("document-container")).toBeNull();
    expect(screen.queryByTestId("qr-code")).not.toBeNull();
  });

  it("should display ShowDocumentButton, when hovering over HoverContainer", () => {
    expect.assertions(1);
    render(
      <Router>
          <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    fireEvent.click(screen.getByTestId("qr-button"));
    fireEvent.mouseOver(screen.getByTestId("hover-container"));
    expect(screen.queryByTestId("show-document-button")).not.toBeNull();
  });

  it("should call window.open() when download button is pressed", () => {
    expect.assertions(1);
    render(
      <Router>
          <DisplayDocuments documents={sampleDownloadableDocuments} />
      </Router>
    );

    const mockedOpen = vi.fn();
    vi.spyOn(window, "open").mockImplementation(mockedOpen);

    fireEvent.click(screen.getByTestId("download-document-button"));
    expect(mockedOpen).toHaveBeenCalledWith("http://example.com", "_blank");
  });
});
