"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var prompt_1 = __importDefault(require("./prompt"));
var DEFAULT_DEST_DIR_NAME = "my-app";
var QUESTION_MESSAGE1 = "ㅋ";
var QUESTION_MESSAGE2 = "생성할 보일러 플레이트를 선택해주세요.\n";
var run = function () {
    var selectItemMap = new Map(data_1.selectItems);
    var options = {
        DEFAULT_DEST_DIR_NAME: DEFAULT_DEST_DIR_NAME,
        QUESTION_MESSAGE1: QUESTION_MESSAGE1,
        QUESTION_MESSAGE2: QUESTION_MESSAGE2,
    };
    prompt_1.default(selectItemMap, options);
};
module.exports = function () {
    return {
        run: run,
    };
};
