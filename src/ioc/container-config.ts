import { Container } from "./ioc-container";
import { TypesSymbol } from "../custom-types/types-symbols";
import { Manager } from "../manager";
import { Repository } from "../repository";

export class ContainerConfig {
    
    /**
     * Use this method to register your dependencies using the container instance
     * 
     * Example : Container.instance().bind(TypesSymbol.MyDependency, MyDependency)
     */
    static register(): void {
        Container.instance().bind(TypesSymbol.Manager, Manager);
        Container.instance().bind(TypesSymbol.Repository, Repository);
    }
}