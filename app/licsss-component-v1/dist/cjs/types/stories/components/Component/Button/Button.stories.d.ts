/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react-bootstrap").ButtonProps & import("../../../../components/Component/Button").ButtonChildrenProps & import("react").RefAttributes<HTMLButtonElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentButtonBasic: Story;
