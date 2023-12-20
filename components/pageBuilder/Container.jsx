import React from "react";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";
export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};
