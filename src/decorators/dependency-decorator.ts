import 'reflect-metadata';

export function Dependency(registeredType: symbol) : ParameterDecorator {
    return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
        Reflect.defineMetadata("design:ioctypes:"+parameterIndex, 
                               registeredType, 
                               target);
    }
}