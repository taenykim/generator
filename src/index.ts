import { selectItems } from "./data";
import { PromptOptions } from "./types";
import createPrompt from "./prompt";

const DEFAULT_DEST_DIR_NAME = "temp";
const QUESTION_MESSAGE = "생성할 보일러 플레이트를 선택해주세요.\n";

const run = () => {
  const selectItemMap = new Map(selectItems);
  const options: PromptOptions = {
    defaultDestDirName: DEFAULT_DEST_DIR_NAME,
    questionMessage: QUESTION_MESSAGE,
  };

  createPrompt(selectItemMap, options);
};

module.exports = () => {
  return {
    run,
  };
};
