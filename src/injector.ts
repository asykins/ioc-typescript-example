import 'reflect-metadata';

export let Injector = new class {
    resolve<T>(target: Type<T>) : T {
        console.log(target);
        let  registeredTypes = Reflect.getOwnMetadataKeys(target)
                                      .filter((value: string) => value.indexOf("ioctypes") != -1);

        console.log(registeredTypes);

        let dependencies = [];
        registeredTypes.forEach((metadataKey: string) => {
            let index: number = Number.parseInt(metadataKey.substring(metadataKey.lastIndexOf(':') + 1));
            dependencies[index] = Reflect.getMetadata(metadataKey, target);
        });
        
        let resolvedDependencies = Array<any>();
        if(dependencies.length){
            dependencies.forEach(dependency => {
                resolvedDependencies.push(Injector.resolve(dependency));    
            })
        }

        return new target(...resolvedDependencies);
    }
}

export interface Type<T> {
    new(...args: any[]): T;
}
