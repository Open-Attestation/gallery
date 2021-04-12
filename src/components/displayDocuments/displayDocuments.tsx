import React, { useState, useEffect } from "react";
import { useParams, Switch, Route, Redirect } from "react-router-dom";
import { pascalCase } from "change-case";
import { cssContainerWrapper } from "../../constants";
import { useFuzzy } from "react-use-fuzzy";
import { MenuBar } from "./menuBar/menuBar";
import { DocumentCard } from "./documentCard";
import { Tag, Document } from "./documents";

interface FilteredDocumentsProps {
  searchValue: string;
  documents: Document[];
}

const NoDocumentsFound: React.FunctionComponent = () => {
  return (
    <div className="text-center w-auto mx-auto py-8">
      <h2>No documents found.</h2>
      <p>Try searching another term?</p>
    </div>
  );
};

const FilteredDocuments: React.FunctionComponent<FilteredDocumentsProps> = ({
  searchValue,
  documents
}: FilteredDocumentsProps) => {
  const { tagId } = useParams<{ tagId: string }>();
  const { result, search: fuzzySearch } = useFuzzy<Document>(documents, {
    keys: ["title"]
  });

  const displayFilteredDocuments = (documents: Document[]): React.ReactNode => {
    const filtered = documents
      .filter(document => !tagId || document.tags.includes(pascalCase(tagId) as Tag))
      .filter(document => !searchValue || result.includes(document))
      .map((doc, index) => (
        <DocumentCard title={doc.title} uri={doc.uri} imageSrc={doc.imageSrc} tags={doc.tags} key={index} />
      ));

    return filtered.length === 0 ? <NoDocumentsFound /> : filtered;
  };

  useEffect(() => {
    fuzzySearch(searchValue);
  }, [fuzzySearch, searchValue]);

  return <div className="flex flex-wrap">{displayFilteredDocuments(documents)}</div>;
};

interface DisplayDocumentsProps {
  documents: Document[];
}

export const DisplayDocuments: React.FunctionComponent<DisplayDocumentsProps> = ({
  documents
}: DisplayDocumentsProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <MenuBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className="py-16">
        <div className={`${cssContainerWrapper} md:px-00`}>
          <Switch>
            <Route exact path={`/`}>
              <FilteredDocuments searchValue={searchValue} documents={documents} />
            </Route>
            <Route path={`/tag/:tagId`}>
              <FilteredDocuments searchValue={searchValue} documents={documents} />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
