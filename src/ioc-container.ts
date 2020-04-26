import { Type } from './injector';
import { TypesSymbol } from './typesymbols';
import { Repository } from './repository';

export interface IContainer {
    bind(abstraction: symbol, implementation: Type<any>): void;
    resolve(abstraction: symbol): Type<any>;
}

export class Container implements IContainer {

    private static containerInstance: IContainer;

    _iocContainer: Map<symbol, Type<any>>;

    constructor() {
        this._iocContainer = new Map<symbol, Type<any>>();
        this.registerTypes();
    }

    static instance(): IContainer {
        if(!Container.containerInstance) {
            return new Container();
        }
        else {
            return Container.containerInstance;
        }
    }

    bind<T>(abstraction: symbol, implementation: Type<any>): void{
        this._iocContainer.set(abstraction, implementation);
    }

    resolve(abstraction: symbol) : Type<any> {
        return this._iocContainer.get(abstraction);
    }

    private registerTypes(): void {
        this._iocContainer.set(TypesSymbol.Repository, Repository);
    }
}