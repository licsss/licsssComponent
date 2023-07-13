import Forms, { FormsInterface } from "./Form";

export interface ComponentsInterface {}
const Components: ComponentsInterface & FormsInterface = {
  ...Forms,
};
export default Components;
