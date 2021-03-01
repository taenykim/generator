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
  options: PromptOptions
) => {
  const { defaultDestDirName } = options;

  const targetItemValue = selectItemMap.get(input);

  if (targetItemValue) {
    if (targetItemValue.type === "quit") return targetItemValue.type;

    const targetDirectoryName = path.join(
      __dirname,
      `../lib/${selectItemMap.get(input)?.dirName}`
    );
    const destDirectoryName = path.join(process.cwd(), defaultDestDirName);

    await fse.copy(targetDirectoryName, destDirectoryName);
    return targetItemValue.type;
  }
};

const createPrompt = async (
  selectItemMap: SelectItemMap,
  options: PromptOptions = defaultOptions
) => {
  const { questionMessage } = options;
  term.cyan(questionMessage);

  const selectItemValues = selectItemMap.values();
  const descriptions = Array.from(selectItemValues).map(
    (value) => value.description
  );

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
        options
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
