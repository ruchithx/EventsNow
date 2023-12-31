import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import InviteButton from "../components/InviteButton";

const meta: Meta<typeof InviteButton> = {
  title: "Components/Button/InviteButton",
  component: InviteButton,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof InviteButton>;

export const Main: Story = {
  args: {},
};
