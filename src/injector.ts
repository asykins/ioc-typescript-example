import 'reflect-metadata';
import { Container } from './ioc-container';

export let Injector = new class {
    resolve<T>(target: Type<T>) : T {
        console.log(target);
        let registeredTypes = Reflect.getOwnMetadataKeys(target)
                                     .filter((value: string) => value.indexOf("ioctypes") != -1);

        let typeSymbols: symbol[] = [];
        registeredTypes.forEach((metadataKey: string) => {
            let index: number = Number.parseInt(metadataKey.substring(metadataKey.lastIndexOf(':') + 1));
            typeSymbols[index] = Reflect.getMetadata(metadataKey, target);
        });

        let resolvedDependencies = Array<any>();
        if(typeSymbols.length){
            typeSymbols.forEach(typeSymbol => {
                Container.instance().resolve(typeSymbol);
                resolvedDependencies.push(Injector.resolve(Container.instance().resolve(typeSymbol)));    
            })
        }

        return new target(...resolvedDependencies);
    }
}

export interface Type<T> {
    new(...args: any[]): T;
}
