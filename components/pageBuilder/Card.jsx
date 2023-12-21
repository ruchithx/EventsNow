import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { useNode, Element } from "@craftjs/core";

import { Editor, Frame } from "@craftjs/core";
export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Element id="text" canvas>
          <Text text="Title" fontSize={20} />
          <Text text="Subtitle" fontSize={15} />
        </Element>
        <Element id="buttons" canvas>
          <Button
            size="small"
            text="Learn more"
            variant="contained"
            color="primary"
          />
        </Element>
      </Editor>
    </Container>
  );
};
