import { Type, Injector } from "../injector";
import { OnInit } from "../onInit";
import { GenericClassDecorator } from "../types/custom-types";

export function Startup(): GenericClassDecorator<Type<OnInit>> {
    return (target: Type<OnInit>) => {
        Injector.resolve(target).onInit();
    }
}