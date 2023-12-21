import { useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@material-ui/core";
function Button({ children }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <MaterialButton
        ref={(ref) => connect(drag(ref))}
        size="3"
        variant="contained"
        color="yello"
      >
        {children}
      </MaterialButton>
    </div>
  );
}

export default Button;
