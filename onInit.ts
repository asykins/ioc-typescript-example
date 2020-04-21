import { Injector, GenericClassDecorator, Type } from './injector';

export abstract class OnInit {
    abstract onInit() : void;
}

export let Startup = (): GenericClassDecorator<Type<OnInit>> => {
    return (target: Type<OnInit>) => {
        Injector.resolve(target).onInit();
    }
}