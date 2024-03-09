import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import plugin from "grapesjs-blocks-basic";

export default function build() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [plugin],
      pluginsOpts: {
        plugin: {},
      },
    });

    // Access the Style Manager
    const styleManager = editor.StyleManager;

    // Add custom style properties
    styleManager.addSector("Custom", {
      name: "MyCustomStyles",
      open: true,
      buildProps: ["background-color", "color", "padding"],
    });

    setEditor(editor);
  }, []);

  return (
    <div className="p-0 m-0 overflow-x-hidden overflow-scroll -scroll-ms-0 scroll-m-0">
      <div id="editor"></div>
    </div>
  );
}
