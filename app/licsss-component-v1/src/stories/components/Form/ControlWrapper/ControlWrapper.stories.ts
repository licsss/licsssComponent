import type { Meta, StoryObj } from "@storybook/react";
import ControlWrapper from "../../../../components/Form/ControlWrapper";
import { ControlBasic } from "../Control/Control.stories";
import { sortJSON } from "../../../../functions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/ControlWrapper",
  component: ControlWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof ControlWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ControlWrapperBasic: Story = {
  args: sortJSON({
    ...ControlBasic.args,
    label: "label",
    maxLength: 50,
    description: "",
    required: true,
    disabled: false,
    isValid: false,
    validMessage: "",
    isInvalid: false,
    invalidMessage: "",
  }),
};
