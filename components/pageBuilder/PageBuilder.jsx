"use client";
import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "./Toolbox";
import { SettingsPanel } from "./SettingPanel";
import { Topbar } from "./Topbar";

import { Container } from "./Container";
import { Editor, Frame, Element } from "@craftjs/core";
import { Card } from "./Card";
import { Button } from "./Button";
import { Text } from "./Text";

export default function PageBuilder() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button color="yellow" size="small" variant="outlined">
                  Click
                </Button>
                <Text fontSize="small" text="Hi world!" />
                <Element is={Container} padding={2} background="#999" canvas>
                  <Text fontSize="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
