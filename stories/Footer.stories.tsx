import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Footer from "../components/Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Main: Story = {
  args: {},
};
