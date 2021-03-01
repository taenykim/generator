"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var prompt_1 = __importDefault(require("./prompt"));
var DEFAULT_DEST_DIR_NAME = "my-app";
var QUESTION_MESSAGE1 = "생성할 프로젝트명을 입력하세요(default : my-app, 현재위치: . ) > ";
var QUESTION_MESSAGE2 = "\n\n생성할 보일러 플레이트를 선택해주세요.\n";
// const SUCCESS_MESSAGE = "\n생성되었습니다!\n";
// const FAILURE_MESSAGE = "\n아무일도 일어나지 않았습니다!\n";
// const QUIT_MESSAGE = "\n종료되었습니다!\n";
// const EXIST_DEST_ERROR_MESSAGE = '\n디렉토리가 존재합니다.\n"';
// const EXIST_TARGET_ERROR_MESSAGE = "\n현재 디렉토리에 파일들이 존재합니다\n";
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
