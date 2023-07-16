/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { IconProps } from "../../../../components/Component/Icon";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<SVGSVGElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentIconBasic: Story;
