"use client";

import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import plugin from "grapesjs-blocks-basic";
import form from "grapesjs-plugin-forms";
import gradient from "grapesjs-style-gradient";
import filter from "grapesjs-style-filter";
import styleBg from "grapesjs-style-bg";
import webPage from "grapesjs-preset-webpage";
import touch from "grapesjs-touch";
import RenderedContent from "./RenderedContent";
import Indexeddb from "grapesjs-indexeddb";
import newsletter from "grapesjs-preset-newsletter";
import navbar from "grapesjs-navbar";
import Link from "next/link";

export default function Build() {
  const [editor, setEditor] = useState(null);
  const [html, setHtml] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [
        plugin,
        navbar,
        form,
        gradient,
        filter,
        styleBg,
        webPage,
        touch,
        Indexeddb,
        newsletter,
      ],
      pluginsOpts: {
        "grapesjs-blocks-basic": {},
        [navbar]: {},
        "grapesjs-plugin-forms": {},
        "grapesjs-style-gradient": {},
        "grapesjs-style-filter": {},
        "grapesjs-style-bg": {},
        "grapesjs-preset-webpage": {},
        "grapesjs-touch": {},
        "grapesjs-preset-newsletter": {
          modalTitleImport: "Import template",
          "grapesjs-plugin-export": {
            /* options */
          },
        },
        "grapesjs-indexeddb": {
          options: {
            key: "user-project-id",
            dbName: "editorLocalData",
            objectStoreName: "projects",
          },
        },
      },
    });

    setEditor(editor);
  }, []);

  // const renderPage = () => {
  //   if (!editor) return;

  //   const html = editor.getHtml();
  //   setHtml(html);

  //   onHtmlRendered?.(html);
  // };

  // useEffect(() => {
  //   renderPage();
  //   editor?.on("update", renderPage);
  // }, [editor]);

  return (
    <div className="p-0 m-0 overflow-x-hidden ">
      <div className="bg-[#373D49] h-12 text-white border-0 p-5">
        <Link href={"./"}>Back</Link>
      </div>
      <div id="editor">hii</div>
      {/* Placeholder for rendered content (optional, can be removed) */}
      {/* {html && <RenderedContent content={html} />} */}
    </div>
  );
}
