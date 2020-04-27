import { Type } from '../interfaces/type';
import { ContainerConfig } from './container-config';

export interface IContainer {
    bind(abstraction: symbol, implementation: Type<any>): void;
    resolve(abstraction: symbol): Type<any>;
}

export class Container implements IContainer {

    private static containerInstance: IContainer;

    _iocContainer: Map<symbol, Type<any>>;

    constructor() {
        this._iocContainer = new Map<symbol, Type<any>>();
    }

    static instance(): IContainer {
        if(!Container.containerInstance) {
            this.containerInstance = new Container();
            ContainerConfig.register();
        }
        return Container.containerInstance;
    }

    bind<T>(abstraction: symbol, implementation: Type<any>): void{
        this._iocContainer.set(abstraction, implementation);
    }

    resolve(abstraction: symbol) : Type<any> {
        return this._iocContainer.get(abstraction);
    }
}