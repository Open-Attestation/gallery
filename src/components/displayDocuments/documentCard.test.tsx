import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Document, Tag } from "../documents/types";
import { DisplayDocuments } from "../displayDocuments/displayDocuments";

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
  it("should show Document, before QrCodeButton button is pressed", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    expect(screen.queryByTestId("document-container")).not.toBeNull();
  });

  it("should hide QrCodeButton and document, and show QrCode, when QrCodeButton button is pressed", () => {
    expect.assertions(3);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    fireEvent.click(screen.getByTestId("qr-button"));
    expect(screen.queryByTestId("qr-button")).toBeNull();
    expect(screen.queryByTestId("document-container")).toBeNull();
    expect(screen.queryByTestId("qr-code")).not.toBeNull();
  });

  it("should display ShowDocumentButton, when hovering over HoverContainer", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    fireEvent.click(screen.getByTestId("qr-button"));
    fireEvent.mouseOver(screen.getByTestId("hover-container"));
    expect(screen.queryByTestId("show-document-button")).not.toBeNull();
  });

  it("should call window.open() when download button is pressed", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDownloadableDocuments} />
        </Route>
      </Router>
    );

    const mockedOpen = jest.fn();
    jest.spyOn(window, "open").mockImplementation(mockedOpen);

    fireEvent.click(screen.getByTestId("download-document-button"));
    expect(mockedOpen).toHaveBeenCalledWith("http://example.com", "_blank");
  });
});
