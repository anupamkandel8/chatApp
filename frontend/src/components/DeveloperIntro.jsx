import React from "react";

export default function DeveloperIntro() {
  return (
    <div className="bg-slate-700 w-full p-3 fixed bottom-0 text-center">
      <h1 className="font-bold text-white">
        Made with <span className="text-red-500">♥</span> by Anupam &nbsp; Click
        for source code on{" "}
        <a
          href="https://github.com/anupamkandel8/chatApp"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300"
        >
          (GitHub)
        </a>
      </h1>
    </div>
  );
}
