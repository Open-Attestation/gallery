import React from "react";
import { HeaderPicture } from "./../components/headerPicture";

export const About: React.FunctionComponent = () => {
  return (
    <main className="flex-1">
      <HeaderPicture title="About" description="Learn more about how you can contribute!">
        <a
          className="transition-colors duration-200 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block my-8"
          href="https://www.openattestation.com/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
      </HeaderPicture>
    </main>
  );
};
