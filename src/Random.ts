import moment from 'moment';

export default class {

  /**
   * Getting a random integer between two values, inclusive
   * 
   * @param  {number} min
   * @param  {number} max
   * @return {number}
   */
  range(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  /**
   * Gets a random element from collection.
   * 
   * @param  {any[]} collection
   * @return {any}
   */
  sample(collection: any[]): any {
    return collection[Math.floor(Math.random() * collection.length)];
  }
}
