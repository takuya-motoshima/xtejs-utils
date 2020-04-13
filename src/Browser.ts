/**
 * Browser detector.
 */
import Bowser from 'bowser';
import IBrowserParsedResult from '~/interfaces/IBrowserParsedResult';

export default class {

  private readonly parser: any;

  /**
   * @constructor
   * @param {string} ua User-Agent string
   */
  constructor(ua: string) {
    this.parser = Bowser.getParser(ua);
  }

  /**
   * Returns browser detection results
   * 
   * @return {IBrowserParsedResult}
   */
  public getResults(): IBrowserParsedResult {
    return this.parser.getResult();
  }

  /**
   * Get browser's name
   * 
   * @return {string} Browser's name or an empty string
   */
  public getBrowserName(): string {
    return this.parser.getBrowserName();
  }

  /**
   * Get browser's version
   * 
   * @return {string} version of browser
   */
  public getBrowserVersion(): string {
    return this.parser.getBrowserVersion();
  }

  /**
   * Get OS name
   * 
   * @return {string} name of the OS macOS, Windows, Linux, etc.
   */
  public getOSName(): string {
    return this.parser.getOSName();
  }

  /**
   * Get OS version
   * 
   * @return {string} full version with dots ('10.11.12', '5.6', etc)
   */
  public getOSVersion(): string {
    return this.parser.getOSVersion();
  }

  /**
   * Get platform name
   * 
   * @return {string} full version with dots ('10.11.12', '5.6', etc)
   */
  public getPlatformType(): string {
    return this.parser.getPlatformType();
  }

  /**
   * Get engines's name
   * 
   * @return {string} Engines's name or an empty string
   */
  public getEngineName(): string {
    return this.parser.getEngineName();
  }
}
