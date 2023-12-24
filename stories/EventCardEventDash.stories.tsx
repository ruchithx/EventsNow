import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import EventCardEventDash from "../components/EventCardEventDash";

const meta: Meta<typeof EventCardEventDash> = {
  title: "Components/EventCardEventDash",
  component: EventCardEventDash,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof EventCardEventDash>;

export const Main: Story = {
  args: {
    img: "image 1.png",
    name: "NADA GAMA ",
    location: "KCC,Kandy Road,kandy.",
    date: "21st June 2023",
    time: "16.00 to 22.00",
    buttonName: "Stein Studios",
  },
};
