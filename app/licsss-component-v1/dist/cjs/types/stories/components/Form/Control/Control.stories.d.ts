/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { FormControlProps } from "../../../../components/Form/Control";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<FormControlProps & import("react").RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FormControlBasic: Story;
