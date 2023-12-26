import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import EventCard from "../components/EventCard";

const meta: Meta<typeof EventCard> = {
  title: "Components/EventCard",
  component: EventCard,
  argTypes: {
    date: { control: "date" },
  },
};

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Primary: Story = {
  args: {
    img: "image 3.png",
    name: "Nadagama",
    location: "Matara",
    date: "2023-1-1",
    time: "09.00",
  },
};
