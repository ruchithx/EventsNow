import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from "@craftjs/core";
export const Button = ({ size, variant, color, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  );
};
