import React from "react";
import { HeaderPicture } from "./../components/headerPicture";

export const About: React.FunctionComponent = () => {
  return (
    <main className="flex-1">
      <HeaderPicture title="About" description="Learn more about how you can contribute!" />
    </main>
  );
};
