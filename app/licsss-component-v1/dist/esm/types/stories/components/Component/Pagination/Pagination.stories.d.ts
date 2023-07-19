/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { PaginationProps } from "../../../../components/Component/Pagination";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<PaginationProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentPaginationBasic: Story;
