import React from "react";
import "../app";
import styled from "@emotion/styled";

const HeaderPictureContainer = styled.div`
  height: 19.5rem;
`;

export const HeaderPicture: React.FunctionComponent = () => {
  return <HeaderPictureContainer className="test header-pic-main">test</HeaderPictureContainer>;
};
