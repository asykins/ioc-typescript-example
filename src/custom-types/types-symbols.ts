/**
 * Use this class to associate your class with a unique symbol
 * 
 * Example : 
 * 
 *      export const TypesSymblol = {
 *          MyDependency: Symbol.for("IMyDependency")
 *      }
 */
export const TypesSymbol = {
    Repository: Symbol.for("IRepository"),
    Manager: Symbol.for("IManager")
};