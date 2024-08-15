import React, { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, Routes, Route, Navigate, NavLink } from "react-router-dom";
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
  const versionToLabel: Record<Document["version"], string> = {
    "2": "v2.0",
    "3": "v3.0 (Beta)",
    "4": "v4.0 (Beta)"
  };
  const tagToVersions: Partial<Record<Tag, Array<Document["version"]>>> = {
    [Tag.TRADE_TRUST]: ["2", "3"],
    [Tag.OPEN_CERTS]: ["2", "4"]
  };

  const { tagId = "" } = useParams<{ tagId: string }>();
  const tagIdPascalCase = pascalCase(tagId);

  // Ensure tagId string is part of Tag enum (ugly but it's the downside of using Enum)
  let currentTag;
  if (Object.values(Tag).some((str: string) => str === tagIdPascalCase)) {
    currentTag = tagIdPascalCase as Tag;
  } else {
    currentTag = null;
  }

  // Only show versions for TradeTrust and OpenCerts
  if (!currentTag || !Object.keys(tagToVersions).includes(pascalCase(tagId))) return null;

  // react router activeClassName does not work on query params, hence:
  const [searchParams] = useSearchParams();
  let queryParamVersion = searchParams.get("version") || "2"; // if version query param does not exist, assume 2

  return (
    <div className="container px-8 my-8 flex gap-6 lg:mt-0">
      {tagToVersions[currentTag]?.map((version, i) => {
        const isSelectedVersion = version === queryParamVersion;
        const selectedStyle = (isSelected = false) => (isSelected ? "text-gray-800 underline" : "text-gray-600");

        return (
          <NavLink
            key={i}
            to={`/tag/${tagId}?version=${version}`}
            className={`text-gray-600 text-md font-medium ${selectedStyle(isSelectedVersion)}`}
          >
            {versionToLabel[version]}
          </NavLink>
        );
      })}
    </div>
  );
};

const FilteredDocuments: React.FunctionComponent<FilteredDocumentsProps> = ({
  searchValue,
  documents
}: FilteredDocumentsProps) => {
  const [searchParams] = useSearchParams();
  const documentVersion = searchParams.get("version") || "2"; // if version query param does not exist, assume 2
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

  const documentsFiltered = documents.filter(filterByTag).filter(filterBySearch).filter(filterByQuery);

  useEffect(() => {
    fuzzySearch(searchValue);
  }, [fuzzySearch, searchValue]);

  return (
    <div className="flex flex-wrap">
      {documentsFiltered.length === 0 ? (
        <NoDocumentsFound />
      ) : (
        documentsFiltered.map((document, i) => <DocumentCard {...document} key={i} />)
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
            <Route
              path={`tag/:tagId`}
              element={
                <>
                  <VersionFilter />
                  <FilteredDocuments searchValue={searchValue} documents={documents} />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
