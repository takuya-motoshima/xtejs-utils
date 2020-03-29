import Handlebars from 'handlebars';

/**
 * Embedded JavaScript templates
 */
export default class {

  /**
   * Compiles a template so it can be executed immediately.
   * 
   * @example
   * import { Template } from 'xtejs-utils';
   *
   * // Basic example
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
   * // Would render:
   * // <p>Hello, my name is Alan.I am from Texas.I have 2 kids:</p>
   * // <ul>
   * //   <li>Jimmy is 12</li>
   * //   <li>Sally is 4</li>
   * // </ul>
   * 
   * template({ name: 'Softly', hometown: 'Michigan', kids: [ { name: 'Potter', age: '9' }, { name: 'Ludge', age: '7' } ]});
   * // Would render:
   * // <p>Hello, my name is Softly.I am from Michigan.I have 2 kids:</p>
   * // <ul>
   * //   <li>Potter is 9</li>
   * //   <li>Ludge is 7</li>
   * // </ul>
   *
   * // IF
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
   * // Would render: <h1>Yehuda Katz</h1>
   * 
   * template({ author: false, firstName: 'Yehuda', lastName: 'Katz' });
   * // Would render: <h1>Unknown Author</h1>
   *
   * // HTML-escaping
   * source = `
   *   raw: {{{specialChars}}}
   *   html-escaped: {{specialChars}}`;
   *   
   * Template.compile(source)({ specialChars: "& < > \" ' ` =" });
   * // Would render:
   * // raw: & < > " ' ` =
   * // html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;
   * 
   * @param {string} source
   */
  public static compile(source: string): HandlebarsTemplateDelegate<any> {
    return Handlebars.compile<any>(source);
  }

  /**
   * Returns the result of compiling the template
   *
   * @example
   * import { Template } from 'xtejs-utils';
   *
   * // Basic example
   * let source = `
   *   <p>Hello, my name is {{name}}.I am from {{hometown}}.I have {{kids.length}} kids:</p>
   *   <ul>
   *     {{#kids}}
   *       <li>{{name}} is {{age}}</li>
   *     {{/kids}}
   *   </ul>`;
   *   
   * Template.render(source, { name: 'Beil', hometown: 'New York', kids: [ { name: 'Jollye', age: '20' } ]});
   * // Would render:
   * // <p>Hello, my name is Beil.I am from New York.I have 1 kids:</p>
   * // <ul>
   * //   <li>Jollye is 20</li>
   * // </ul>
   *
   * // IF
   * source = `
   *   {{#if author}}
   *     <h1>{{firstName}} {{lastName}}</h1>
   *   {{else}}
   *     <h1>Unknown Author</h1>
   *   {{/if}}`;
   *   
   * Template.render(source, { author: true, firstName: 'Yehuda', lastName: 'Katz' });
   * // Would render: <h1>Yehuda Katz</h1>
   *
   * Template.render(source, { author: false, firstName: 'Yehuda', lastName: 'Katz' });
   * // Would render: <h1>Unknown Author</h1>
   * 
   * // HTML-escaping
   * source = `
   *   raw: {{{specialChars}}}
   *   html-escaped: {{specialChars}}`;
   *   
   * Template.render(source, { specialChars: "& < > \" ' ` =" });
   * // Would render:
   * // raw: & < > " ' ` =
   * // html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;
   * 
   * @param {string} source
   * @param {Object} data
   */
  public static render(source: string, data = {}): string {
    return this.compile(source)(data);
  }
}
