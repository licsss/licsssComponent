import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import ElementWrapper from "../../../../components/Form/ElementWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/ElementWrapper",
  component: ElementWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof ElementWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FormElementWrapperBasic: Story = {
  args: sortJSON({
    label: "label",
    description: "description",
    required: true,
    parent: {},
  }),
};
