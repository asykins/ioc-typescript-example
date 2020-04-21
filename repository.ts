import {Injectable} from "./injector";

export interface IRepository {
    toConsole(text: string): void;
}

@Injectable()
export class Repository implements IRepository{
    toConsole(text: string): void {
        console.log(text);    
    }
}