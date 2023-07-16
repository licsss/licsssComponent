import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import {
  NotificationToast,
  NotificationToastProps,
} from "../../../../components/Component/Notification";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Notification",
  component: NotificationToast,
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationToast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentNotificationToastBasic: Story = {
  args: sortJSON<NotificationToastProps>({
    Notification: {
      header: "header",
      body: "body",
    },
    notificationKey: "test",
    delay: 1000,
  }),
};
