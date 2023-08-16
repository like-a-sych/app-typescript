export interface IColumns {
    name: string;
    selector: (row: any) => string;
}