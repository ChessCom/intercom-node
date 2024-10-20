import { Client } from '.';
import { TagObject } from './tag/tag.types';
export default class Tag {
    private readonly client;
    private tagsBaseUrl;
    constructor(client: Client);
    create(data: CreateTagData): Promise<TagObject>;
    update(data: UpdateTagData): Promise<TagObject>;
    delete({ id }: DeleteTagData): Promise<TagObject>;
    tagContact({ contactId, tagId }: TagContactData): Promise<TagObject>;
    tagConversation({ conversationId, tagId, adminId: admin_id, }: TagConversationData): Promise<TagObject>;
    tagCompanies({ tagName: name, companiesIds }: TagCompaniesData): Promise<TagObject>;
    untagContact({ contactId, tagId }: UntagContactData): Promise<TagObject>;
    untagConversation({ conversationId, tagId, adminId: admin_id, }: UntagConversationData): Promise<TagObject>;
    untagCompanies({ tagName: name, companiesIds }: UntagCompaniesData): Promise<TagObject>;
    list(): Promise<ListAllTagsResponse>;
}
interface CreateTagData {
    name: string;
}
interface UpdateTagData extends CreateTagData {
    id: string;
}
interface DeleteTagData {
    id: string;
}
interface TagContactData {
    contactId: string;
    tagId: string;
}
interface TagConversationData {
    conversationId: string;
    tagId: string;
    adminId: string;
}
interface TagCompaniesData {
    tagName: string;
    companiesIds: string[];
}
type UntagContactData = TagContactData;
interface UntagConversationData {
    tagId: string;
    conversationId: string;
    adminId: string;
}
type UntagCompaniesData = TagCompaniesData;
interface ListAllTagsResponse {
    type: 'list';
    data: Array<TagObject>;
}
export {};
//# sourceMappingURL=tag.d.ts.map