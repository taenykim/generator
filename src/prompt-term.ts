import { Items } from "index";
import terminalKit from "terminal-kit";

const term = terminalKit.terminal;

interface Options {
  items: Items | {};
}

const defaultOptions = {
  items: {},
};

const createPrompt = () => {
  return (handler: Function, options: Options = defaultOptions) => {
    const { items } = options;

    term.cyan("생성할 보일러 플레이트를 선택해주세요.\n");

    if (Object.values(items).length > 0) {
      const titles = Object.keys(items);
      term("\n").singleColumnMenu(
        titles,
        {
          style: term.green,
          selectedStyle: term.bold.black.bgWhite,
        },
        (error, response) => {
          const output = handler(response.selectedText);

          output.then(() => {
            process.exit(0);
          });
        }
      );
    }
  };
};

module.exports = createPrompt;
