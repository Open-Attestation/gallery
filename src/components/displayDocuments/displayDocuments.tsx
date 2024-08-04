import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, Routes, Route, Navigate, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { pascalCase } from "change-case";
import { cssContainerWrapper } from "../../constants";
import { useFuzzy } from "react-use-fuzzy";
import { MenuBar } from "./menuBar/menuBar";
import { DocumentCard } from "./documentCard";
import { Tag, Document } from "../documents/types";

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

const VersionFilter: React.FunctionComponent = () => {
  const location = useLocation();
  const { tagId } = useParams<{ tagId: string }>();

  if (pascalCase(tagId ?? "") !== Tag.TRADE_TRUST) return null; // as of now, only tradetrust supports some v3 docs

  // react router activeClassName does not work on query params, hence:
  const params = new URLSearchParams(location.search.substring(1));
  const styledV2 = params.get("version") === "2" ? "text-gray-800 underline" : "text-gray-600";
  const styledV3 = params.get("version") === "3" ? "text-gray-800 underline" : "text-gray-600";

  return (
    <div className="container px-8 my-8 lg:mt-0">
      <NavLink to={`/tag/${tagId}?version=2`} className={`text-gray-600 text-md font-medium mr-8 ${styledV2}`}>
        V2 Document
      </NavLink>
      <NavLink to={`/tag/${tagId}?version=3`} className={`text-gray-600 text-md font-medium ${styledV3}`}>
        V3 Document (Beta)
      </NavLink>
    </div>
  );
};

const FilteredDocuments: React.FunctionComponent<FilteredDocumentsProps> = ({
  searchValue,
  documents
}: FilteredDocumentsProps) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const documentVersion = query.get("version") || "2"; // if not exist in query params, assume is version 2 document
  const { tagId } = useParams<{ tagId: string }>();
  const { result, search: fuzzySearch } = useFuzzy<Document>(documents, {
    keys: ["title"]
  });

  const filterByQuery = useCallback(
    (document: Document) => {
      return document.version === documentVersion;
    },
    [documentVersion]
  );

  const filterByTag = useCallback(
    (document: Document) => {
      return !tagId || document.tags.includes(pascalCase(tagId) as Tag);
    },
    [tagId]
  );

  const filterBySearch = useCallback(
    (document: Document) => {
      return !searchValue || result.includes(document);
    },
    [result, searchValue]
  );

  const documentsFiltered = documents
    .filter(filterByTag)
    .filter(filterBySearch)
    .filter(filterByQuery);

  useEffect(() => {
    fuzzySearch(searchValue);
  }, [fuzzySearch, searchValue]);

  return (
    <div className="flex flex-wrap">
      {documentsFiltered.length === 0 ? (
        <NoDocumentsFound />
      ) : (
        documentsFiltered.map(document => <DocumentCard {...document} key={`${uuidv4()}`} />)
      )}
    </div>
  );
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
        <div className={`${cssContainerWrapper}`}>
          <Routes>
            <Route index element={<FilteredDocuments searchValue={searchValue} documents={documents} />} />
            <Route path={`tag/:tagId`} element={
              <>
                <VersionFilter />
                <FilteredDocuments searchValue={searchValue} documents={documents} />
              </>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
