import * as XtejsUtils from '../../dist/build.esm.js';

const browser = new XtejsUtils.Browser(navigator.userAgent);

// All browser parsed results
$('#results').text(JSON.stringify(browser.getResults(), null, '  '));

// Browser's name
$('#browserName').text(browser.getBrowserName());

// Browser's version
$('#browserVersion').text(browser.getBrowserVersion());

// OS name
$('#osName').text(browser.getOSName());

// OS version
$('#osVersion').text(browser.getOSVersion());

// Platform name
$('#platformType').text(browser.getPlatformType());

// Engines's name
$('#engineName').text(browser.getEngineName());