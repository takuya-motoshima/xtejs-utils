/**
 * Template engine.
 * 
 * A template language that can generate HTML markup with JS.
 */
import Handlebars from 'handlebars';

/**
 * Shift operation
 * 
 * @param {number}  number
 * @param {number}  precision
 * @param {boolean} reverseShift
 */
function shift(number: number, precision: number, reverseShift: boolean): number {
  if (reverseShift) {
    precision = -precision;
  }
  const numArray = ('' + number).split('e');
  return +(numArray[0] + 'e' + (numArray[1] ? (+numArray[1] + precision) : precision));
}

// Get the `Math.ceil()` of the given value.
Handlebars.registerHelper('ceil', (number: number, precision: number = 0) => {
  console.log(`Ceil number: ${number}, precision: ${precision}`);
  return shift(Math.ceil(shift(number, precision, false)), precision, true);
});

// Get the `Math.floor()` of the given value.
Handlebars.registerHelper('floor', (number: number, precision: number = 0) => {
  console.log(`Floor number: ${number}, precision: ${precision}`);
  return shift(Math.floor(shift(number, precision, false)), precision, true);
});

// Round the given number.
// Handlebars.registerHelper('round', (number: number, precision: number = 0) => {
Handlebars.registerHelper('round', (number: number) => {
  return number;
  // console.log(`Round number: ${number}, precision: ${precision}`);
  // return shift(Math.round(shift(number, precision, false)), precision, true);
});

/**
 * Embedded JavaScript templates
 */
export default class Template {

  private static _compiler: typeof Handlebars|undefined = undefined;

  /**
   *
   * Return Handlebars class containing helper functions
   * 
   * @return {Handlebars}
   */
  private static get compiler(): typeof Handlebars {
    if (!Template._compiler) {
      /**
       * Shift operation
       * 
       * @param {number}  number
       * @param {number}  precision
       * @param {boolean} reverseShift
       */
      function shift(number: number, precision: number, reverseShift: boolean): number {
        if (reverseShift) {
          precision = -precision;
        }
        const numArray = ('' + number).split('e');
        return +(numArray[0] + 'e' + (numArray[1] ? (+numArray[1] + precision) : precision));
      }

      // Get the `Math.ceil()` of the given value.
      Handlebars.registerHelper('ceil', (...args: any[]) => {
        let number: number;
        let precision: number = 0;
        if (args.length === 2) {
          number = args[0];
        } else if (args.length === 3) {
          precision = args[0];
          number = args[1];
        } else {
          throw new Error('Invalid argument');
        }
        return shift(Math.ceil(shift(number, precision, false)), precision, true);
      });

      // Get the `Math.floor()` of the given value.
      Handlebars.registerHelper('floor', (...args: any[]) => {
        let number: number;
        let precision: number = 0;
        if (args.length === 2) {
          number = args[0];
        } else if (args.length === 3) {
          precision = args[0];
          number = args[1];
        } else {
          throw new Error('Invalid argument');
        }
        return shift(Math.floor(shift(number, precision, false)), precision, true);
      });

      // Round the given number.
      Handlebars.registerHelper('round', (...args: any[]) => {
        let number: number;
        let precision: number = 0;
        if (args.length === 2) {
          number = args[0];
        } else if (args.length === 3) {
          precision = args[0];
          number = args[1];
        } else {
          throw new Error('Invalid argument');
        }
        return shift(Math.round(shift(number, precision, false)), precision, true);
      });
      Template._compiler = Handlebars;
    }
    return Template._compiler;
  }

