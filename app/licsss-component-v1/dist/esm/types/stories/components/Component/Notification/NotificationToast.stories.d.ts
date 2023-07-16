/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { NotificationToastProps } from "../../../../components/Component/Notification";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<NotificationToastProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentNotificationToastBasic: Story;
