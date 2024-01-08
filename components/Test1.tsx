// pages/index.js
"use client";

import { SetStateAction, useState } from "react";

const IndexPage = () => {
  const [content, setContent] = useState("Initial Content");

  const handleButtonClick = (n: SetStateAction<string>) => {
    setContent(n);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Buttons in the first div */}
        <button
          className="block w-full mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleButtonClick("Changed Content 1")}
        >
          Change Content 1
        </button>
        <button
          className="block w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => handleButtonClick("Changed Content 2")}
        >
          Change Content 2
        </button>
      </div>
      <div className="w-2/4 bg-gray-300 p-4">
        {/* Content in the second div */}
        <p>{content}</p>
      </div>
      <div className="w-1/4 bg-gray-400 p-4">
        {/* Content in the third div */}
        <p>Third Div - Stable Content</p>
      </div>
    </div>
  );
};

export default IndexPage;
