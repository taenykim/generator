import {
  selectItems,
  defaultDestDirName,
  QUESTION_MESSAGE1,
  QUESTION_MESSAGE2,
} from "./data";
import { PromptOptions, SelectItemMap } from "./types";
import createPrompt from "./prompt";

const run = () => {
  const selectItemMap: SelectItemMap = new Map(selectItems);
  const options: PromptOptions = {
    defaultDestDirName,
    QUESTION_MESSAGE1,
    QUESTION_MESSAGE2,
  };

  createPrompt(selectItemMap, options);
};

module.exports = () => {
  return {
    run,
  };
};
