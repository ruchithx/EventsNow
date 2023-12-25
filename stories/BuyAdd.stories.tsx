import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import BUyAdd from "../components/BUyAdd";

const meta: Meta<typeof BUyAdd> = {
  title: "Components/Button/BUyAdd",
  component: BUyAdd,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof BUyAdd>;

export const Main: Story = {
  args: {},
};
