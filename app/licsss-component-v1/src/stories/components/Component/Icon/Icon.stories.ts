import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Icon, { IconProps } from "../../../../components/Component/Icon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentButtonBasic: Story = {
  args: sortJSON<IconProps>({
    name: "add",
    width: 16,
    height: 16,
    className: "",
  }),
};
