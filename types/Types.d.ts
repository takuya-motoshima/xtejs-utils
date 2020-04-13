/**
 * Type utility.
 *
 * Utility for type determination and type related processing.
 */
export default class {
    /**
     * Returns whether it is an Async function
     *
     * @example
     * import { Types } from 'xtejs-utils';
     *
     * function myFunction() {}
     * function async myAsyncFunction {}
     *
     * Types.isAsync(myFunction);// false
     * Types.isAsync(myAsyncFunction);// true
     *
     * @param  {Function} value
     * @return {boolean}
     */
    static isAsync(value: Function): boolean;
}
