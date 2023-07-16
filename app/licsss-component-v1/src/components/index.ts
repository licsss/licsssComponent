import Components, { ComponentsInterface } from "./Component";
import Forms, { FormsInterface } from "./Form";

const Component: FormsInterface & ComponentsInterface = {
  ...Forms,
  ...Components,
};
export default Component;
