import * as XtejsUtils from '../../dist/build.esm.js';

// Removes duplicate values from an array
const input = ['green', 'red','green', 'blue', 'red'];
$('#unique').text(JSON.stringify(XtejsUtils.Collection.unique(input), null, '  '));