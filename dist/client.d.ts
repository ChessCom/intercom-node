import { Axios, AxiosDefaults } from 'axios';
import Article from './article';
import Admin from './admin';
import Company from './company';
import Contact from './contact';
import Conversation from './conversation';
import Count from './count';
import DataAttribute from './dataAttribute';
import DataExport from './dataExport';
import Event from './event';
import HelpCenter from './helpCenter';
import Message from './message';
import Note from './note';
import Segment from './segment';
import Subscription from './subscription';
import Team from './team';
import Tag from './tag';
import Visitor from './visitor';
import PhoneCallRedirect from './phoneCallRedirect';
interface RequestOptions {
    url: string;
    data?: any;
    params?: any;
}
type Constructor = {
    usernameAuth?: UsernameAuth;
    tokenAuth?: TokenAuth;
    apiKeyAuth?: ApiKeyAuth;
};
type UsernameAuth = {
    username: string;
    password: string;
};
type TokenAuth = {
    token: string;
};
type ApiKeyAuth = {
    appId: string;
    appApiKey: string;
};
export default class Client {
    articles: Article;
    admins: Admin;
    axiosInstance: Axios;
    companies: Company;
    contacts: Contact;
    conversations: Conversation;
    counts: Count;
    dataAttributes: DataAttribute;
    dataExport: DataExport;
    events: Event;
    helpCenter: HelpCenter;
    messages: Message;
    notes: Note;
    segments: Segment;
    subscriptions: Subscription;
    passwordPart?: string;
    propertiesToOmitInRequestOpts: string[];
    requestOpts: Partial<AxiosDefaults>;
    tags: Tag;
    teams: Team;
    usernamePart?: string;
    visitors: Visitor;
    phoneCallRedirect: PhoneCallRedirect;
    constructor(args: Constructor);
    initiateAxiosInstance(): Axios;
    useRequestOpts(opts: Partial<AxiosDefaults>): this;
    updateAxiosInstanceDefaults(): void;
    filterUnwantedProperties(opts: Partial<AxiosDefaults>): Partial<AxiosDefaults>;
    ping<T>(): Promise<T>;
    put<T>({ url, data }: RequestOptions): Promise<T>;
    post<T>({ url, data }: RequestOptions): Promise<T>;
    get<T>({ url, data, params }: RequestOptions): Promise<T>;
    nextPage<T>(paginationObject: {
        next: string;
    }): Promise<T>;
    delete<T>({ url, data, params }: RequestOptions): Promise<T>;
    private checkOnErrorInResponse;
    private static getAuthDetails;
}
export {};
//# sourceMappingURL=client.d.ts.map