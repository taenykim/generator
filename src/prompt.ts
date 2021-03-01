import path from "path";
import fse from "fs-extra";
import terminalKit from "terminal-kit";
import { DefaultPromptOptions, PromptOptions, SelectItemMap } from "types";

const term = terminalKit.terminal;

const defaultOptions: DefaultPromptOptions = {
  DEFAULT_DEST_DIR_NAME: "my-app",
  QUESTION_MESSAGE1:
    "생성할 프로젝트명을 입력하세요(default : my-app, 현재위치: . ) > ",
  QUESTION_MESSAGE2: "생성할 보일러 플레이트를 선택해주세요.\n",
  SUCCESS_MESSAGE: "\n생성되었습니다!\n",
  FAILURE_MESSAGE: "\n아무일도 일어나지 않았습니다!\n",
  QUIT_MESSAGE: "\n종료되었습니다!\n",
};

const getDestDirName = async (defaultDestDirName: string) => {
  const input = await term.inputField({}).promise;

  if (input === undefined || input === "") {
    return defaultDestDirName;
  } else if (input === ".") {
    return ".";
  } else {
    return input;
  }
};

const getSelectItemType = async (descriptions: string[]) => {
  return await term.singleColumnMenu(descriptions, {
    style: term.green,
    selectedStyle: term.bold.black.bgWhite,
  }).promise;
};

const createDirectory = async (
  selectItemMap: SelectItemMap,
  input: number,
  destDirName: string
) => {
  const targetItemValue = selectItemMap.get(input);
  if (targetItemValue === undefined) {
    return;
  }

  if (targetItemValue.type === "quit") return targetItemValue.type;

  const targetDirectoryName = path.join(
    __dirname,
    `../lib/${selectItemMap.get(input)?.dirName}`
  );
  const destDirectoryName = path.join(process.cwd(), destDirName);

  await fse.copy(targetDirectoryName, destDirectoryName);
  return targetItemValue.type;
};

const createPrompt = async (
  selectItemMap: SelectItemMap,
  options: PromptOptions = defaultOptions
) => {
  const {
    DEFAULT_DEST_DIR_NAME,
    QUESTION_MESSAGE1,
    QUESTION_MESSAGE2,
    SUCCESS_MESSAGE,
    FAILURE_MESSAGE,
    QUIT_MESSAGE,
  } = { ...defaultOptions, ...options };

  term.cyan(QUESTION_MESSAGE1);

  const destDirName = await getDestDirName(DEFAULT_DEST_DIR_NAME);

  const selectItemValues = selectItemMap.values();
  const descriptions = Array.from(selectItemValues).map(
    (value) => value.description
  );

  term.cyan(QUESTION_MESSAGE2);

  const selectedItem = await getSelectItemType(descriptions);

  const selectedItemType = await createDirectory(
    selectItemMap,
    selectedItem.selectedIndex,
    destDirName
  );

  if (selectedItemType === "boiler-plate") term.cyan(SUCCESS_MESSAGE);
  if (selectedItemType === "quit") term.red(FAILURE_MESSAGE);
  if (!selectedItemType) term.white(QUIT_MESSAGE);
  process.exit(0);
};

export default createPrompt;
