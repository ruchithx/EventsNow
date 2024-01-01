import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Login from "../components/Login";

const meta: Meta<typeof Login> = {
  title: "Components/Button/Login",
  component: Login,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Main: Story = {
  args: {
    titleOfbutton: "LOGOUT",
    image: "Subtract.svg",
  },
};
