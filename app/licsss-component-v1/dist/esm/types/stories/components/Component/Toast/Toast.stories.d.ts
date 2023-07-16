/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { ToastProps } from "../../../../components/Component/Toast";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<ToastProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentToastBasic: Story;
