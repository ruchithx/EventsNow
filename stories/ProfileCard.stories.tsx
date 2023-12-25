import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import ProfileCard from "../components/ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Main: Story = {
  args: {
    profilePic: "profile.jpg",
    name: "A-shan Dilz",
    accountType: "Organization account",
    email: "ashandilsara8@gmail.com",
  },
};
