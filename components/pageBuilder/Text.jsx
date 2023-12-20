import React from "react";
import { useNode } from "@craftjs/core";

export const Text = ({ text, fontSize }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};
