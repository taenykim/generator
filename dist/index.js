"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var prompt_1 = __importDefault(require("./prompt"));
var DEFAULT_DEST_DIR_NAME = "temp";
var QUESTION_MESSAGE = "생성할 보일러 플레이트를 선택해주세요.\n";
var run = function () {
    var selectItemMap = new Map(data_1.selectItems);
    var options = {
        defaultDestDirName: DEFAULT_DEST_DIR_NAME,
        questionMessage: QUESTION_MESSAGE,
    };
    prompt_1.default(selectItemMap, options);
};
module.exports = function () {
    return {
        run: run,
    };
};
