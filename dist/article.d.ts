import { Client } from '.';
import { ArticleObject, TranslatedContentObject } from './article/article.types';
import { GenericDeletedResponse, OperationById, Paginated } from './common/common.types';
export default class Article {
    private readonly client;
    readonly baseUrl = "articles";
    constructor(client: Client);
    create({ title, description, body, authorId, state, parentId, parentType, translatedContent, }: CreateArticleData): Promise<ArticleObject>;
    find({ id }: ArticleFindByIdData): Promise<ArticleObject>;
    update({ id, title, description, body, authorId, state, parentId, parentType, translatedContent, }: UpdateArticleData): Promise<ArticleObject>;
    delete({ id }: ArticleDeleteByIdData): Promise<ArticleDeleteByIdResponse>;
    list({ page, perPage: per_page }: ArticleListData): Promise<ArticleListResponse>;
}
interface CreateArticleData {
    title: string;
    authorId: number;
    description?: string;
    body?: string;
    state?: string;
    parentId?: number;
    parentType?: string;
    translatedContent?: Omit<TranslatedContentObject, 'type'>;
}
type ArticleFindByIdData = OperationById;
type UpdateArticleData = Partial<CreateArticleData> & OperationById;
type ArticleDeleteByIdData = OperationById;
type ArticleDeleteByIdResponse = GenericDeletedResponse<'article'>;
type ArticleListData = {
    page?: number;
    perPage?: number;
};
type ArticleListResponse = Paginated<ArticleObject>;
export {};
//# sourceMappingURL=article.d.ts.map