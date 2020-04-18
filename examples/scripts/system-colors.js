import * as XtejsUtils from '../../dist/build.esm.js';

const rows = {
  blue: [
    'blue',
    'darkBlue',
    'accessibleBlue',
    'accessibleDarkBlue',
  ],
  green: [
    'green',
    'darkGreen',
    'accessibleGreen',
    'accessibleDarkGreen',
  ],
  indigo: [
    'indigo',
    'darkIndigo',
    'accessibleIndigo',
    'accessibleDarkIndigo',
  ],
  orange: [
    'orange',
    'darkOrange',
    'accessibleOrange',
    'accessibleDarkOrange',
  ],
  pink: [
    'pink',
    'darkPink',
    'accessiblePink',
    'accessibleDarkPink',
  ],
  purple: [
    'purple',
    'darkPurple',
    'accessiblePurple',
    'accessibleDarkPurple',
  ],
  red: [
    'red',
    'darkRed',
    'accessibleRed',
    'accessibleDarkRed',
  ],
  teal: [
    'teal',
    'darkTeal',
    'accessibleTeal',
    'accessibleDarkTeal',
  ],
  yellow: [
    'yellow',
    'darkYellow',
    'accessibleYellow',
    'accessibleDarkYellow',
  ],
  gray: [
    'gray',
    'darkGray',
    'accessibleGray',
    'accessibleDarkGray',
  ],
  gray2: [
    'gray2',
    'darkGray2',
    'accessibleGray2',
    'accessibleDarkGray2',
  ],
  gray3: [
    'gray3',
    'darkGray3',
    'accessibleGray3',
    'accessibleDarkGray3',
  ],
  gray4: [
    'gray4',
    'darkGray4',
    'accessibleGray4',
    'accessibleDarkGray4',
  ],
  gray5: [
    'gray5',
    'darkGray5',
    'accessibleGray5',
    'accessibleDarkGray5',
  ],
  gray6: [
    'gray6',
    'darkGray6',
    'accessibleGray6',
    'accessibleDarkGray6',
  ],
};

function getColorSquare(color) {
  const [ red, green, blue ] = XtejsUtils.Color[color].match(/rgb\((\d+),(\d+),(\d+)\)/).slice(1,4);
  return `<div class="color" style="background:${XtejsUtils.Color[color]}"><span>R ${red}</span><span>G ${green}</span><span>B ${blue}</span></div><span>${color}</span>`;
}

const $fragment = $(document.createDocumentFragment());
for (let [ _, row ] of Object.entries(rows)) {
  $fragment.append(`<tr>${row.reduce((cols, color) => cols += `<td>${getColorSquare(color)}</td>`, '')}<td>${name.replace(/^[a-z]/, char => char.toUpperCase())}</td></tr>`);
}
$('#colors').append($fragment);
