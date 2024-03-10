import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import plugin from "grapesjs-blocks-basic";
import navbar from "grapesjs-navbar";
import form from "grapesjs-plugin-forms";
import gradient from "grapesjs-style-gradient";
import filter from "grapesjs-style-filter";
import styleBg from "grapesjs-style-bg";
import webPage from "grapesjs-preset-webpage";
import touch from "grapesjs-touch";

export default function build() {
  const [editor, setEditor] = useState(null);

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
      },
    });

    setEditor(editor);
  }, []);

  return (
    <div className="p-0 m-0 overflow-x-hidden overflow-scroll -scroll-ms-0 scroll-m-0">
      <div className="overflow-y-scroll" id="editor"></div>
    </div>
  );
}
