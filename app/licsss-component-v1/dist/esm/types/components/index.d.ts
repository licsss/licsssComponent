import { ComponentsInterface } from "./Component";
import { FormsInterface } from "./Form";
export type ComponentInterface = FormsInterface & ComponentsInterface;
declare const Component: ComponentInterface;
export default Component;
