// import { withActions } from "@storybook/addon-actions/decorator";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: "demo/example",
  tags: ["demo"],
  parameters: {},
  argTypes: {
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-screen h-screen p-5 gap-y-[10px]">
        <h1>Title</h1>
      </div>
    );
  },
  args: {
    title:"Title",
  },
};