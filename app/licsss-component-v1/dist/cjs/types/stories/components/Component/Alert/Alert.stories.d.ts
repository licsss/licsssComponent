/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react-bootstrap").AlertProps & import("../../../../components/Component/Alert").AlertChildrenProps & {
        Heading?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentAlertBasic: Story;
