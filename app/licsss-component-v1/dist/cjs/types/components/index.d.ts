import { ComponentsInterface } from "./Component";
import { FormsInterface } from "./Form";
import { WrapperInterface } from "./Wrapper";
export type ComponentInterface = FormsInterface & ComponentsInterface & WrapperInterface;
declare const Component: ComponentInterface;
export default Component;
