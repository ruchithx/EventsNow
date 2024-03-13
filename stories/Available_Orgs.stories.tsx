// import Available_Orgs from "@/components/Available_Orgs";
import Available_Orgs from "@/components/Available_Orgs";
import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Available_Orgs> = {
  title: "Components/Available_Orgs",
  component: Available_Orgs,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof Available_Orgs>;

export const Main: Story = {
  args: {
    OrgName: "Stein Studios",
    image: "image 1.png",
    noOfEvents: "45",
    noOfMembers: "35",
  },
};
