import type { Meta, StoryObj } from "@storybook/react";
import { sortJSON } from "../../../../functions";
import Pagination, {
  PaginationProps,
} from "../../../../components/Component/Pagination";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Component/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentPaginationBasic: Story = {
  args: sortJSON<PaginationProps>({
    meta: {
      currentPage: 1,
      lastPage: 3,
      length: 10,
      getLength: 20,
      per: 10,
    },
    setPage: (e) => {},
  }),
};
