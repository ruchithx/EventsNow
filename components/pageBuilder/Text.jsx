import { useRef } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
function Text({ text }) {
  const textNew = useRef("");

  const handleChange = (evt) => {
    textNew.current = evt.target.value;
    console.log(evt);
  };

  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <ContentEditable
        innerRef={textNew}
        html={text}
        onChange={handleChange}
        style={{ fontSize: `10 px` }}
      />
    </div>
  );
}

export default Text;
