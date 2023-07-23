import type { Meta, StoryObj } from "@storybook/react";
import ReduxProvider, {
  ReduxProps,
} from "../../../../components/Wrapper/Redux";
import { useSelector, useDispatch } from "react-redux";
import {
  addLocal,
  removeLocal,
} from "../../../../components/Wrapper/Redux/reducer";
import { createKey, sortJSON } from "../../../../functions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Wrapper/Redux",
  component: Redux,
  tags: ["autodocs"],
} satisfies Meta<typeof Redux>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ComponentAlertBasic: Story = {
  args: sortJSON<ReduxProps>({}),
};

function Redux(props: ReduxProps) {
  return (
    <ReduxProvider {...props}>
      <ReduxChildren />
    </ReduxProvider>
  );
}
function ReduxChildren() {
  const local = useSelector((state: { local: { key: string } }) => state.local);
  const dispath = useDispatch();
  return (
    <>
      <button
        onClick={() => dispath(addLocal({ key: "key", value: "you tapped" }))}
      >
        {local.key || "please tab this button"}
      </button>
      <button
        onClick={() => dispath(removeLocal({ key: "key", value: "value" }))}
      >
        remove
      </button>
      <button
        onClick={() =>
          dispath(addLocal({ key: createKey(), value: "you tapped" }))
        }
      >
        random
      </button>
      <div>
        保持データ
        <pre>{JSON.stringify(local, null, 2)}</pre>
      </div>
    </>
  );
}
