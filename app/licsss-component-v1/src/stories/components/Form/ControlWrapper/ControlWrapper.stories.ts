import type { Meta, StoryObj } from "@storybook/react";
import ControlWrapper from "../../../../components/Form/ControlWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/ControlWrapper",
  component: ControlWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof ControlWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    label: "label",
    required: true,
    isValid: true,
    isInvalid: true,
  },
};
