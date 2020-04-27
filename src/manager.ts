export interface IManager {
    log(text: string): void;
}

export class Manager implements IManager{
    log(text: string): void {
        console.log(text);
    }

}