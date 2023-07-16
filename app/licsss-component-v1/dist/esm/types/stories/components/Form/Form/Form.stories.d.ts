/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { FormProps } from "../../../../components/Form/Form";
declare const meta: {
    title: string;
    component: typeof FormElement;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FormBasic: Story;
declare function FormElement(props: FormProps): JSX.Element;
