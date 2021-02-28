"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var terminal_kit_1 = __importDefault(require("terminal-kit"));
var term = terminal_kit_1.default.terminal;
var defaultOptions = {
    items: {},
};
var createPrompt = function () {
    return function (handler, options) {
        if (options === void 0) { options = defaultOptions; }
        var items = options.items;
        term.cyan("생성할 보일러 플레이트를 선택해주세요.\n");
        if (Object.values(items).length > 0) {
            var titles = Object.keys(items);
            term("\n").singleColumnMenu(titles, {
                style: term.green,
                selectedStyle: term.bold.black.bgWhite,
            }, function (error, response) {
                var output = handler(response.selectedText);
                output.then(function () {
                    process.exit(0);
                });
            });
        }
    };
};
module.exports = createPrompt;
