import path from "path";
import fse from "fs-extra";
import terminalKit from "terminal-kit";
import { PromptOptions, SelectItemMap } from "types";

const term = terminalKit.terminal;

const defaultOptions = {
  defaultDestDirName: "my-boilerplate",
  questionMessage: "생성할 보일러 플레이트를 선택해주세요.\n",
};

const inputHandler = async (
  selectItemMap: SelectItemMap,
  input: number,
  destDirName: string
) => {
  const targetItemValue = selectItemMap.get(input);

  if (targetItemValue) {
    if (targetItemValue.type === "quit") return targetItemValue.type;

    const targetDirectoryName = path.join(
      __dirname,
      `../lib/${selectItemMap.get(input)?.dirName}`
    );
    const destDirectoryName = path.join(process.cwd(), destDirName);

    await fse.copy(targetDirectoryName, destDirectoryName);
    return targetItemValue.type;
  }
};

const createPrompt = async (
  selectItemMap: SelectItemMap,
  options: PromptOptions = defaultOptions
) => {
  const { questionMessage, defaultDestDirName } = options;
  let destDirName = defaultDestDirName;

  term.cyan(
    "생성할 프로젝트명을 입력하세요(default : my-app, 현재위치: . ) > "
  );
  const input = await term.inputField({}).promise;
  console.log(input);

  if (input !== undefined) {
    destDirName = input;
  } else if (input === ".") {
    destDirName = ".";
  }

  const selectItemValues = selectItemMap.values();
  const descriptions = Array.from(selectItemValues).map(
    (value) => value.description
  );

  term.cyan(questionMessage);
  term.singleColumnMenu(
    descriptions,
    {
      style: term.green,
      selectedStyle: term.bold.black.bgWhite,
    },
    (error, response) => {
      if (error) {
        console.error(error);
        process.exit(0);
      }

      const output = inputHandler(
        selectItemMap,
        response.selectedIndex,
        destDirName
      );

      output
        .then((res) => {
          if (res === "boiler-plate") term.cyan("\n생성되었습니다!\n");
          if (res === "quit") term.red("\n종료되었습니다!\n");
          if (!res) term.white("아무일도 일어나지않았습니다!\n");
          process.exit(0);
        })
        .catch((e) => {
          console.error(e);
          process.exit(0);
        });
    }
  );
};

export default createPrompt;
