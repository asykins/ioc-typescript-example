export interface IRepository {
    toConsole(text: string): void;
}

export class Repository implements IRepository{

    toConsole(text: string): void {
        console.log(text);
    }
}