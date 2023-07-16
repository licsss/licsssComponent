import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Button from "../../../../components/Component/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentButtonBasic: Story = {
  args: sortJSON({
    type: "button",
    variant: "primary",
    children: "登録",
    active: false,
    disabled: false,
    mode: "normal",
  }),
};
