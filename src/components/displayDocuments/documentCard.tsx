import React, { useState } from "react";
import QRCode from "qrcode.react";
import { MdDescription, MdFileDownload } from "react-icons/md";
import { QrCodeButton } from "./qrCodeButton";
import { Document } from "../documents/types";


export const DocumentCard: React.FunctionComponent<Document> = ({ imageSrc, documents, title }) => {
  const [showQrView, setShowQrView] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(0);

  const uri = documents[selectedDocument].uri;
  return (
    <a
      data-testid="display-card"
      className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-2 py-4 md:py-2"
      href={uri}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-center rounded bg-white p-6 shadow-[0_0_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 delay-100 ease-out transform hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        {/* HoverContainer */}
        <div data-testid="hover-container" className="flex-column group">
          <div className="text-center mb-2">
            {documents.map((document, index) => (
              <span
                key={index}
                className={`uppercase ml-1 mr-1 mb-1 px-2 text-xs rounded-lg inline-block font-bold border ${index === selectedDocument ? "text-white bg-navy" : "border-navy"
                  }`}
                onClick={e => {
                  e.preventDefault();
                  setSelectedDocument(index);
                }}
              >
                {document.kind}
              </span>
            ))}
          </div>
          <div className="relative overflow-hidden">
            {!showQrView ? (
              // DocumentContainer
              <img
                data-testid="document-container"
                className="rounded object-contain bg-[#f9f9f9] w-[280px] h-[224px]"
                src={imageSrc}
                alt="document"
              />
            ) : (
              <QRCode data-testid="qr-code" className="mx-auto" value={uri} size={224} level={"H"} />
            )}
            {!showQrView ? (
              <QrCodeButton
                handleClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  setShowQrView(!showQrView);
                }}
              />
            ) : (
              // ShowDocumentButton
              <div
                data-testid="show-document-button"
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  setShowQrView(!showQrView);
                }}
                className="absolute bottom-0 right-0 flex justify-center hover:bg-navy hover:text-white w-12 h-12 bg-[#feeee7] rounded-[12px_0px_4px] transition-transform duration-300 ease-in transform translate-x-full translate-y-full group-hover:transform-none"
              >
                <MdDescription size={20} className="self-center" />
              </div>
            )}
            {!showQrView && documents[selectedDocument].downloadUrl && (
              // DownloadDocumentButton
              <div
                data-testid="download-document-button"
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  window.open(documents[selectedDocument].downloadUrl, "_blank")?.focus();
                }}
                className="absolute bottom-0 left-0 flex justify-center transition-colors duration-300 ease-out hover:bg-navy hover:text-white w-12 h-12 bg-[#feeee7] rounded-[0px_12px_0px_4px]"
              >
                <MdFileDownload size={20} className="self-center" />
              </div>
            )}
          </div>
          {/* DocumentDetails */}
          <div data-testid="document-name" className="mt-5 font-medium text-base text-[#2c3549] w-[280px] leading-[19px]">
            {title}
          </div>
        </div>
      </div>
    </a>
  );
};
