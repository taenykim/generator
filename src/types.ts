interface QuitSelectItem {
  type: "quit";
  description: string;
}

interface BoilerSelectItem {
  type: "boiler-plate";
  dirName: string;
  description: string;
}

export type SelectItems = Array<[number, QuitSelectItem | BoilerSelectItem]>;

export type SelectItemMap = Map<number, QuitSelectItem | BoilerSelectItem>;

export interface PromptOptions {
  defaultDestDirName?: string;
  QUESTION_MESSAGE1?: string;
  QUESTION_MESSAGE2?: string;
  SUCCESS_MESSAGE?: string;
  FAILURE_MESSAGE?: string;
  QUIT_MESSAGE?: string;
  EXIST_DEST_ERROR_MESSAGE?: string;
  EXIST_TARGET_ERROR_MESSAGE?: string;
}

export type DefaultPromptOptions = Required<PromptOptions>;
