import { OnInit, Startup } from "./onInit";
import { IRepository, Repository } from './repository';

@Startup()
class InjectedClass extends OnInit {
    _repository: IRepository;
    constructor(repository: Repository){
        super();
        this._repository = repository;
    }

    onInit = () : void => { 
        this._repository.toConsole("koala!");
    }
}