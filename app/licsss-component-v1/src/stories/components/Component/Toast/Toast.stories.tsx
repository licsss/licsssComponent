import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Toast, { ToastProps } from "../../../../components/Component/Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Toast",
  component: Toast,
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentToastBasic: Story = {
  args: sortJSON<ToastProps>({
    header: <>title</>,
    children: (
      <ul>
        <li>通知1</li>
        <li>通知2</li>
      </ul>
    ),
  }),
};
