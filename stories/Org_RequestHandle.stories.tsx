import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Org_RequestHandle from "../app/profile/components/Org_RequestHandle";

const meta: Meta<typeof Org_RequestHandle> = {
  title: "Components/Org_RequestHandle",
  component: Org_RequestHandle,
  // argTypes: {
  //   name: { control: "text" },
  //   caption: { control: "text" },
  // },
};

export default meta;
type Story = StoryObj<typeof Org_RequestHandle>;

export const Main: Story = {
  args: {
    OrgName: "Stein Studio",
    image: "image 1.png",
  },
};
