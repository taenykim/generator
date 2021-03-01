export interface SelectItemValue {
  type: "boiler-plate" | "quit";
  dirName?: string;
  description: string;
}

export type SelectItems = Array<[number, SelectItemValue]>;

export type SelectItemMap = Map<number, SelectItemValue>;

export interface PromptOptions {
  DEFAULT_DEST_DIR_NAME?: string;
  QUESTION_MESSAGE1?: string;
  QUESTION_MESSAGE2?: string;
  SUCCESS_MESSAGE?: string;
  FAILURE_MESSAGE?: string;
  QUIT_MESSAGE?: string;
  EXIST_DEST_ERROR_MESSAGE?: string;
  EXIST_TARGET_ERROR_MESSAGE?: string;
}

export interface DefaultPromptOptions {
  DEFAULT_DEST_DIR_NAME: string;
  QUESTION_MESSAGE1: string;
  QUESTION_MESSAGE2: string;
  SUCCESS_MESSAGE: string;
  FAILURE_MESSAGE: string;
  QUIT_MESSAGE: string;
  EXIST_DEST_ERROR_MESSAGE: string;
  EXIST_TARGET_ERROR_MESSAGE: string;
}
