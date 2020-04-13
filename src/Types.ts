/**
 * Type utility.
 */
export default class {

  public static isAsync(value: Function): boolean {
    return value && value.constructor && value.constructor === Object.getPrototypeOf(async function(){}).constructor
  }
}
