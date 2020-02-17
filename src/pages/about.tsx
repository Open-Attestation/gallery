import React from "react";
import { Navbar } from "./../components/navbar";
import { HeaderPicture } from "./../components/headerPicture";

export const About: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <HeaderPicture title="About" description="Learn more about how you can contribute!" />
    </div>
  );
};
