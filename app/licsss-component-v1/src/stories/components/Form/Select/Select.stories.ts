import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Select, { FormSelectProps } from "../../../../components/Form/Select";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FormSlectBasic: Story = {
  args: sortJSON<FormSelectProps>({
    name: "select",
    required: true,
    disabled: false,
    isValid: false,
    isInvalid: false,
    validMessage: "valid message",
    invalidMessage: "invalid message",
    options: [
      {
        value: "value",
        label: "label",
      },
    ],
  }),
};
