import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Notification, {
  NotiProps,
} from "../../../../components/Component/Notification";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Notification",
  component: Notification,
  tags: ["autodocs"],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentNotificationBasic: Story = {
  args: sortJSON<NotiProps>({
    Notifications: {
      test: {
        header: "header(false)",
        body: "body",
        delay: false,
      },
      test2: {
        header: "header(1s)",
        body: "body",
        delay: 1000,
      },
    },
  }),
};
