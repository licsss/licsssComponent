/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { NotiProps } from "../../../../components/Component/Notification";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<NotiProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentNotificationBasic: Story;
