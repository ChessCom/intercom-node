import { Client } from '.';
export default class Scroll<EntityType> {
    private readonly client;
    private readonly scrollUrlDataType;
    private scrollParam?;
    constructor(client: Client, scrollUrlDataType: string, scrollParam?: string | undefined);
    each(params: EachData): Promise<EntityType[]>;
    eachInternal(storedData?: EntityType[]): Promise<EntityType[]>;
    next({ scrollParam, }: NextData): Promise<ScrollableResponse<EntityType>>;
    scrollUrl(): string;
}
interface ScrollableResponse<EntityType> {
    type: 'list';
    data: EntityType[];
    pages: number | null;
    total_count: number | null;
    scroll_param?: string;
}
interface EachData {
    scrollParam?: string;
}
type NextData = EachData;
export {};
//# sourceMappingURL=scroll.d.ts.map