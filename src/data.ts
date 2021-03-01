import { SelectItems } from "types";

export const selectItems: SelectItems = [
  [
    0,
    {
      type: "boiler-plate",
      dirName: "ts-webpack",
      description: "- TypeScript + Webpack",
    },
  ],
  [
    1,
    {
      type: "boiler-plate",
      dirName: "js-webpack",
      description: "- JavaScript + Webpack",
    },
  ],
  [
    2,
    {
      type: "quit",
      description: "- quit",
    },
  ],
];

export const defaultDestDirName = "my-app";
export const QUESTION_MESSAGE1 =
  "생성할 프로젝트명을 입력하세요(default : my-app, 현재위치: . ) > ";
export const QUESTION_MESSAGE2 = "\n\n생성할 보일러 플레이트를 선택해주세요.\n";
// export const SUCCESS_MESSAGE = "\n생성되었습니다!\n";
// export const FAILURE_MESSAGE = "\n아무일도 일어나지 않았습니다!\n";
// export const QUIT_MESSAGE = "\n종료되었습니다!\n";
// export const EXIST_DEST_ERROR_MESSAGE = '\n디렉토리가 존재합니다.\n"';
// export const EXIST_TARGET_ERROR_MESSAGE = "\n현재 디렉토리에 파일들이 존재합니다\n";
