import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import CreateAccount from "../components/CreateAccount";

const meta: Meta<typeof CreateAccount> = {
  title: "Components/Button/CreateAccount",
  component: CreateAccount,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const Main: Story = {
  args: {
    Description: "Create Account",
  },
};
