export default class {
    /**
     * Getting a random integer between two values, inclusive
     *
     * @param  {number} min
     * @param  {number} max
     * @return {number}
     */
    static range(min: number, max: number): number;
    /**
     * Gets a random element from collection.
     *
     * @param  {any[]} collection
     * @return {any}
     */
    static sample(collection: any[]): any;
}
