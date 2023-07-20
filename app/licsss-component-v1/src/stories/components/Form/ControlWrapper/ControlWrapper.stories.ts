import type { Meta, StoryObj } from "@storybook/react";
import ControlWrapper, {
  FormControlWrapperProps,
} from "../../../../components/Form/ControlWrapper";
import { FormControlBasic } from "../Control/Control.stories";
import { sortJSON } from "../../../../functions";
import { FormElementWrapperBasic } from "../ElementWrapper/ElementWrapper.stories";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/ControlWrapper",
  component: ControlWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof ControlWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FormControlWrapperBasic: Story = {
  args: sortJSON<FormControlWrapperProps>({
    ...FormControlBasic.args,
    ...FormElementWrapperBasic.args,
  }),
};
