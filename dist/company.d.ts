import { Client } from '.';
import { PaginationParams, JavascriptObject, Order, Paginated, Timestamp, GenericDeletedResponse } from './common/common.types';
import { CompanyObject, ListCompaniesResponse } from './company/company.types';
import { ContactObject } from './contact/contact.types';
import Scroll from './scroll';
import { SegmentObject } from './segment/segment.types';
export default class Company {
    private readonly client;
    readonly baseUrl = "companies";
    readonly scroll: Scroll<Company>;
    constructor(client: Client);
    create({ createdAt, companyId, name, monthlySpend, plan, size, website, industry, customAttributes, }: CreateCompanyData): Promise<CompanyObject>;
    update({ createdAt, companyId, name, monthlySpend, plan, size, website, industry, customAttributes, }: UpdateCompanyData): Promise<CompanyObject>;
    find({ companyId, name }: FindCompanyData): Promise<CompanyObject>;
    delete({ id }: DeleteCompanyData): Promise<DeleteCompanyResponse>;
    list({ page, perPage: per_page, order, tagId: tag_id, segmentId: segment_id, }: ListCompaniesData): Promise<ListCompaniesResponse>;
    attachContact({ contactId, companyId }: AttachContactData): Promise<CompanyObject>;
    detachContact({ contactId, companyId }: DetachContactData): Promise<CompanyObject>;
    listAttachedContacts({ companyId, page, perPage, }: ListAttachedContactsData): Promise<Paginated<ContactObject>>;
    listAttachedSegments({ companyId }: ListAttachedSegmentsData): Promise<ListAttachedSegmentsResponse>;
}
interface CreateCompanyData {
    createdAt?: Timestamp;
    companyId: string;
    name?: string;
    monthlySpend?: number;
    plan?: string;
    size?: number;
    website?: string;
    industry?: string;
    customAttributes?: JavascriptObject;
}
type UpdateCompanyData = CreateCompanyData;
interface FindCompanyData {
    companyId?: string;
    name?: string;
}
interface DeleteCompanyData {
    id: string;
}
type DeleteCompanyResponse = GenericDeletedResponse<'company'>;
interface ListCompaniesData extends PaginationParams {
    order?: Order;
    tagId?: string;
    segmentId?: string;
}
interface AttachContactData {
    contactId: string;
    companyId: string;
}
type DetachContactData = AttachContactData;
interface ListAttachedContactsData extends PaginationParams {
    companyId: string;
}
interface ListAttachedSegmentsData {
    companyId: string;
}
interface ListAttachedSegmentsResponse {
    type: 'list';
    data: SegmentObject[];
}
export {};
//# sourceMappingURL=company.d.ts.map