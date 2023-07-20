import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Modal, { ModalProps } from "../../../../components/Component/Modal";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Modal",
  component: ModalShow,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalShow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentModalBasic: Story = {
  args: sortJSON<ModalProps>({
    show: false,
    size: "lg",
    fullscreen: "",
    Header: {
      children: "header",
    },
    Body: {
      children: "body",
    },
    children: "children",
    Footer: {
      children: "footer",
    },
  }),
};

function ModalShow({ ...props }: ModalProps): any {
  return <Modal {...props}></Modal>;
}
