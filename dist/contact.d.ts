import { Client } from '.';
import { ContactObject } from './contact/contact.types';
import { GenericDeletedResponse, GenericSearchFilters, Paginated } from './common/common.types';
import { ListCompaniesResponse } from './company/company.types';
import { SegmentObject } from './segment/segment.types';
import { TagObject } from './tag/tag.types';
import { SubscriptionObject } from './subscription/subscription.types';
export default class Contact {
    private readonly client;
    readonly baseUrl = "contacts";
    constructor(client: Client);
    createUser({ externalId, email, phone, name, avatar, signedUpAt, lastSeenAt, ownerId, isUnsubscribedFromEmails, customAttributes, }: CreateUserData): Promise<ContactObject>;
    createLead(data?: CreateLeadData): Promise<ContactObject>;
    find({ id }: RetrieveContactData): Promise<ContactObject>;
    update({ id, role, externalId, email, phone, name, avatar, signedUpAt, lastSeenAt, ownerId, isUnsubscribedFromMails, customAttributes, }: UpdateContactData): Promise<ContactObject>;
    mergeLeadInUser({ leadId, userId }: MergeLeadInUserContactData): Promise<ContactObject>;
    search({ data }: SearchContactRequest): Promise<SearchContactResponse>;
    list({ perPage, startingAfter }: ListAllContactsData): Promise<ListContactsResponse>;
    delete({ id }: DeleteContactData): Promise<DeleteContactResponse>;
    archive({ id }: ArchiveContactData): Promise<ArchiveContactResponse>;
    unarchive({ id }: UnarchiveContactData): Promise<ArchiveContactResponse>;
    listAttachedCompanies({ id, perPage, page }: ListAttachedCompaniesData): Promise<ListCompaniesResponse>;
    listAttachedTags({ id }: RetrieveContactData): Promise<ListAttachedTagsResponse>;
    listAttachedSegments({ id }: RetrieveContactData): Promise<ListAttachedSegmentsResponse>;
    listAttachedEmailSubscriptions({ id }: RetrieveContactData): Promise<ListAttachedEmailSubscriptionsResponse>;
}
type CreateContactRequest = Pick<ContactObject, 'role'> & Partial<Pick<ContactObject, 'external_id' | 'email' | 'phone' | 'name' | 'avatar' | 'signed_up_at' | 'last_seen_at' | 'owner_id' | 'unsubscribed_from_emails' | 'custom_attributes'>>;
interface CreateUserDataBase {
    phone?: CreateContactRequest['phone'];
    name?: CreateContactRequest['name'];
    email?: CreateContactRequest['email'];
    avatar?: CreateContactRequest['avatar'];
    signedUpAt?: CreateContactRequest['signed_up_at'];
    lastSeenAt?: CreateContactRequest['last_seen_at'];
    ownerId?: CreateContactRequest['owner_id'];
    isUnsubscribedFromEmails?: CreateContactRequest['unsubscribed_from_emails'];
    customAttributes?: CreateContactRequest['custom_attributes'];
}
interface CreateUserData extends CreateUserDataBase {
    externalId?: string;
}
type CreateLeadData = CreateUserDataBase;
interface RetrieveContactData {
    id: string;
}
type UpdateContactRequest = Partial<Pick<ContactObject, 'role' | 'external_id' | 'email' | 'phone' | 'name' | 'avatar' | 'signed_up_at' | 'last_seen_at' | 'owner_id' | 'unsubscribed_from_emails' | 'custom_attributes'>>;
type UpdateContactData = {
    id: string;
    role?: UpdateContactRequest['role'];
    externalId?: UpdateContactRequest['external_id'];
    email?: UpdateContactRequest['email'];
    phone?: UpdateContactRequest['phone'];
    name?: UpdateContactRequest['name'];
    avatar?: UpdateContactRequest['avatar'];
    signedUpAt?: UpdateContactRequest['signed_up_at'];
    lastSeenAt?: UpdateContactRequest['last_seen_at'];
    ownerId?: UpdateContactRequest['owner_id'];
    isUnsubscribedFromMails?: UpdateContactRequest['unsubscribed_from_emails'];
    customAttributes?: UpdateContactRequest['custom_attributes'];
};
interface DeleteContactData {
    id: string;
}
type DeleteContactResponse = GenericDeletedResponse<'contact'>;
interface ArchiveContactData {
    id: string;
}
interface ArchiveContactResponse {
    id: string;
    object: ContactObject;
    archived: boolean;
}
type UnarchiveContactData = ArchiveContactData;
interface MergeLeadInUserContactData {
    leadId: string;
    userId: string;
}
export declare enum SearchContactOrderBy {
    ASC = "ascending",
    DESC = "descending"
}
interface SearchContactPagination {
    pagination: {
        per_page: number;
        starting_after?: string;
    };
}
interface SearchContactOrder {
    sort: {
        field: string;
        order: SearchContactOrderBy;
    };
}
interface SearchContactRequest {
    data: GenericSearchFilters & Partial<SearchContactPagination> & Partial<SearchContactOrder>;
}
type SearchContactResponse = Paginated<ContactObject>;
interface ListAllContactsData {
    perPage?: number;
    startingAfter?: string;
}
type ListContactsResponse = Paginated<ContactObject>;
type ListAttachedTagsResponse = {
    type: string;
    tags: Array<TagObject>;
};
type ListAttachedSegmentsResponse = {
    type: string;
    data: Array<SegmentObject>;
};
type ListAttachedEmailSubscriptionsResponse = {
    type: string;
    data: Array<SubscriptionObject>;
};
type ListAttachedCompaniesData = {
    id: string;
    perPage?: number;
    page?: number;
};
export {};
//# sourceMappingURL=contact.d.ts.map