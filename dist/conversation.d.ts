import Client from './client';
import { StringifiedTimestamp, GenericSearchFilters, PaginatedBase } from './common/common.types';
import { ContactType, ConversationObject, ConversationObjectWithoutParts } from './conversation/conversation.types';
import { MessageObject } from './message/message.types';
export default class Conversation {
    private readonly client;
    readonly baseUrl = "conversations";
    constructor(client: Client);
    create({ userId, type, body }: CreateConversationData): Promise<MessageObject>;
    find({ id, inPlainText }: RetrieveConversationData): Promise<ConversationObject>;
    update({ id, markRead, customAttributes }: UpdateConversationData): Promise<ConversationObject>;
    replyByIdAsUser({ id, body, intercomUserId, userId, email, attachmentUrls, attachmentFiles, }: ReplyByIdAsUserData): Promise<ConversationObject>;
    replyByIdAsAdmin({ id, adminId, messageType, body, attachmentUrls, }: ReplyByIdAsAdminData): Promise<ConversationObject>;
    replyByLastAsUser({ body, intercomUserId, userId, email, attachmentUrls, }: ReplyByLastAsUserData): Promise<ConversationObject>;
    replyByLastAsAdmin({ adminId, messageType, body, attachmentUrls, }: ReplyByLastAsAdminData): Promise<ConversationObject>;
    assign({ id, type, adminId, assigneeId, body, withRunningAssignmentRules, }: AssignConversationData): Promise<ConversationObject>;
    snooze({ id, adminId, snoozedUntil }: SnoozeConversationData): Promise<ConversationObject>;
    close({ id, adminId, body }: CloseConversationData): Promise<ConversationObject>;
    open({ id, adminId }: OpenConversationData): Promise<ConversationObject>;
    attachContactAsAdmin({ id, adminId, customer, }: AttachContactToConversationAsAdminData): Promise<AttachContactToConversationResponse>;
    attachContactAsContact({ id, userId, intercomUserId, email, customer, }: AttachContactToConversationAsContactData): Promise<AttachContactToConversationResponse>;
    detachContactAsAdmin({ conversationId, contactId, adminId, }: DetachContactFromConversationData): Promise<ConversationObject>;
    search({ data }: SearchConversationRequest): Promise<SearchConversationResponse>;
    list({ startingAfter: starting_after, perPage: per_page, }: ListConversationData): Promise<ListConversationResponse>;
    redactConversationPart({ conversationId, conversationPartId, sourceId, type, }: RedactConversationPartData): Promise<Conversation>;
}
interface CreateConversationData {
    userId: string;
    type?: ContactType;
    body: string;
}
interface RetrieveConversationData {
    id: string;
    inPlainText?: boolean;
}
interface UpdateConversationData {
    id: string;
    markRead?: boolean;
    customAttributes?: object;
}
export declare enum ReplyToConversationMessageType {
    COMMENT = "comment",
    NOTE = "note"
}
export declare enum ReplyToConversationUserType {
    ADMIN = "admin",
    USER = "user"
}
interface Attachment {
    content_type: string;
    name: string;
    data: string;
}
interface ReplyByIdAsUserData {
    id: string;
    body: string;
    intercomUserId?: string;
    userId?: string;
    email?: string;
    attachmentUrls?: Array<string>;
    attachmentFiles?: Array<Attachment>;
}
interface ReplyByIdAsAdminData {
    id: string;
    adminId: string;
    messageType: ReplyToConversationMessageType;
    body: string;
    attachmentUrls?: Array<string>;
}
type ReplyByLastAsUserData = Omit<ReplyByIdAsUserData, 'id'>;
type ReplyByLastAsAdminData = Omit<ReplyByIdAsAdminData, 'id'>;
export declare enum AssignToConversationMessageType {
    ASSIGNMENT = "assignment"
}
export declare enum AssignToConversationUserType {
    ADMIN = "admin",
    TEAM = "team"
}
interface AssignConversationData {
    id: string;
    type?: AssignToConversationUserType;
    adminId?: string;
    assigneeId?: string | 0;
    body?: string;
    withRunningAssignmentRules?: boolean;
}
export declare enum SnoozeConversationMessageType {
    SNOOZED = "snoozed"
}
interface SnoozeConversationData {
    id: string;
    adminId: string;
    snoozedUntil: StringifiedTimestamp;
}
export declare enum CloseConversationMessageType {
    CLOSED = "close"
}
export declare enum CloseConversationType {
    ADMIN = "admin"
}
interface CloseConversationData {
    id: string;
    adminId: string;
    body?: string;
}
export declare enum OpenConversationMessageType {
    OPEN = "open"
}
interface OpenConversationData {
    id: string;
    adminId: string;
}
interface NormalizedCustomerObject {
    intercomUserId?: string;
    userId?: string;
    email?: string;
}
interface AttachContactToConversationAsAdminData {
    id: string;
    adminId: string;
    customer: NormalizedCustomerObject;
}
interface AttachContactToConversationAsContactData extends NormalizedCustomerObject {
    id: string;
    customer: NormalizedCustomerObject;
}
interface AttachContactToConversationResponse {
    customers: Array<{
        id: string;
        type: ContactType;
    }>;
}
interface DetachContactFromConversationData {
    conversationId: string;
    contactId: string;
    adminId: string;
}
export declare enum SearchConversationOrderBy {
    ASC = "ascending",
    DESC = "descending"
}
interface SearchConversationPagination {
    pagination: {
        per_page: number;
        starting_after?: string;
    };
}
interface SearchConversationOrder {
    sort: {
        field: string;
        order: SearchConversationOrderBy;
    };
}
interface SearchConversationRequest {
    data: GenericSearchFilters & Partial<SearchConversationPagination> & Partial<SearchConversationOrder>;
}
type SearchConversationResponse = PaginatedBase & {
    conversations: ConversationObject[];
};
export declare enum SortBy {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    WaitingSince = "waiting_since"
}
interface ListConversationData {
    startingAfter?: string;
    perPage?: number;
}
type ListConversationResponse = PaginatedBase & {
    conversations: ConversationObjectWithoutParts[];
};
export declare enum RedactConversationPartType {
    CONVERSATION_PART = "conversation_part",
    SOURCE = "source"
}
interface RedactConversationPartData {
    type: RedactConversationPartType;
    conversationId: string;
    conversationPartId?: string;
    sourceId?: string;
}
export {};
//# sourceMappingURL=conversation.d.ts.map