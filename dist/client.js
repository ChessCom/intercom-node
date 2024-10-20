"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var lodash_1 = require("lodash");
var article_1 = __importDefault(require("./article"));
var admin_1 = __importDefault(require("./admin"));
var company_1 = __importDefault(require("./company"));
var contact_1 = __importDefault(require("./contact"));
var conversation_1 = __importDefault(require("./conversation"));
var count_1 = __importDefault(require("./count"));
var dataAttribute_1 = __importDefault(require("./dataAttribute"));
var dataExport_1 = __importDefault(require("./dataExport"));
var event_1 = __importDefault(require("./event"));
var helpCenter_1 = __importDefault(require("./helpCenter"));
var message_1 = __importDefault(require("./message"));
var note_1 = __importDefault(require("./note"));
var segment_1 = __importDefault(require("./segment"));
var subscription_1 = __importDefault(require("./subscription"));
var team_1 = __importDefault(require("./team"));
var tag_1 = __importDefault(require("./tag"));
var visitor_1 = __importDefault(require("./visitor"));
var phoneCallRedirect_1 = __importDefault(require("./phoneCallRedirect"));
var packageJson = __importStar(require("../package.json"));
var badResponse_error_1 = require("./errors/badResponse.error");
var Client = /** @class */ (function () {
    function Client(args) {
        var _a = __read(Client.getAuthDetails(args), 2), usernamePart = _a[0], passwordPart = _a[1];
        this.usernamePart = usernamePart;
        this.passwordPart = passwordPart;
        if (!this.usernamePart || this.passwordPart === undefined) {
            throw new Error('Could not construct a client with those parameters');
        }
        this.admins = new admin_1.default(this);
        this.articles = new article_1.default(this);
        this.companies = new company_1.default(this);
        this.contacts = new contact_1.default(this);
        this.conversations = new conversation_1.default(this);
        this.counts = new count_1.default(this);
        this.dataAttributes = new dataAttribute_1.default(this);
        this.dataExport = new dataExport_1.default(this);
        this.events = new event_1.default(this);
        this.helpCenter = new helpCenter_1.default(this);
        this.messages = new message_1.default(this);
        this.notes = new note_1.default(this);
        this.segments = new segment_1.default(this);
        this.subscriptions = new subscription_1.default(this);
        this.tags = new tag_1.default(this);
        this.teams = new team_1.default(this);
        this.visitors = new visitor_1.default(this);
        this.phoneCallRedirect = new phoneCallRedirect_1.default(this);
        this.requestOpts = {
            baseURL: 'https://api.intercom.io',
        };
        this.propertiesToOmitInRequestOpts = ['headers.common.Accept'];
        this.axiosInstance = this.initiateAxiosInstance();
    }
    Client.prototype.initiateAxiosInstance = function () {
        var defaultHeaders = {
            'User-Agent': "intercom-node-client/".concat(packageJson.version),
            Accept: 'application/json',
        };
        var axiosInstance = axios_1.default.create({
            auth: {
                username: this.usernamePart,
                password: this.passwordPart,
            },
            baseURL: this.requestOpts.baseURL,
        });
        axiosInstance.defaults.headers.common = (0, lodash_1.merge)(axiosInstance.defaults.headers.common, defaultHeaders);
        return axiosInstance;
    };
    Client.prototype.useRequestOpts = function (opts) {
        var filteredOpts = this.filterUnwantedProperties(opts);
        this.requestOpts = (0, lodash_1.merge)(this.requestOpts, filteredOpts);
        this.updateAxiosInstanceDefaults();
        return this;
    };
    Client.prototype.updateAxiosInstanceDefaults = function () {
        this.axiosInstance.defaults = (0, lodash_1.merge)(this.axiosInstance.defaults, this.requestOpts);
    };
    Client.prototype.filterUnwantedProperties = function (opts) {
        return (0, lodash_1.omit)(opts, this.propertiesToOmitInRequestOpts);
    };
    Client.prototype.ping = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.get('/admins')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_1 = _a.sent();
                        error = err_1.response
                            ? this.checkOnErrorInResponse(err_1.response)
                            : err_1;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.put = function (_a) {
        var url = _a.url, data = _a.data;
        return __awaiter(this, void 0, void 0, function () {
            var response, err_2, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.put(url, data)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_2 = _b.sent();
                        error = err_2.response
                            ? this.checkOnErrorInResponse(err_2.response)
                            : err_2;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.post = function (_a) {
        var url = _a.url, data = _a.data;
        return __awaiter(this, void 0, void 0, function () {
            var response, err_3, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.post(url, data)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_3 = _b.sent();
                        error = err_3.response
                            ? this.checkOnErrorInResponse(err_3.response)
                            : err_3;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.get = function (_a) {
        var url = _a.url, data = _a.data, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var response, err_4, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.get(url, {
                                params: params,
                                data: data,
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_4 = _b.sent();
                        error = err_4.response
                            ? this.checkOnErrorInResponse(err_4.response)
                            : err_4;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.nextPage = function (paginationObject) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_5, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.get(paginationObject.next, { baseURL: undefined })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_5 = _a.sent();
                        error = err_5.response
                            ? this.checkOnErrorInResponse(err_5.response)
                            : err_5;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.delete = function (_a) {
        var url = _a.url, data = _a.data, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var response, err_6, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.delete(url, {
                                data: data,
                                params: params,
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_6 = _b.sent();
                        error = err_6.response
                            ? this.checkOnErrorInResponse(err_6.response)
                            : err_6;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.checkOnErrorInResponse = function (_a) {
        var data = _a.data, headers = _a.headers, status = _a.status;
        if (data.type !== 'error.list') {
            return undefined;
        }
        var message = Array.isArray(data.errors) && data.errors[0].message
            ? data.errors[0].message
            : null;
        return new badResponse_error_1.BadResponseError(message || 'Response error', data, headers, status);
    };
    Client.getAuthDetails = function (args) {
        if (args.apiKeyAuth) {
            return [args.apiKeyAuth.appId, args.apiKeyAuth.appApiKey];
        }
        if (args.tokenAuth) {
            return [args.tokenAuth.token, ''];
        }
        if (args.usernameAuth) {
            return [args.usernameAuth.username, args.usernameAuth.password];
        }
        return [undefined, undefined];
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=client.js.map