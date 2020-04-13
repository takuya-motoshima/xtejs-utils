/**
 * Miscellaneous utility.
 */
export default class {
    private static fallbackGlobalObject;
    /**
     * Return whether Node.js environment
     *
     * @return {boolean}
     */
    static isNodeEnvironment(): boolean;
    /**
     * Returns a window object for browsers and a global object for Node.js
     *
     * @return {any}
     */
    static getGlobal<T>(): T;
}
