import type { Meta, StoryObj } from "@storybook/react";
import Control from "../../../../components/Form/Control";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/Control",
  component: Control,
  tags: ["autodocs"],
} satisfies Meta<typeof Control>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {};