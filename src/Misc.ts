export default class {
  
  private static fallbackGlobalObject: {} = {};

  public static isNodeEnvironment(): boolean {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
  }

  public static getGlobal<T>(): T {
    return (this.isNodeEnvironment()
      ? global
      : typeof window !== 'undefined'
      ? window
      : typeof self !== 'undefined'
      ? self
      : this.fallbackGlobalObject) as T;
  }
}
