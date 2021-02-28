const fse = require("fs-extra");
const path = require("path");
const _createPrompt = require("./prompt");

const inputHandler = async (input: "tw" | "jw") => {
  const directoryName = {
    tw: "ts-webpack",
    jw: "js-webpack",
  };
  const targetDirectoryName = path.join(
    __dirname,
    `../lib/${directoryName[input]}`
  );
  const destDirectoryName = path.join(process.cwd(), "temp");

  await fse.copy(targetDirectoryName, destDirectoryName);
};

const run = () => {
  const prompt = _createPrompt();

  const options = {
    quitCode: "q",
    successInput: ["tw", "jw"],
    questionMessage: "1. tw(ts웹팩), 2. jw(js웹팩), 3 q(종료)>",
    successMessage: "성공!",
    requestionMessage:
      "다시입력하세용 1. tw(ts웹팩), 2. jw(js웹팩), 3 q(종료) >",
    quitMessage: "종료!",
  };

  prompt(inputHandler, options);
};

module.exports = () => {
  return {
    run,
  };
};
