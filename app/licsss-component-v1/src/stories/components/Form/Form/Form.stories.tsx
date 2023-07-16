import type { Meta, StoryObj } from "@storybook/react";
import Form, { FormProps } from "../../../../components/Form/Form";
import { sortJSON } from "../../../../functions";
import ControlWrapper from "../../../../components/Form/ControlWrapper";
import SelectWrapper from "../../../../components/Form/SelectWrapper";
import Button from "../../../../components/Component/Button";

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
  args: sortJSON<FormProps>({
    validated: false,
    successMessage: <>success</>,
    Response: {
      status: {
        result: true,
        code: 200,
        nonce: "",
      },
      payloads: {
        test: "test",
      },
      error: {
        abstract: "ERROR",
        code: 400000,
        title: "エラー",
        messages: ["エラー詳細"],
      },
    },
  }),
};

function FormElement(props: FormProps): JSX.Element {
  return (
    <Form {...props} Response={props.Response}>
      <ControlWrapper label="control" required={true} />
      <SelectWrapper
        label="select"
        required={true}
        options={[{ value: "1", label: "one" }]}
      />
      <Button mode="add" type="submit" />
    </Form>
  );
}
