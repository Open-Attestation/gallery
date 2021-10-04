import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Document, Tag } from "./documents";
import { DisplayDocuments } from "../displayDocuments/displayDocuments";
import userEvent from "@testing-library/user-event";

const sampleDocuments: Document[] = [
  {
    title: "test1",
    documents: [
      { uri: "test1-a", kind: "store" },
      { uri: "test1-b", kind: "did" }
    ],
    imageSrc: "",
    tags: [Tag.TRADE_TRUST]
  },
  {
    title: "test2",
    documents: [{ uri: "test2", kind: "did" }],
    imageSrc: "",
    tags: [Tag.OPEN_CERTS]
  },
  {
    title: "test3",
    documents: [{ uri: "test3", kind: "did" }],
    imageSrc: "",
    tags: [Tag.OPEN_CERTS]
  },
  {
    title: "test4",
    documents: [{ uri: "test4", kind: "did" }],
    imageSrc: "",
    tags: [Tag.LICENCE]
  },
  {
    title: "MPA Certificate of Competency",
    documents: [{ uri: "test5", kind: "did" }],
    imageSrc: "test5",
    tags: [Tag.LICENCE]
  },
  {
    title: "test6",
    documents: [{ uri: "test6", kind: "did" }],
    imageSrc: "",
    tags: [Tag.LICENCE, Tag.STORABLE]
  },
  {
    title: "test7",
    documents: [{ uri: "test7", kind: "did" }],
    imageSrc: "",
    tags: [Tag.HEALTH_CERTS]
  }
];

describe("displayDocuments", () => {
  it("should show all documents, when in home route", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(sampleDocuments.length);
  });

  it("should show only TradeTrust documents, when in 'trade-trust' route", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    history.push("/tag/trade-trust");
    render(
      <Router history={history}>
        <Route path={`/tag/trade-trust`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });

  it("should show OpenCerts documents, when in 'open-certs' route", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    history.push("/tag/open-certs");
    render(
      <Router history={history}>
        <Route path={`/tag/open-certs`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(2);
  });

  it("should show OpenCerts documents, when in 'health-certs' route", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    history.push("/tag/health-certs");
    render(
      <Router history={history}>
        <Route path={`/tag/health-certs`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });

  it("should show Licence documents, when in 'licence' route", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    history.push("/tag/licence");
    render(
      <Router history={history}>
        <Route path={`/tag/licence`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(3);
  });

  it("should show Storable documents, when in 'storable' route", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    history.push("/tag/storable");
    render(
      <Router history={history}>
        <Route path={`/tag/storable`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });

  it("should show OpenCerts Demo, when 'certs' is typed in searchbar", () => {
    expect.assertions(2);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    userEvent.type(screen.getByTestId("search-bar-input"), "certs");
    expect(screen.queryAllByTestId("document-name")).toHaveLength(1);
    expect(screen.findByText("OpenCerts Demo")).not.toBeNull();
  });

  it("should show not found, when 'asdasd' is typed in searchbar", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    userEvent.type(screen.getByTestId("search-bar-input"), "asdasd");
    expect(screen.findByText("No documents found.")).not.toBeNull();
  });

  it("should show filtered card when click on document kind, then click documents filter", () => {
    expect.assertions(1);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Route path={`/`}>
          <DisplayDocuments documents={sampleDocuments} />
        </Route>
      </Router>
    );
    fireEvent.click(within(screen.getAllByTestId("hover-container")[0]).getByText("did"));
    fireEvent.click(screen.getByRole("link", { name: "Storable" }));
    expect(screen.getByText("test6")).not.toBeNull();
  });
});
