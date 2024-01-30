import type { ComponentStory, Meta, StoryObj } from "@storybook/react";
import EventCardOrgDash from "../app/organization/dashboard/[id]/components/EventCardOrgDash";

const meta: Meta<typeof EventCardOrgDash> = {
  title: "Components/EventCardOrgDash",
  component: EventCardOrgDash,
};

export default meta;
type Story = StoryObj<typeof EventCardOrgDash>;

export const Primary: Story = {
  args: {
    img: "image 1.png",
    name: "NADA GAMA",
    location: "KCC,Kandy Road,kandy.",
    date: "21st June 2023",
    time: "16.00 to 22.00",
  },
};
