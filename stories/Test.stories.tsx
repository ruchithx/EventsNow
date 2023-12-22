import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Test from "./../components/Test";

const meta: Meta<typeof Test> = {
  title: "Components/Test",
  component: Test,
};

export default meta;
type Story = StoryObj<typeof Test>;

export const Primary: Story = {
  render: () => <Test word="hello" card="ruchith" />,
};
