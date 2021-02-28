const fse = require("fs-extra");
const path = require("path");
const _createPrompt = require("./prompt-term");

interface ItemValue {
  dirName?: string;
  description: string;
}

export interface Items {
  [title: string]: ItemValue;
}

const items: Items = {
  "ts-webpack": {
    dirName: "ts-webpack",
    description: "TypeScript + Webpack",
  },
  "js-webpack": {
    dirName: "js-webpack",
    description: "JavaScript + Webpack",
  },
  quit: {
    description: "quit generator",
  },
};

const dest = "temp";

const inputHandler = async (input: keyof Items) => {
  if (input !== "quit") {
    const targetDirectoryName = path.join(
      __dirname,
      `../lib/${items[input].dirName}`
    );
    const destDirectoryName = path.join(process.cwd(), dest);

    await fse.copy(targetDirectoryName, destDirectoryName);
  }
  process.exit(0);
};

const run = () => {
  const prompt = _createPrompt();

  const options = {
    items,
  };

  prompt(inputHandler, options);
};

module.exports = () => {
  return {
    run,
  };
};
