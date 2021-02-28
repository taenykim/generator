"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var defaultOptions = {
    quitCode: "q",
    questionMessage: "question >",
    successMessage: "success!",
    requestionMessage: "re-question >",
    quitMessage: "quit!",
    successInput: ["tw", "jw"],
};
var createPrompt = function () {
    return function (handler, options) {
        if (options === void 0) { options = defaultOptions; }
        var quitCode = options.quitCode, questionMessage = options.questionMessage, successMessage = options.successMessage, requestionMessage = options.requestionMessage, quitMessage = options.quitMessage, successInput = options.successInput;
        rl.question(questionMessage, function (input) {
            if (input === quitCode) {
                rl.close();
                console.log(quitMessage);
                process.exit(0);
            }
            if (successInput.includes(input)) {
                var output = handler(input);
                console.log(successMessage);
                output.then(function () {
                    rl.close();
                    process.exit(0);
                });
            }
            else {
                var prompt_1 = createPrompt();
                var newOptions = __assign(__assign({}, options), { questionMessage: requestionMessage });
                prompt_1(handler, newOptions);
                rl.close;
            }
        });
    };
};
module.exports = createPrompt;
