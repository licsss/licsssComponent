import type { StoryObj } from "@storybook/react";
import { ReduxProps } from "../../../../components/Wrapper/Redux";
declare const meta: {
    title: string;
    component: typeof Redux;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ComponentAlertBasic: Story;
declare function Redux(props: ReduxProps): import("react/jsx-runtime").JSX.Element;
