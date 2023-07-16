import Components, { ComponentsInterface } from "./Component";
import Forms, { FormsInterface } from "./Form";

export type ComponentInterface = FormsInterface & ComponentsInterface;
const Component: ComponentInterface = {
  ...Forms,
  ...Components,
};
export default Component;
