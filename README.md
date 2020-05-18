# xtejs-utils

<img src="https://raw.githubusercontent.com/takuya-motoshima/xtejs-utils/master/documents/brand.png" width="58" height="90" align="left" hspace="10" vspace="6">

**XteJS utils** is a general utility class and function package.

### &nbsp;<!-- Code required for line break in README header -->

## Installation

```sh
npm install xtejs-utils;
```

## Usage

### Browser detector.

```js
import { Browser } from "xtejs-utils";

const browser = new Browser(navigator.userAgent);

// All browser parsed results
browser.getParseResults();
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
browser.getBrowserName();// Chrome

// Browser's version
browser.getBrowserVersion();// 80.0.3987.163

// OS name
browser.getOSName();// Android

// OS version
browser.getOSVersion();// 8.0

// Platform name
browser.getPlatformType();// mobile

// Engines's name
browser.getEngineName();// Blink
```

### Collection utility.

```js
import { Collection } from "xtejs-utils";

// Removes duplicate values from an array
const input = ['green', 'red','green', 'blue', 'red'];
Collection.unique();
// [
//   "green",
//   "red",
//   "blue"
// ]
```

### System Colors.

The following color values ​​are various colors that adapt to changing accessibility settings.

![System color list](https://raw.githubusercontent.com/takuya-motoshima/xtejs-utils/master/documents/system-color-list.png)

```js
import { Color } from "xtejs-utils";

Color.blue;// rgb(0,122,255)
Color.darkBlue;// rgb(10,132,255)
Color.accessibleBlue;// rgb(0,64,221)
Color.accessibleDarkBlue;// rgb(64,156,255)
```

### Date utility.

```js
import { Datetime } from "xtejs-utils";

// Get the current date and time in any format
Datetime.format();// 2020-03-20T12:17:34+09:00
Datetime.format('dddd, MMMM Do YYYY, h:mm:ss a');// Friday, March 20th 2020, 12:17:34 pm
Datetime.format('ddd, hA');// Fri, 12PM

// Get any date and time in any format
Datetime.format('2020-01-01');// 2020-01-01T00:00:00+09:00
Datetime.format('2020-01-01', 'dddd, MMMM Do YYYY, h:mm:ss a');// Wednesday, January 1st 2020, 12:00:00 am
Datetime.format('2020-01-01', 'ddd, hA');// Wed, 12AM

// Get time from 00:00
Datetime.timesOneDay();// ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00"]

// Get the time from 09:00
Datetime.timesOneDay(9);// ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00"]

// Get the time from 00:00 in any format
Datetime.timesOneDay('LT');// ["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"]

// Get the time from 09:00 in any format
Datetime.timesOneDay(9, 'LT');// ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM"]

// Get the day of the current month in any format
Datetime.daysInMonth();// ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]

// Get the day of the month in any format
Datetime.daysInMonth('MMM D');// [["Mar 1","Mar 2","Mar 3","Mar 4","Mar 5","Mar 6","Mar 7","Mar 8","Mar 9","Mar 10","Mar 11","Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24","Mar 25","Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31"]

// Get day of any month
Datetime.daysInMonth('2020-01');// ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]

// Get day of any month in any format
Datetime.daysInMonth('2020-01', 'MMM D');["Jan 1","Jan 2","Jan 3","Jan 4","Jan 5","Jan 6","Jan 7","Jan 8","Jan 9","Jan 10","Jan 11","Jan 12","Jan 13","Jan 14","Jan 15","Jan 16","Jan 17","Jan 18","Jan 19","Jan 20","Jan 21","Jan 22","Jan 23","Jan 24","Jan 25","Jan 26","Jan 27","Jan 28","Jan 29","Jan 30","Jan 31"]

// Get date every 7 years from 2020 to 2030
Datetime.range(7, 'years', '2020', '2030', 'Y');// ["2020","2027"]

// Get date every 7 months from January 2020 to January 2030
Datetime.range(7, 'months', '2020/1', '2030/1', 'M/Y');// ["1/2020","8/2020","3/2021","10/2021","5/2022","12/2022","7/2023","2/2024","9/2024","4/2025","11/2025","6/2026","1/2027","8/2027","3/2028","10/2028","5/2029","12/2029"]

// Get date every 1 week from March 1 to March 31
Datetime.range(1, 'weeks', '3/1', '3/31', 'ddd, M/D');// ["Thu, 3/1","Thu, 3/8","Thu, 3/15","Thu, 3/22","Thu, 3/29"]

// Get date every 7 days from March 1 to March 31
Datetime.range(7, 'days', '3/1', '3/31', 'M/D');// ["3/1","3/8","3/15","3/22","3/29"]

// Get time every 7 hours from 0:00, March 1 to 0:00, March 2
Datetime.range(7, 'hours', '3/1, 0:00', '3/2, 0:00', 'H:mm');// ["0:00","7:00","14:00","21:00"]

// Get time every 30 minutes from 9:00 to 12:00
Datetime.range(30, 'minutes', '3/1, 9:00', '3/1, 12:00', 'H:mm');// ["9:00","9:30","10:00","10:30","11:00","11:30","12:00"]

// Get time every 30 seconds from 9:00 to 9:03
Datetime.range(30, 'seconds', '3/1, 9:00', '3/1, 9:03', 'H:mm:ss');// ["9:00:00","9:00:30","9:01:00","9:01:30","9:02:00","9:02:30","9:03:00","9:03:30","9:04:00","9:04:30","9:05:00"]

// Add years
Datetime.add('2020/3/21', 1, 'years', 'M/D/Y');// 3/21/2021

// Add months
Datetime.add('2020/3/21', 1, 'months', 'M/D/Y');// 4/21/2020

// Add weeks
Datetime.add('2020/3/21', 1, 'weeks', 'M/D/Y');// 3/28/2020

// Add days
Datetime.add('2020/3/21', 1, 'days', 'M/D/Y');// 3/22/2020

// Add hours
Datetime.add('2020/3/21, 9:00:00', 1, 'hours', 'M/D/Y, H:mm:ss');// 3/21/2020, 10:00:00

// Add minutes
Datetime.add('2020/3/21, 9:00:00', 1, 'minutes', 'M/D/Y, H:mm:ss');// 3/21/2020, 9:01:00

// Add seconds
Datetime.add('2020/3/21, 9:00:00', 1, 'seconds', 'M/D/Y, H:mm:ss');// 3/21/2020, 9:00:01

// Check if date is invalid
Datetime.isValid('2012-05-25', 'YYYY-MM-DD', true); // true
Datetime.isValid('2012.05.25', 'YYYY-MM-DD', true); // false
Datetime.isValid('not a real date'); // false
Datetime.isValid('2010 13', 'YYYY MM'); // false (not a real month)
Datetime.isValid('2010 11 31', 'YYYY MM DD'); // false (not a real day)
Datetime.isValid('2010 2 29', 'YYYY MM DD'); // false (not a leap year)
Datetime.isValid('2010 notamonth 29', 'YYYY MMM DD'); // false (not a real month name)
```

### Graphic utility.
This will be explained later

### Miscellaneous utility.

```js
import { Misc } from "xtejs-utils";

// Return whether Node.js environment
Misc.isNodeEnvironment();// Returns false if the browser, true if Node.js

//  Returns a window object for browsers and a global object for Node.js
Misc.getGlobal();
```

### Random utility.

```js
import { Random } from "xtejs-utils";

// Returns a number from 3 to 9
Random.randInt(3, 9);

// Get 1 element randomly from 3 elements
Random.sample(['apple', 'banana', 'cherry']);

// Basic pure ROYGBIV colors (sometimes)
Random.randHSL({ smin: 80, smax: 100, lmin: 45, lmax: 55 });

// Very dark colors (Rare)
Random.randHSL({ smin: 70, smax: 100, lmin: 5, lmax: 40 });

// Light dreamy pastels (very frequent)
Random.randHSL({ smin: 10, smax: 100, lmin: 50, lmax: 95 });
```

### Template engine.

A template language that can generate HTML markup with JS.

Compiles a template so it can be executed immediately.

```js
import { Template } from "xtejs-utils";

// Compiles a template so it can be executed immediately.

// #Basic Usage
let template = Template.compile(`
  <p>Hello, my name is {{name}}.I am from {{hometown}}.I have {{kids.length}} kids:</p>
  <ul>
    {{#kids}}
      <li>{{name}} is {{age}}</li>
    {{/kids}}
  </ul>`);

template({ name: 'Alan', hometown: 'Texas', kids: [ { name: 'Jimmy', age: '12' }, { name: 'Sally', age: '4' } ]});
// <p>Hello, my name is Alan.I am from Texas.I have 2 kids:</p>
// <ul>
//   <li>Jimmy is 12</li>
//   <li>Sally is 4</li>
// </ul>

template({ name: 'Softly', hometown: 'Michigan', kids: [ { name: 'Potter', age: '9' }, { name: 'Ludge', age: '7' } ]});
// <p>Hello, my name is Softly.I am from Michigan.I have 2 kids:</p>
// <ul>
//   <li>Potter is 9</li>
//   <li>Ludge is 7</li>
// </ul>

// #if
template = Template.compile(`
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}`);

template({ author: true, firstName: 'Yehuda', lastName: 'Katz' });
// <h1>Yehuda Katz</h1>

template({ author: false, firstName: 'Yehuda', lastName: 'Katz' });
// <h1>Unknown Author</h1>

// #HTML-escaping
Template.compile(`
  raw: {{{specialChars}}}
  html-escaped: {{specialChars}}`)({ specialChars: "& < > \" ' ` =" });
// raw: & < > " ' ` =
// html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;

// #each
Template.compile(`
   <ul>
     {{#each people}}
       <li>{{this}}</li>
     {{/each}}
   </ul>`)({ people: [ 'Yehuda Katz', 'Alan Johnson', 'Charles Jolley' ] });
// <ul class="people_list">
//   <li>Yehuda Katz</li>
//   <li>Alan Johnson</li>
//   <li>Charles Jolley</li>
// </ul>

Template.compile(`
  <ul>
    {{#each persons}}
      <li>{{name}} ({{country}})</li>
    {{/each}}
  </ul>`)({ persons: [ { name: 'Nils', country: 'Germany' }, { name: 'Yehuda', country: 'USA' } ]});
// <ul>
//   <li>Nils (Germany)</li>
//   <li>Yehuda (USA)</li>
// </ul>

// Round the decimal point
Template.compile('{{value}} round to {{round value}}')({ value: 1.4 });// 1.4 round to 1
Template.compile('{{value}} round to {{round value}}')({ value: 1.5 });// 1.5 round to 2
Template.compile('{{value}} round to {{round value}}')({ value: 1.6 });// 1.6 round to 2

// Rounds the second decimal place
Template.compile('{{value}} round to {{round 2 value}}')({ value: 1.016 });// 1.016 round to 1.02
Template.compile('{{value}} round to {{round 2 value}}')({ value: 1.015 });// 1.015 round to 1.02
Template.compile('{{value}} round to {{round 2 value}}')({ value: 1.014 });// 1.014 round to 1.01

// Round up the decimal point
Template.compile('{{value}} ceil to {{ceil value}}')({ value: 1.4 });// 1.4 ceil to 2
Template.compile('{{value}} ceil to {{ceil value}}')({ value: 1.5 });// 1.5 ceil to 2
Template.compile('{{value}} ceil to {{ceil value}}')({ value: 1.6 });// 1.6 ceil to 2

// Rounded up to two decimal places
Template.compile('{{value}} ceil to {{ceil 2 value}}')({ value: 1.016 });// 1.016 ceil to 1.02
Template.compile('{{value}} ceil to {{ceil 2 value}}')({ value: 1.015 });// 1.015 ceil to 1.02
Template.compile('{{value}} ceil to {{ceil 2 value}}')({ value: 1.014 });// 1.014 ceil to 1.02

// Round down the decimal point
Template.compile('{{value}} floor to {{floor value}}')({ value: 1.4 });// 1.4 floor to 1
Template.compile('{{value}} floor to {{floor value}}')({ value: 1.5 });// 1.5 floor to 1
Template.compile('{{value}} floor to {{floor value}}')({ value: 1.6 });// 1.6 floor to 1

// Rounded down to two decimal places
Template.compile('{{value}} floor to {{floor 2 value}}')({ value: 1.016 });// 1.016 floor to 1.01
Template.compile('{{value}} floor to {{floor 2 value}}')({ value: 1.015 });// 1.015 floor to 1.01
Template.compile('{{value}} floor to {{floor 2 value}}')({ value: 1.014 });// 1.014 floor to 1.01
```

Returns the result of compiling the template

```js
import { Template } from "xtejs-utils";

// #Basic Usage
Template.render(`
  <p>Hello, my name is {{name}}.I am from {{hometown}}.I have {{kids.length}} kids:</p>
  <ul>
    {{#kids}}
      <li>{{name}} is {{age}}</li>
    {{/kids}}
  </ul>`, { name: 'Beil', hometown: 'New York', kids: [ { name: 'Jollye', age: '20' } ]});
// <p>Hello, my name is Beil.I am from New York.I have 1 kids:</p>
// <ul>
//   <li>Jollye is 20</li>
// </ul>

// #if
Template.render(`
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}`, { author: true, firstName: 'Yehuda', lastName: 'Katz' });
// <h1>Yehuda Katz</h1>

Template.render(`
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}`, { author: false, firstName: 'Yehuda', lastName: 'Katz' });
// <h1>Unknown Author</h1>

// #HTML-escaping
Template.render(
  `raw: {{{specialChars}}}
  html-escaped: {{specialChars}}`,
  { specialChars: "& < > \" ' ` =" }
);
// raw: & < > " ' ` =
// html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;

// #each
Template.render(`
  <ul>
    {{#each people}}
      <li>{{this}}</li>
    {{/each}}
  </ul>`,
  { people: [ 'Yehuda Katz', 'Alan Johnson', 'Charles Jolley' ] }
);
// <ul class="people_list">
//   <li>Yehuda Katz</li>
//   <li>Alan Johnson</li>
//   <li>Charles Jolley</li>
// </ul>

Template.render(`
  <ul>
    {{#each persons}}
      <li>{{name}} ({{country}})</li>
    {{/each}}
  </ul>`,
  { persons: [ { name: 'Nils', country: 'Germany' }, { name: 'Yehuda', country: 'USA' } ] }
);
// <ul>
//   <li>Nils (Germany)</li>
//   <li>Yehuda (USA)</li>
// </ul>

// Round the decimal point
Template.render('{{value}} round to {{round value}}', { value: 1.4 });// 1.4 round to 1
Template.render('{{value}} round to {{round value}}', { value: 1.5 });// 1.5 round to 2
Template.render('{{value}} round to {{round value}}', { value: 1.6 });// 1.6 round to 2

// Rounds the second decimal place
Template.render('{{value}} round to {{round 2 value}}', { value: 1.016 });// 1.016 round to 1.02
Template.render('{{value}} round to {{round 2 value}}', { value: 1.015 });// 1.015 round to 1.02
Template.render('{{value}} round to {{round 2 value}}', { value: 1.014 });// 1.014 round to 1.01

// Round up the decimal point
Template.render('{{value}} ceil to {{ceil value}}', { value: 1.4 });// 1.4 ceil to 2
Template.render('{{value}} ceil to {{ceil value}}', { value: 1.5 });// 1.5 ceil to 2
Template.render('{{value}} ceil to {{ceil value}}', { value: 1.6 });// 1.6 ceil to 2

// Rounded up to two decimal places
Template.render('{{value}} ceil to {{ceil 2 value}}', { value: 1.016 });// 1.016 ceil to 1.02
Template.render('{{value}} ceil to {{ceil 2 value}}', { value: 1.015 });// 1.015 ceil to 1.02
Template.render('{{value}} ceil to {{ceil 2 value}}', { value: 1.014 });// 1.014 ceil to 1.02

// Round down the decimal point
Template.render('{{value}} floor to {{floor value}}', { value: 1.4 });// 1.4 floor to 1
Template.render('{{value}} floor to {{floor value}}', { value: 1.5 });// 1.5 floor to 1
Template.render('{{value}} floor to {{floor value}}', { value: 1.6 });// 1.6 floor to 1

// Rounded down to two decimal places
Template.render('{{value}} floor to {{floor 2 value}}', { value: 1.016 });// 1.016 floor to 1.01
Template.render('{{value}} floor to {{floor 2 value}}', { value: 1.015 });// 1.015 floor to 1.01
Template.render('{{value}} floor to {{floor 2 value}}', { value: 1.014 });// 1.014 floor to 1.01
```

### Type utility.

Utility for type determination and type related processing.

```js
import { Types } from "xtejs-utils";

// Returns whether it is an Async function
function async myAsyncFunction {}
function myFunction() {}

Types.isAsync(myFunction);// false
Types.isAsync(myAsyncFunction);// true
```

## Examples

There are some examples in "./examples" in this package.Here is the first one to get you started.