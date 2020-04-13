import IBrowserParsedResult from '~/interfaces/IBrowserParsedResult';
export default class {
    private readonly parser;
    /**
     * @constructor
     * @param {string} ua User-Agent string
     */
    constructor(ua: string);
    /**
     * Returns browser detection results
     *
     * @return {IBrowserParsedResult}
     */
    getParseResults(): IBrowserParsedResult;
    /**
     * Get browser's name
     *
     * @return {string} Browser's name or an empty string
     */
    getBrowserName(): string;
    /**
     * Get browser's version
     *
     * @return {string} version of browser
     */
    getBrowserVersion(): string;
    /**
     * Get OS name
     *
     * @return {string} name of the OS macOS, Windows, Linux, etc.
     */
    getOSName(): string;
    /**
     * Get OS version
     *
     * @return {string} full version with dots ('10.11.12', '5.6', etc)
     */
    getOSVersion(): string;
    /**
     * Get platform name
     *
     * @return {string} full version with dots ('10.11.12', '5.6', etc)
     */
    getPlatformType(): string;
    /**
     * Get engines's name
     *
     * @return {string} Engines's name or an empty string
     */
    getEngineName(): string;
}
