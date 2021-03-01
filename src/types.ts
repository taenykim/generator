export interface SelectItemValue {
  type: "boiler-plate" | "quit";
  dirName?: string;
  description: string;
}

export type SelectItems = Array<[number, SelectItemValue]>;

export type SelectItemMap = Map<number, SelectItemValue>;

export interface PromptOptions {
  defaultDestDirName: string;
  questionMessage: string;
}
