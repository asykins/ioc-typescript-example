import { Type } from '../interfaces/type';
import { Injector } from "../ioc/injector";
import { OnInit } from "../onInit";
import { GenericClassDecorator } from "../custom-types/generic-class-decorator";

export function Startup(): GenericClassDecorator<Type<OnInit>> {
    return (target: Type<OnInit>) => {
        Injector.resolve(target).onInit();
    }
}