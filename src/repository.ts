import { TypesSymbol } from "./types/typesymbols";
import { IManager } from "./manager";
import { Dependency } from "./decorators/dependency-decorator";

export interface IRepository {
    toConsole(text: string): void;
}

export class Repository implements IRepository {

    _manager: IManager;
    constructor(@Dependency(TypesSymbol.Manager)manager: IManager){
        this._manager = manager;
    }

    toConsole(text: string): void {
        console.log(text);
        this._manager.log("From Repo : Manager Text");
    }
}