import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import PersonDetailsBar from "../components/PersonDetailsBar";

const meta: Meta<typeof PersonDetailsBar> = {
  title: "Components/PersonDetailsBar",
  component: PersonDetailsBar,
  // argTypes: {
  //   date: { control: "date" },
  // },
};

export default meta;
type Story = StoryObj<typeof PersonDetailsBar>;

export const Primary: Story = {
  args: {
    name: "ashan dilsara",
    email: "ashandilsara8@gmail.com",
  },
};
