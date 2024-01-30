import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import View_Report from "../app/organization/dashboard/[id]/components/View_Report";

const meta: Meta<typeof View_Report> = {
  title: "Components/Button/View_Report",
  component: View_Report,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof View_Report>;

export const Main: Story = {
  args: {
    discription1: "Attendence Report",
    img: "Chartfill.svg",
  },
};
