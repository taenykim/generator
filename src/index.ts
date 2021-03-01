import { selectItems } from "./data";
import { PromptOptions, SelectItemMap } from "./types";
import createPrompt from "./prompt";

const DEFAULT_DEST_DIR_NAME = "my-app";
const QUESTION_MESSAGE1 =
  "생성할 프로젝트명을 입력하세요(default : my-app, 현재위치: . ) > ";
const QUESTION_MESSAGE2 = "\n\n생성할 보일러 플레이트를 선택해주세요.\n";
// const SUCCESS_MESSAGE = "\n생성되었습니다!\n";
// const FAILURE_MESSAGE = "\n아무일도 일어나지 않았습니다!\n";
// const QUIT_MESSAGE = "\n종료되었습니다!\n";
// const EXIST_DEST_ERROR_MESSAGE = '\n디렉토리가 존재합니다.\n"';
// const EXIST_TARGET_ERROR_MESSAGE = "\n현재 디렉토리에 파일들이 존재합니다\n";

const run = () => {
  const selectItemMap: SelectItemMap = new Map(selectItems);
  const options: PromptOptions = {
    DEFAULT_DEST_DIR_NAME,
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
