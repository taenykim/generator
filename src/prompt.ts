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
  successInput: ["tw", "jw"],
};

const createPrompt = () => {
  return (handler: Function, options = defaultOptions) => {
    const {
      quitCode,
      questionMessage,
      successMessage,
      requestionMessage,
      quitMessage,
      successInput,
    } = options;

    rl.question(questionMessage, (input: string) => {
      if (input === quitCode) {
        rl.close();
        console.log(quitMessage);
        process.exit(0);
      }

      if (successInput.includes(input)) {
        const output = handler(input);
        console.log(successMessage);

        output.then(() => {
          rl.close();
          process.exit(0);
        });
      } else {
        const prompt = createPrompt();
        const newOptions = { ...options, questionMessage: requestionMessage };

        prompt(handler, newOptions);
        rl.close;
      }
    });
  };
};

module.exports = createPrompt;
