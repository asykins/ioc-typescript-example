import { TypesSymbol } from "./custom-types/types-symbols";
import { OnInit } from "./onInit";
import { Startup } from "./decorators/startup-decorator";
import { IRepository } from "./repository";
import { Dependency } from "./decorators/dependency-decorator";
import { IManager } from "./manager";


@Startup()
export class InjectedClass extends OnInit {
    _repository: IRepository;
    _manager: IManager;
    constructor(@Dependency(TypesSymbol.Repository)repository: IRepository,
                @Dependency(TypesSymbol.Manager)manager: IManager){
        super();
        this._repository = repository;
        this._manager = manager;
    }

    onInit = () : void => { 
        this._repository.toConsole("From Index: Repository Text");
        this._manager.log("From Index: Manager Text");
    } 
}