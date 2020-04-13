/**
 * @interface IBrowserParsedResult
 * @property {Object} browser
 * @property {string|undefined} [browser.name] Browser name, like 'Chrome' or 'Internet Explorer'
 * @property {string|undefined} [browser.version] Browser version as a string '12.01.45334.10'
 * @property {Object} os
 * @property {string|undefined} [os.name] OS name, like 'Windows' or 'macOS'
 * @property {string|undefined} [os.version] OS version, like 'NT 5.1' or '10.11.1'
 * @property {string|undefined} [os.versionName] OS name, like 'XP' or 'High Sierra'
 * @property {Object} platform
 * @property {string|undefined} [platform.type] platform type, can be either 'desktop', 'tablet' or 'mobile'
 * @property {string|undefined} [platform.vendor] Vendor of the device, like 'Apple' or 'Samsung'
 * @property {string|undefined} [platform.model] Device model, like 'iPhone' or 'Kindle Fire HD 7'
 * @property {Object} engine
 * @property {string|undefined} [engine.name] Can be any of this: `WebKit`, `Blink`, `Gecko`, `Trident`, `Presto`, `EdgeHTML`
 * @property {string|undefined} [engine.version] string version of the engine
 */
export default interface  {
    browser: {
        name: string | undefined;
        version: string | undefined;
    };
    os: {
        name?: string | undefined;
        version?: string | undefined;
        versionName?: string | undefined;
    };
    platform: {
        type?: string | undefined;
        vendor?: string | undefined;
        model?: string | undefined;
    };
    engine: {
        name?: string | undefined;
    };
}
