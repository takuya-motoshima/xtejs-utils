import moment from 'moment';

export default class {

  /**
   * Getting a random integer between two values, inclusive
   * 
   * @param  {number} min
   * @param  {number} max
   * @return {number}
   */
  public static randInt(min: number, max: number): number {
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
  public static sample(collection: any[]): any {
    return collection[Math.floor(Math.random() * collection.length)];
  }

  /**
   * Get random HSL (hue, saturation, lightness)
   * 
   * @example
   * import { Random } from 'xtejs-utils';
   * 
   * // Basic pure ROYGBIV colors (sometimes)
   * Random.randHSL({ smin: 80, smax: 100, lmin: 45, lmax: 55 });
   * 
   * // Very dark colors (Rare)
   * Random.randHSL({ smin: 70, smax: 100, lmin: 5, lmax: 40 });
   * 
   * // Light dreamy pastels (very frequent)
   * Random.randHSL({ smin: 10, smax: 100, lmin: 50, lmax: 95 });
   * 
   * @param  {number} options.hmax Maximum allowed value for Hue in the HSL color model.
   * @param  {number} options.hmin Minimum allowed value for Hue in the HSL color model.
   * @param  {number} options.smax Maximum allowed value for Saturation in the HSL color model.
   * @param  {number} options.smin Minimum allowed value for Saturation in the HSL color model.
   * @param  {number} options.lmax Maximum allowed value for lightnessMax in the HSL color model.
   * @param  {number} options.lmin Minimum allowed value for lightnessMax in the HSL color model.
   * @return {string}
   */
  public static randHSL({ hmax = 0, hmin = 360, smax = 0, smin = 100, lmax = 0, lmin = 100 }: { hmax?: number, hmin?: number, smax?: number, smin?: number, lmax?: number, lmin?: number }): string {
    const h = parseInt((Math.random() * (hmax - hmin + 1)).toString(), 10) + hmin;
    const s = parseInt((Math.random() * (smax - smin + 1)).toString(), 10) + smin;
    const l = parseInt((Math.random() * (lmax - lmin + 1)).toString(), 10) + lmin;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
}
