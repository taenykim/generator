const fse = require("fs-extra");
const path = require("path");
const prompt = require("./prompt");

const inputHandler = async () => {
  const targetDirectoryName = path.join(__dirname, "../lib");
  const destDirectoryName = path.join(process.cwd(), "temp");

  await fse.copy(targetDirectoryName, destDirectoryName);
};

const run = () => {
  const pt = prompt();

  const options = {
    quitCode: "a",
    questionMessage: "suc을 입력하세요(종료는 a) >",
    successMessage: "성공!",
    requestionMessage: "suc을 입력하세요!!!!!(종료는 a) >",
    quitMessage: "종료!",
  };

  pt(inputHandler, options);
};

module.exports = () => {
  return {
    run,
  };
};
