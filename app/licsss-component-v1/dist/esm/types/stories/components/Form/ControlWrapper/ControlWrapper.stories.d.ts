/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("../../../../components/Form/ElementWrapper").FormElementWrapperProps & import("../../../../components/Form/Control").FormControlProps & import("react").RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FormControlWrapperBasic: Story;
