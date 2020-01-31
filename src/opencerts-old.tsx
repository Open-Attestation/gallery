import React, { useState } from "react";
import RopstenDemo from "./Ropsten-Demo.json";
import { Button } from "./components/button-old";

const wait = (timeout: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(timeout), timeout);
  });
};

interface Step {
  name: string;
  status: "PENDING" | "DONE";
}

export const OpencertsGallery: React.FunctionComponent = () => {
  const [steps, setSteps] = useState<Step[]>([]);

  const deploy = (): void => {
    setSteps([
      { name: "Upload to AWS", status: "PENDING" },
      { name: "Compute data", status: "PENDING" },
      { name: "Redirect to opencerts", status: "PENDING" }
    ]);

    Promise.all([
      wait(2000),
      fetch(`https://api-ropsten.opencerts.io/storage`, {
        method: "POST",
        body: JSON.stringify({
          document: RopstenDemo
        })
      }).then(res => res.json())
    ])
      .then(([, { id, key }]) => {
        setSteps(steps => [{ ...steps[0], status: "DONE" }, steps[1], steps[2]]);
        return { id, key };
      })
      .then(({ id, key }) => {
        const action = {
          type: "DOCUMENT",
          payload: {
            uri: `https://api-ropsten.opencerts.io/storage/${id}`,
            key,
            permittedAction: ["STORE"],
            redirect: "https://tradetrust.io/"
          }
        };
        return Promise.all([
          wait(2000),
          Promise.resolve(
            `https://deploy-preview-480--opencerts-development.netlify.com/?action=${encodeURI(JSON.stringify(action))}`
          )
        ]);
      })
      .then(([, url]) => {
        setSteps(steps => [steps[0], { ...steps[1], status: "DONE" }, steps[2]]);
        return url;
      })
      .then(url => {
        return wait(2000).then(() => url);
      })
      .then(url => {
        setSteps(steps => [steps[0], steps[1], { ...steps[2], status: "DONE" }]);
        window.location.href = url;
      });
  };
  return (
    <div className="p-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <i className="fas fa-file-alt text-5xl" />
          </div>
          <p className="text-gray-700 text-base text-center">Encrypted document</p>
        </div>
        <div className="px-6 py-4 text-center">
          <Button onClick={deploy}>Upload</Button>
        </div>
        {steps.length > 0 && (
          <div className="text-center px-6 py-4">
            <div className="text-left inline-block">
              {steps.map((step, index) => {
                return (
                  <span key={index} className={`${step.status === "DONE" ? "text-green-500 bold" : ""}`}>
                    {index + 1}. {step.name}{" "}
                    {step.status === "PENDING" ? (
                      <i className="fas fa-spinner fa-spin" />
                    ) : (
                      <i className="fas fa-check" />
                    )}
                    <br />
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
