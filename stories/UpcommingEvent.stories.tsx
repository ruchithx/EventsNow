import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Upcoming_Events from "../components/Upcoming_Events";

const meta: Meta<typeof Upcoming_Events> = {
  title: "Components/Upcoming_Events",
  component: Upcoming_Events,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof Upcoming_Events>;

export const Main: Story = {
  args: {
    EventName: "NADAGAMA",
    Location: "KCC,Kandy Road,kandy.",
    Time: "16.00 to 22.00",
    Date: "21st June 2023",
    Ratings: "RATING 4.6/5",
    image: "image3o.png",
    buttonDesc: "INFO",
  },
};
