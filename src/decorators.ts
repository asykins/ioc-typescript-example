import { Type, Injector } from "./injector";
import { OnInit } from "./onInit";
import { Container } from "./ioc-container";

export function Dependency(registeredType: symbol) : ParameterDecorator {
    return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
        console.log("Bind");
        Reflect.defineMetadata("design:ioctypes:"+parameterIndex, 
                               Container.instance().resolve(registeredType), 
                               target);
    }
}

export function Startup(): GenericClassDecorator<Type<OnInit>> {
    return (target: Type<OnInit>) => {
        console.log("Startup");
        Injector.resolve(target).onInit();
    }
}

export type GenericClassDecorator<T> = (target: T) => void;