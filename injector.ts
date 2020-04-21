import 'reflect-metadata';

export let Injector = new class {
    resolve<T>(target: Type<T>) : T {
        let dependencies = Reflect.getMetadata('design:paramtypes', target) || [];
        let resolvedDependencies = dependencies.map(dependency => Injector.resolve(dependency));
        return new target(...resolvedDependencies);                     
    }
}

export interface Type<T> {
    new(...args: any[]): T;
}

export const Injectable = () : GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => { };
}

export type GenericClassDecorator<T> = (target: T) => void;
