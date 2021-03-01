"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var prompt_1 = __importDefault(require("./prompt"));
var run = function () {
    var selectItemMap = new Map(data_1.selectItems);
    var options = {
        defaultDestDirName: data_1.defaultDestDirName,
        QUESTION_MESSAGE1: data_1.QUESTION_MESSAGE1,
        QUESTION_MESSAGE2: data_1.QUESTION_MESSAGE2,
    };
    prompt_1.default(selectItemMap, options);
};
module.exports = function () {
    return {
        run: run,
    };
};
