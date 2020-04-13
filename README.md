# xtejs-utils

This package is a general utility class and function package.

## Installation

```sh
npm install xtejs-utils;
```

## Usage

### Browser detector.

```js
import * as XtejsUtils from "xtejs-utils";

const browser = new XtejsUtils.Browser(navigator.userAgent);

// All browser parsed results
browser.getResults();
// {
//   "browser": {
//     "name": "Chrome",
//     "version": "80.0.3987.163"
//   },
//   "os": {
//     "name": "Android",
//     "version": "8.0",
//     "versionName": "Oreo"
//   },
//   "platform": {
//     "type": "mobile"
//   },
//   "engine": {
//     "name": "Blink"
//   }
// }

// Browser's name
browser.getBrowserName();
// Chrome

// Browser's version
browser.getBrowserVersion();
// 80.0.3987.163

// OS name
browser.getOSName();
// Android

// OS version
browser.getOSVersion();
// 8.0

// Platform name
browser.getPlatformType();
// mobile

// Engines's name
browser.getEngineName();
// Blink
```

### Collection utility.

```js
import * as XtejsUtils from "xtejs-utils";

// Removes duplicate values from an array
const input = ['green', 'red','green', 'blue', 'red'];
XtejsUtils.Collection.unique();
// [
//   "green",
//   "red",
//   "blue"
// ]
```

### System Colors.
This will be explained later

### Date utility.
This will be explained later

### Graphic utility.
This will be explained later

### Miscellaneous utility.
This will be explained later

### Random utility.
This will be explained later

### Template engine.
This will be explained later

### Type utility.
This will be explained later
