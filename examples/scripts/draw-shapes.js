import * as XtejsUtils from '../../dist/build.esm.js';

// Draw rectangle
const canvas1 = $('#canvas1').get(0);
XtejsUtils.Graphics.drawRectangle(canvas1, 20, 20, 50, 50);

// Draw rectangle
const canvas2 = $('#canvas2').get(0);
XtejsUtils.Graphics.drawPoint(canvas2, 20, 20, { radius: 10 });

// Draw only the corners of the rectangle
const canvas3 = $('#canvas3').get(0);
XtejsUtils.Graphics.drawRectangleCorners(canvas3, 20, 20, 50, 50);
