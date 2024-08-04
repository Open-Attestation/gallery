import { render, screen, within, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Document, Tag } from "../documents/types";
import { DisplayDocuments } from "../displayDocuments/displayDocuments";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

const sampleDocuments: Document[] = [
  {
    title: "test1",
    documents: [
      { uri: "test1-a", kind: "verifiable" },
      { uri: "test1-b", kind: "did" }
    ],
    imageSrc: "",
    tags: [Tag.TRADE_TRUST],
    version: "2"
  },
  {
    title: "test2",
    documents: [{ uri: "test2", kind: "did" }],
    imageSrc: "",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "test3",
    documents: [{ uri: "test3", kind: "did" }],
    imageSrc: "",
    tags: [Tag.OPEN_CERTS],
    version: "2"
  },
  {
    title: "test4",
    documents: [{ uri: "test4", kind: "did" }],
    imageSrc: "",
    tags: [Tag.LICENCE],
    version: "2"
  },
  {
    title: "MPA Certificate of Competency",
    documents: [{ uri: "test5", kind: "did" }],
    imageSrc: "test5",
    tags: [Tag.LICENCE],
    version: "2"
  },
  {
    title: "test6",
    documents: [{ uri: "test6", kind: "did" }],
    imageSrc: "",
    tags: [Tag.LICENCE],
    version: "2"
  },
  {
    title: "test7",
    documents: [{ uri: "test7", kind: "did" }],
    imageSrc: "",
    tags: [Tag.HEALTH_CERTS],
    version: "2"
  },

  {
    title: "test8",
    documents: [{ uri: "test8", kind: "verifiable" }],
    imageSrc: "",
    tags: [Tag.TRADE_TRUST],
    version: "3"
  },
  {
    title: "test9",
    documents: [{ uri: "test9", kind: "did" }],
    imageSrc: "",
    tags: [Tag.NYC_CERTS],
    version: "2"
  }
];

describe("displayDocuments", () => {
  afterEach(() => {
    cleanup()
  })

  it("should show all v2 documents, when in home route", () => {
    expect.assertions(1);
    render(
      <Router>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(8);
  });

  it("should show only TradeTrust documents, when in 'trade-trust' route", () => {
    expect.assertions(1);
    render(
      <Router initialEntries={["/tag/trade-trust"]}>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });

  it("should show OpenCerts documents, when in 'open-certs' route", () => {
    expect.assertions(1);
    render(
      <Router initialEntries={["/tag/open-certs"]}>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(2);
  });

  it("should show OpenCerts documents, when in 'health-certs' route", () => {
    expect.assertions(1);
    render(
      <Router initialEntries={["/tag/health-certs"]}>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });

  it("should show NYC documents, when in 'nyc-certs' route", () => {
    expect.assertions(1);
    render(
      <Router initialEntries={["/tag/nyc-certs"]}>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });

  it("should show Licence documents, when in 'licence' route", () => {
    expect.assertions(1);
    render(
      <Router initialEntries={["/tag/licence"]}>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(3);
  });

  it("should show OpenCerts Demo, when 'certs' is typed in searchbar", async () => {
    expect.assertions(2);
    render(
      <Router>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    await userEvent.type(screen.getByTestId("search-bar-input"), "certs");
    expect(screen.queryAllByTestId("document-name")).toHaveLength(1);
    expect(screen.findByText("OpenCerts Demo")).not.toBeNull();
  });

  it("should show not found, when 'asdasd' is typed in searchbar", () => {
    expect.assertions(1);
    render(
      <Router>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    userEvent.type(screen.getByTestId("search-bar-input"), "asdasd");
    expect(screen.findByText("No documents found.")).not.toBeNull();
  });

  it("should show filtered card when click on document kind, then click documents filter", () => {
    expect.assertions(1);
    render(
      <Router>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    fireEvent.click(within(screen.getAllByTestId("hover-container")[0]).getByText("did"));
    fireEvent.click(screen.getByRole("link", { name: "Licence" }));
    expect(screen.getByText("test6")).not.toBeNull();
  });

  it("should show only TradeTrust v3 document, when in '/tag/trade-trust?version=3' route", () => {
    expect.assertions(1);
    render(
      <Router initialEntries={["/tag/trade-trust?version=3"]}>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });

  it("should filtered between v2 / v3 document for TradeTrust", () => {
    expect.assertions(2);
    render(
      <Router>
        <DisplayDocuments documents={sampleDocuments} />
      </Router>
    );
    fireEvent.click(screen.getByRole("link", { name: "TradeTrust" }));
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);

    fireEvent.click(screen.getByRole("link", { name: "V3 Document (Beta)" }));
    expect(screen.getAllByTestId("display-card")).toHaveLength(1);
  });
});
