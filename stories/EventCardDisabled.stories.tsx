import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import EventCardDisabled from "../components/EventCardDisabled";

const meta: Meta<typeof EventCardDisabled> = {
  title: "Components/EventCardDisabled",
  component: EventCardDisabled,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof EventCardDisabled>;

export const Main: Story = {
  args: {
    img: "image 3.png",
    name: "MEGA",
    location: "MATARA",
    date: "21st MAY ",
  },
};
