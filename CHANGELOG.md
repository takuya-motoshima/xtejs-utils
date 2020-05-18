## 1.0.10 (May 18, 2020)

### Graphics.

* Added a function to find the distance between two coordinates in the Graphics class.

    ```js
    import { Graphics } from 'xtejs-utils';

    // Calculate the distance between (x1, y1) and (x2, y2) coordinates
    const x1 = 10;
    const y1 = 20;
    const x2 = 30;
    const y2 = 40;
    Graphics.getDistance(x1, y1, x2, y2);// 28.284271247461902
    ```

## 1.0.8 (May 18, 2020)

### Template engine.

* Added a helper function for round, floor and ceil to the template engine.

    ```js
    import { Template } from 'xtejs-utils';
    
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
