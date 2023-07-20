/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { FormSelectProps } from "../../../../components/Form/Select";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<FormSelectProps & import("react").RefAttributes<HTMLSelectElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FormSlectBasic: Story;
