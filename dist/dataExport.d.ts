import { Client } from '.';
import { DataExportObject } from './dataExport/dataExport.types';
import { OperationById } from './common/common.types';
export default class DataExport {
    private readonly client;
    readonly baseUrl = "export";
    constructor(client: Client);
    find({ id }: DataExportByIdData): Promise<DataExportObject>;
    create({ createdAtBefore, createdAtAfter }: CreateDataExportData): Promise<DataExportObject>;
    cancel({ id }: DataExportByIdData): Promise<DataExportObject>;
}
interface CreateDataExportData {
    createdAtBefore: number;
    createdAtAfter: number;
}
type DataExportByIdData = OperationById;
export {};
//# sourceMappingURL=dataExport.d.ts.map