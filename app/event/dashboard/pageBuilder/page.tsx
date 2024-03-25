import React from "react";
import Build from "./Build";

function page() {
  // const handleHtmlRendered = (renderedHtml: any) => {
  //   console.log("Received rendered HTML:", renderedHtml);
  // };
  return (
    <div>
      <Build />
      {/* <Build onHtmlRendered={handleHtmlRendered} /> */}
    </div>
  );
}

export default page;
