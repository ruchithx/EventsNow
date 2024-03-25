import React from "react";
import DOMPurify from "dompurify";

function RenderedContent({ content }) {
  const sanitizedContent = DOMPurify.sanitize(content); // Sanitize the HTML
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
}

export default RenderedContent;
