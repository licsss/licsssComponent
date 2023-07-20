import type { StoryObj } from "@storybook/react";
import { ModalProps } from "../../../../components/Component/Modal";
declare const meta: {
    title: string;
    component: typeof ModalShow;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentModalBasic: Story;
declare function ModalShow({ ...props }: ModalProps): any;
