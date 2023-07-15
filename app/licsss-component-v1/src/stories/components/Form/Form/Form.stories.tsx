import type { Meta, StoryObj } from "@storybook/react";
import Form, { FormProps } from "../../../../components/Form/Form";
import { sortJSON } from "../../../../functions";
import ControlWrapper from "../../../../components/Form/ControlWrapper";
import SelectWrapper from "../../../../components/Form/SelectWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Form/Form",
  component: FormElement,
  tags: ["autodocs"],
} satisfies Meta<typeof FormElement>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FormBasic: Story = {
  args: sortJSON({
    validated: true,
  }),
};

function FormElement(props: FormProps): JSX.Element {
  return (
    <Form {...props}>
      <ControlWrapper label="control" required={true} />
      <SelectWrapper
        label="select"
        required={true}
        options={[{ value: "1", label: "one" }]}
      />
    </Form>
  );
}
