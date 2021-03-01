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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var fs_1 = __importDefault(require("fs"));
var terminal_kit_1 = __importDefault(require("terminal-kit"));
var term = terminal_kit_1.default.terminal;
var fsp = fs_1.default.promises;
var defaultOptions = {
    DEFAULT_DEST_DIR_NAME: "my-app",
    QUESTION_MESSAGE1: "생성할 프로젝트명을 입력하세요(default : my-app, 현재위치: . ) > ",
    QUESTION_MESSAGE2: "생성할 보일러 플레이트를 선택해주세요.\n",
    SUCCESS_MESSAGE: "\n생성되었습니다!\n",
    FAILURE_MESSAGE: "\n아무일도 일어나지 않았습니다!\n",
    QUIT_MESSAGE: "\n종료되었습니다!\n",
};
var getDestDirName = function (defaultDestDirName) { return __awaiter(void 0, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, term.inputField({}).promise];
            case 1:
                input = _a.sent();
                if (input === undefined || input === "")
                    return [2 /*return*/, defaultDestDirName];
                else if (input === ".")
                    return [2 /*return*/, "."];
                else
                    return [2 /*return*/, input];
                return [2 /*return*/];
        }
    });
}); };
var getSelectItemType = function (descriptions) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, term.singleColumnMenu(descriptions, {
                    style: term.green,
                    selectedStyle: term.bold.black.bgWhite,
                }).promise];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createDirectory = function (selectItemMap, input, destDirName) { return __awaiter(void 0, void 0, void 0, function () {
    var targetItemValue, targetDirName, targetDirPath, destDirPath, isExistDestDirPath, datas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                targetItemValue = selectItemMap.get(input);
                if (targetItemValue === undefined)
                    return [2 /*return*/];
                if (targetItemValue.type === "quit")
                    return [2 /*return*/, targetItemValue.type];
                targetDirName = "../lib/" + targetItemValue.dirName;
                targetDirPath = path_1.default.join(__dirname, targetDirName);
                destDirPath = path_1.default.join(process.cwd(), destDirName);
                isExistDestDirPath = fs_1.default.existsSync(destDirPath);
                if (isExistDestDirPath)
                    return [2 /*return*/, "exist-dest"];
                if (!(destDirName === ".")) return [3 /*break*/, 2];
                return [4 /*yield*/, fsp.readdir(destDirPath)];
            case 1:
                datas = _a.sent();
                if (datas.length > 0)
                    return [2 /*return*/, "exist-target"];
                _a.label = 2;
            case 2: return [4 /*yield*/, fs_extra_1.default.copy(targetDirPath, destDirPath)];
            case 3:
                _a.sent();
                return [2 /*return*/, targetItemValue.type];
        }
    });
}); };
var createPrompt = function (selectItemMap, options) {
    if (options === void 0) { options = defaultOptions; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, DEFAULT_DEST_DIR_NAME, QUESTION_MESSAGE1, QUESTION_MESSAGE2, SUCCESS_MESSAGE, FAILURE_MESSAGE, QUIT_MESSAGE, destDirName, selectItemValues, descriptions, selectedItem, selectedItemType;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = __assign(__assign({}, defaultOptions), options), DEFAULT_DEST_DIR_NAME = _a.DEFAULT_DEST_DIR_NAME, QUESTION_MESSAGE1 = _a.QUESTION_MESSAGE1, QUESTION_MESSAGE2 = _a.QUESTION_MESSAGE2, SUCCESS_MESSAGE = _a.SUCCESS_MESSAGE, FAILURE_MESSAGE = _a.FAILURE_MESSAGE, QUIT_MESSAGE = _a.QUIT_MESSAGE;
                    term.cyan(QUESTION_MESSAGE1);
                    return [4 /*yield*/, getDestDirName(DEFAULT_DEST_DIR_NAME)];
                case 1:
                    destDirName = _b.sent();
                    selectItemValues = selectItemMap.values();
                    descriptions = Array.from(selectItemValues).map(function (value) { return value.description; });
                    term.cyan(QUESTION_MESSAGE2);
                    return [4 /*yield*/, getSelectItemType(descriptions)];
                case 2:
                    selectedItem = _b.sent();
                    return [4 /*yield*/, createDirectory(selectItemMap, selectedItem.selectedIndex, destDirName)];
                case 3:
                    selectedItemType = _b.sent();
                    if (selectedItemType === "exist-dest") {
                        term.red("디렉토리가 존재합니다.\n");
                        createPrompt(selectItemMap, options);
                    }
                    if (selectedItemType === "exist-target") {
                        term.red("현재 디렉토리에 파일들이 존재합니다\n");
                        createPrompt(selectItemMap, options);
                    }
                    if (selectedItemType === "boiler-plate") {
                        term.cyan(SUCCESS_MESSAGE);
                        process.exit(0);
                    }
                    if (selectedItemType === "quit") {
                        term.red(FAILURE_MESSAGE);
                        process.exit(0);
                    }
                    if (!selectedItemType) {
                        term.white(QUIT_MESSAGE);
                        process.exit(0);
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.default = createPrompt;
