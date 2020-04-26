import { Startup, Dependency } from "./decorators";
import { TypesSymbol } from "./typesymbols";
import { OnInit } from "./onInit";
import { IRepository } from "./repository";


@Startup()
export class InjectedClass extends OnInit {
    _repository: IRepository;
    constructor(@Dependency(TypesSymbol.Repository)repository: IRepository ){
        super();
        this._repository = repository;
    }

    onInit = () : void => { 
        this._repository.toConsole("Repository Text");
    } 
}