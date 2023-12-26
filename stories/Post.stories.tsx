import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Post from "../components/Post";

const meta: Meta<typeof Post> = {
  title: "Components/Post",
  component: Post,
  argTypes: {
    name: { control: "text" },
    caption: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Main: Story = {
  args: {
    profilePic: "profilpic",
    post: "post",
    name: "Ruchith Nusara",
    caption: "Beautiful days",
  },
};
