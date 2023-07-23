import Components, { ComponentsInterface } from "./Component";
import Forms, { FormsInterface } from "./Form";
import Wrapper, { WrapperInterface } from "./Wrapper";

export type ComponentInterface = FormsInterface &
  ComponentsInterface &
  WrapperInterface;
const Component: ComponentInterface = {
  ...Forms,
  ...Components,
  ...Wrapper,
};
export default Component;
