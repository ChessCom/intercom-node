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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipientType = exports.RedactConversationPartType = exports.SortBy = exports.SearchConversationOrderBy = exports.OpenConversationMessageType = exports.CloseConversationType = exports.CloseConversationMessageType = exports.SnoozeConversationMessageType = exports.AssignToConversationUserType = exports.AssignToConversationMessageType = exports.ReplyToConversationUserType = exports.ReplyToConversationMessageType = exports.SearchContactOrderBy = exports.Client = exports.IdentityVerification = void 0;
var crypto_1 = __importDefault(require("crypto"));
var IdentityVerification = /** @class */ (function () {
    function IdentityVerification() {
    }
    IdentityVerification.userHash = function (_a) {
        var secretKey = _a.secretKey, identifier = _a.identifier;
        if (!secretKey) {
            throw new Error('secretKey must be provided');
        }
        if (!identifier) {
            throw new Error('identifier must be provided');
        }
        return crypto_1.default
            .createHmac('sha256', secretKey)
            .update(identifier)
            .digest('hex');
    };
    return IdentityVerification;
}());
exports.IdentityVerification = IdentityVerification;
var client_1 = require("./client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return __importDefault(client_1).default; } });
// Export model types
__exportStar(require("./admin/admin.types"), exports);
__exportStar(require("./article/article.types"), exports);
__exportStar(require("./common/common.types"), exports);
__exportStar(require("./company/company.types"), exports);
__exportStar(require("./contact/contact.types"), exports);
__exportStar(require("./conversation/conversation.types"), exports);
__exportStar(require("./count/count.types"), exports);
__exportStar(require("./dataAttribute/dataAttribute.types"), exports);
__exportStar(require("./event/event.types"), exports);
__exportStar(require("./helpCenter/helpCenter.types"), exports);
__exportStar(require("./message/message.types"), exports);
__exportStar(require("./note/note.types"), exports);
__exportStar(require("./segment/segment.types"), exports);
__exportStar(require("./subscription/subscription.types"), exports);
__exportStar(require("./tag/tag.types"), exports);
__exportStar(require("./team/team.types"), exports);
__exportStar(require("./visitor/visitor.types"), exports);
// Export enums needed for requests
var contact_1 = require("./contact");
Object.defineProperty(exports, "SearchContactOrderBy", { enumerable: true, get: function () { return contact_1.SearchContactOrderBy; } });
var conversation_1 = require("./conversation");
Object.defineProperty(exports, "ReplyToConversationMessageType", { enumerable: true, get: function () { return conversation_1.ReplyToConversationMessageType; } });
Object.defineProperty(exports, "ReplyToConversationUserType", { enumerable: true, get: function () { return conversation_1.ReplyToConversationUserType; } });
Object.defineProperty(exports, "AssignToConversationMessageType", { enumerable: true, get: function () { return conversation_1.AssignToConversationMessageType; } });
Object.defineProperty(exports, "AssignToConversationUserType", { enumerable: true, get: function () { return conversation_1.AssignToConversationUserType; } });
Object.defineProperty(exports, "SnoozeConversationMessageType", { enumerable: true, get: function () { return conversation_1.SnoozeConversationMessageType; } });
Object.defineProperty(exports, "CloseConversationMessageType", { enumerable: true, get: function () { return conversation_1.CloseConversationMessageType; } });
Object.defineProperty(exports, "CloseConversationType", { enumerable: true, get: function () { return conversation_1.CloseConversationType; } });
Object.defineProperty(exports, "OpenConversationMessageType", { enumerable: true, get: function () { return conversation_1.OpenConversationMessageType; } });
Object.defineProperty(exports, "SearchConversationOrderBy", { enumerable: true, get: function () { return conversation_1.SearchConversationOrderBy; } });
Object.defineProperty(exports, "SortBy", { enumerable: true, get: function () { return conversation_1.SortBy; } });
Object.defineProperty(exports, "RedactConversationPartType", { enumerable: true, get: function () { return conversation_1.RedactConversationPartType; } });
var message_1 = require("./message");
Object.defineProperty(exports, "RecipientType", { enumerable: true, get: function () { return message_1.RecipientType; } });
//# sourceMappingURL=index.js.map