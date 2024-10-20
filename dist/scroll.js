"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scroll = /** @class */ (function () {
    function Scroll(client, scrollUrlDataType, scrollParam) {
        this.client = client;
        this.scrollUrlDataType = scrollUrlDataType;
        this.scrollParam = scrollParam;
        this.client = client;
        this.scrollParam = scrollParam;
    }
    // eslint-disable-next-line require-await
    Scroll.prototype.each = function (params) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.scrollParam = (_a = params.scrollParam) !== null && _a !== void 0 ? _a : undefined;
                return [2 /*return*/, this.eachInternal()];
            });
        });
    };
    Scroll.prototype.eachInternal = function (storedData) {
        if (storedData === void 0) { storedData = []; }
        return __awaiter(this, void 0, void 0, function () {
            var response, dataFromResponse, combinedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get({
                            url: this.scrollUrl(),
                        })];
                    case 1:
                        response = _a.sent();
                        dataFromResponse = response.data;
                        combinedData = __spreadArray(__spreadArray([], __read(dataFromResponse), false), __read(storedData), false);
                        if (dataFromResponse.length > 0) {
                            this.scrollParam = response.scroll_param;
                            return [2 /*return*/, this.eachInternal(combinedData)];
                        }
                        return [2 /*return*/, combinedData];
                }
            });
        });
    };
    Scroll.prototype.next = function (_a) {
        var scrollParam = _a.scrollParam;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.scrollParam = scrollParam;
                        return [4 /*yield*/, this.client.get({
                                url: this.scrollUrl(),
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Scroll.prototype.scrollUrl = function () {
        var baseScrollUrl = "/".concat(this.scrollUrlDataType, "/scroll");
        return this.scrollParam && this.scrollParam.length > 0
            ? "".concat(baseScrollUrl, "?scroll_param=").concat(this.scrollParam)
            : baseScrollUrl;
    };
    return Scroll;
}());
exports.default = Scroll;
//# sourceMappingURL=scroll.js.map