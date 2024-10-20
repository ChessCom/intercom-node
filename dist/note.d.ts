import { Client, NoteObject } from '.';
import { OperationById, Paginated } from './common/common.types';
export default class Note {
    private readonly client;
    readonly baseUrl = "notes";
    constructor(client: Client);
    create({ adminId, body, contactId }: CreateNoteData): Promise<NoteObject>;
    find({ id }: FindNoteByIdData): Promise<NoteObject>;
    list({ contactId, page, perPage: per_page }: ListNotesData): Promise<ListNotesResponse>;
}
interface CreateNoteData {
    adminId: string;
    body: string;
    contactId: string;
}
type FindNoteByIdData = OperationById;
type ListNotesData = {
    contactId: string;
    page?: number;
    perPage?: number;
};
type ListNotesResponse = Paginated<NoteObject>;
export {};
//# sourceMappingURL=note.d.ts.map