import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { useSelector } from "react-redux";
import { saveStorage } from "../../../functions";

export interface ReduxProps extends React.PropsWithChildren {}
export default function Redux(props: ReduxProps): React.ReactElement {
  return (
    <Provider store={store}>
      <ReduxChildren {...props} />
    </Provider>
  );
}
function ReduxChildren(props: ReduxProps): React.ReactElement {
  const local = useSelector((state: { local: any }) => state.local);
  React.useEffect(() => {
    saveStorage("local", local);
  }, [local]);
  return <>{props.children}</>;
}
