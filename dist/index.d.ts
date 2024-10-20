export declare class IdentityVerification {
    static userHash({ secretKey, identifier, }: {
        secretKey?: string;
        identifier?: string;
    }): string;
}
export { default as Client } from './client';
export * from './admin/admin.types';
export * from './article/article.types';
export * from './common/common.types';
export * from './company/company.types';
export * from './contact/contact.types';
export * from './conversation/conversation.types';
export * from './count/count.types';
export * from './dataAttribute/dataAttribute.types';
export * from './event/event.types';
export * from './helpCenter/helpCenter.types';
export * from './message/message.types';
export * from './note/note.types';
export * from './segment/segment.types';
export * from './subscription/subscription.types';
export * from './tag/tag.types';
export * from './team/team.types';
export * from './visitor/visitor.types';
export { SearchContactOrderBy } from './contact';
export { ReplyToConversationMessageType, ReplyToConversationUserType, AssignToConversationMessageType, AssignToConversationUserType, SnoozeConversationMessageType, CloseConversationMessageType, CloseConversationType, OpenConversationMessageType, SearchConversationOrderBy, SortBy, RedactConversationPartType, } from './conversation';
export { RecipientType } from './message';
export { ContactObjectForMerge, MergeVisitorToContactData, VisitorObjectForMerge, IdentificationForVisitor, } from './visitor';
//# sourceMappingURL=index.d.ts.map