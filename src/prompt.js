const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const defaultOptions = {
  quitCode: "q",
  questionMessage: "question >",
  successMessage: "success!",
  requestionMessage: "re-question >",
  quitMessage: "quit!",
};

const prompt = () => {
  return (handler, options = defaultOptions) => {
    const {
      quitCode,
      questionMessage,
      successMessage,
      requestionMessage,
      quitMessage,
    } = options;

    rl.question(questionMessage, (input) => {
      if (input === quitCode) {
        rl.close();
        console.log(quitMessage);
        process.exit(0);
      }

      if (input === "suc") {
        const output = handler(input);
        console.log(successMessage);

        output.then(() => {
          rl.close();
          process.exit(0);
        });
      } else {
        const pt = prompt();
        const newOptions = { ...options, questionMessage: requestionMessage };

        pt(handler, newOptions);
        rl.close;
      }
    });
  };
};

module.exports = prompt;
