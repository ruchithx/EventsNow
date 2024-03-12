"use client";

import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import plugin from "grapesjs-blocks-basic";
import navbar from "grapesjs-navbar";
import form from "grapesjs-plugin-forms";
import gradient from "grapesjs-style-gradient";
import filter from "grapesjs-style-filter";
import styleBg from "grapesjs-style-bg";
import webPage from "grapesjs-preset-webpage";
import touch from "grapesjs-touch";
import RenderedContent from "./RenderedContent";
import Indexeddb from "grapesjs-indexeddb";

export default function Build({ onHtmlRendered }) {
  const [editor, setEditor] = useState(null);
  const [html, setHtml] = useState(null); // State to store rendered HTML

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
      ],
      pluginsOpts: {
        "grapesjs-blocks-basic": {},
        "grapesjs-navbar": {},
        "grapesjs-plugin-forms": {},
        "grapesjs-style-gradient": {},
        "grapesjs-style-filter": {},
        "grapesjs-style-bg": {},
        "grapesjs-preset-webpage": {},
        "grapesjs-touch": {},
        "grapesjs-indexeddb": {
          options: {
            // In case of multiple projects on the same page indicate an id to
            // prevent collisions
            key: "user-project-id",
            // Update IndexedDB name for the DB and the table containing project data
            dbName: "editorLocalData",
            objectStoreName: "projects",
          },
        },
      },
    });

    setEditor(editor);
  }, []);

  const renderPage = () => {
    if (!editor) return;

    const html = editor.getHtml();
    setHtml(html);

    // Optionally call the callback function with the rendered HTML
    onHtmlRendered?.(html);
  };

  useEffect(() => {
    renderPage(); // Render initially
    editor?.on("update", renderPage); // Re-render on editor updates
  }, [editor]);

  return (
    <div className="p-0 m-0 overflow-x-hidden overflow-scroll -scroll-ms-0 scroll-m-0">
      <div className="overflow-y-scroll" id="editor"></div>
      {/* Placeholder for rendered content (optional, can be removed) */}
      {/* {html && <RenderedContent content={html} />} */}
    </div>
  );
}
