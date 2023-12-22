import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Post from "../components/Post";

const meta: Meta<typeof Post> = {
  title: "Components/Post",
  component: Post,
};

export default meta;
type Story = StoryObj<typeof Post>;

// export const Basic: Story = {};

// Other imports and story implementation
// export const Default: ComponentStory<typeof Post> = (args) => (
//   <Post
//     profilePic="profilpic"
//     name="Ruchith Nusara"
//     caption="Beautiful days"
//     post="post"
//   />
// );

export const Primary: Story = {
  render: () => (
    <Post
      profilePic="profilpic"
      name="Ruchith Nusara"
      caption="Beautiful days"
      post="post"
    />
  ),
};

// export const Primary: Story = {
//   args: {
//     profilePic: "profilpic",
//     name: "Ruchith Nusara",
//     caption: "Beautiful days",
//     post: "post",
//   },
// };
