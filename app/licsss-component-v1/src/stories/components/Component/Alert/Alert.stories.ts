import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Alert, { AlertProps } from "../../../../components/Component/Alert";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentAlertBasic: Story = {
  args: sortJSON<AlertProps>({
    variant: "primary",
    children: "alert",
    name: "info",
    heigth: 32,
    width: 32,
  }),
};
