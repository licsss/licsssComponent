import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import ElementWrapper, {
  FormElementWrapperProps,
} from "../../../../components/Form/ElementWrapper";
import Control from "../../../../components/Form/Control";
import { FormControlWrapperProps } from "../../../../components/Form/ControlWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/ElementWrapper",
  component: ElementWrapperControl,
  tags: ["autodocs"],
} satisfies Meta<typeof ElementWrapperControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FormElementWrapperControl: Story = {
  args: sortJSON({
    label: "label",
    description: "description",
    required: true,
    parent: {},
    placeholder: "",
  }),
};

function ElementWrapperControl(props: FormElementWrapperProps): JSX.Element {
  const {
    label,
    description,
    parent,
    ...ControlProps
  }: FormControlWrapperProps = props;
  return (
    <ElementWrapper
      label={label}
      description={description}
      parent={parent}
      required={props.required}
    >
      <Control {...ControlProps} />
    </ElementWrapper>
  );
}