  /**
   * Compiles a template so it can be executed immediately.
   * 
   * @example
   * import { Template } from "xtejs-utils";
   *
   * // #Basic Usage
   * let source = `
   *   <p>Hello, my name is {{name}}.I am from {{hometown}}.I have {{kids.length}} kids:</p>
   *   <ul>
   *     {{#kids}}
   *       <li>{{name}} is {{age}}</li>
   *     {{/kids}}
   *   </ul>`;
   * 
   * let template = Template.compile(source);
   * 
   * template({ name: 'Alan', hometown: 'Texas', kids: [ { name: 'Jimmy', age: '12' }, { name: 'Sally', age: '4' } ]});
   * // <p>Hello, my name is Alan.I am from Texas.I have 2 kids:</p>
   * // <ul>
   * //   <li>Jimmy is 12</li>
   * //   <li>Sally is 4</li>
   * // </ul>
   * 
   * template({ name: 'Softly', hometown: 'Michigan', kids: [ { name: 'Potter', age: '9' }, { name: 'Ludge', age: '7' } ]});
   * // <p>Hello, my name is Softly.I am from Michigan.I have 2 kids:</p>
   * // <ul>
   * //   <li>Potter is 9</li>
   * //   <li>Ludge is 7</li>
   * // </ul>
   *
   * // #if
   * source = `
   *   {{#if author}}
   *     <h1>{{firstName}} {{lastName}}</h1>
   *   {{else}}
   *     <h1>Unknown Author</h1>
   *   {{/if}}`;
   *   
   * template = Template.compile(source);
   * 
   * template({ author: true, firstName: 'Yehuda', lastName: 'Katz' });
   * // <h1>Yehuda Katz</h1>
   * 
   * template({ author: false, firstName: 'Yehuda', lastName: 'Katz' });
   * // <h1>Unknown Author</h1>
   *
   * // #HTML-escaping
   * source = `
   *   raw: {{{specialChars}}}
   *   html-escaped: {{specialChars}}`;
   *   
   * Template.compile(source)({ specialChars: "& < > \" ' ` =" });
   * // raw: & < > " ' ` =
   * // html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;
   *
   * // #each
   * source = `
   *    <ul>
   *      {{#each people}}
   *        <li>{{this}}</li>
   *      {{/each}}
   *    </ul>`;
   * 
   * Template.compile(source)({
   *   people: [
   *     'Yehuda Katz',
   *     'Alan Johnson',
   *     'Charles Jolley'
   *   ]
   * });
   * // <ul class="people_list">
   * //   <li>Yehuda Katz</li>
   * //   <li>Alan Johnson</li>
   * //   <li>Charles Jolley</li>
   * // </ul>
   * 
   * source = `
   *   <ul>
   *     {{#each persons}}
   *       <li>{{name}} ({{country}})</li>
   *     {{/each}}
   *   </ul>`;
   *   
   * Template.compile(source)({
   *   persons: [
   *     { name: 'Nils', country: 'Germany' },
   *     { name: 'Yehuda', country: 'USA' }
   *   ]
   * });
   * // <ul>
   * //   <li>Nils (Germany)</li>
   * //   <li>Yehuda (USA)</li>
   * // </ul>
   * 
   * @param {string} source
   */
  public static compile(source: string): HandlebarsTemplateDelegate<any> {
    return Template.compiler.compile<any>(source);
    // return Handlebars.create().compile<any>(source);
  }

  /**
   * Returns the result of compiling the template
   *
   * @example
   * import { Template } from "xtejs-utils";
   *
   * // #Basic Usage
   * let source = `
   *   <p>Hello, my name is {{name}}.I am from {{hometown}}.I have {{kids.length}} kids:</p>
   *   <ul>
   *     {{#kids}}
   *       <li>{{name}} is {{age}}</li>
   *     {{/kids}}
   *   </ul>`;
   *   
   * Template.render(source, { name: 'Beil', hometown: 'New York', kids: [ { name: 'Jollye', age: '20' } ]});
   * // <p>Hello, my name is Beil.I am from New York.I have 1 kids:</p>
   * // <ul>
   * //   <li>Jollye is 20</li>
   * // </ul>
   *
   * // #if
   * source = `
   *   {{#if author}}
   *     <h1>{{firstName}} {{lastName}}</h1>
   *   {{else}}
   *     <h1>Unknown Author</h1>
   *   {{/if}}`;
   *   
   * Template.render(source, { author: true, firstName: 'Yehuda', lastName: 'Katz' });
   * // <h1>Yehuda Katz</h1>
   *
   * Template.render(source, { author: false, firstName: 'Yehuda', lastName: 'Katz' });
   * // <h1>Unknown Author</h1>
   * 
   * // #HTML-escaping
   * source = `
   *   raw: {{{specialChars}}}
   *   html-escaped: {{specialChars}}`;
   *   
   * Template.render(source, { specialChars: "& < > \" ' ` =" });
   * // raw: & < > " ' ` =
   * // html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;
   *
   * // #each
   * source = `
   *    <ul>
   *      {{#each people}}
   *        <li>{{this}}</li>
   *      {{/each}}
   *    </ul>`;
   * 
   * Template.render(source, {
   *   people: [
   *     'Yehuda Katz',
   *     'Alan Johnson',
   *     'Charles Jolley'
   *   ]
   * });
   * // <ul class="people_list">
   * //   <li>Yehuda Katz</li>
   * //   <li>Alan Johnson</li>
   * //   <li>Charles Jolley</li>
   * // </ul>
   * 
   * source = `
   *   <ul>
   *     {{#each persons}}
   *       <li>{{name}} ({{country}})</li>
   *     {{/each}}
   *   </ul>`;
   *   
   * Template.render(source, {
   *   persons: [
   *     { name: 'Nils', country: 'Germany' },
   *     { name: 'Yehuda', country: 'USA' }
   *   ]
   * });
   * // <ul>
   * //   <li>Nils (Germany)</li>
   * //   <li>Yehuda (USA)</li>
   * // </ul>
   * 
   * @param {string} source
   * @param {Object} data
   */
  public static render(source: string, data = {}): string {
    return this.compile(source)(data);
  }
}
