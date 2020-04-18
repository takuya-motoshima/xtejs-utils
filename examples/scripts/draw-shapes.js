import * as XtejsUtils from '../../dist/build.esm.js';

// Draw rectangle
var canvas = document.querySelector('#canvas1'), x = 10, y = 10, width = 50, height = 50;
XtejsUtils.Graphics.drawRectangle(canvas, x, y, width, height);

// Draw a shaded rectangle
var canvas = document.querySelector('#canvas1'), x = 20, y = 20, width = 50, height = 50, lineColor = '#ffffff', shadowBlur = 4;
XtejsUtils.Graphics.drawRectangle(canvas, x, y, width, height, { lineColor, shadowBlur });

// Draw points
var canvas = document.querySelector('#canvas2'), x = 20, y = 20, radius = 10;;
XtejsUtils.Graphics.drawPoint(canvas, x, y, { radius });

// Draw the corners of a rectangle
var canvas = document.querySelector('#canvas3'), x = 10, y = 10, width = 50, height = 50;
XtejsUtils.Graphics.drawRectangleCorners(canvas, x, y, width, height);

// Draw the corners of a shaded rectangle
var canvas = document.querySelector('#canvas3'), x = 20, y = 20, width = 50, height = 50, lineColor = '#ffffff', shadowBlur = 4;
XtejsUtils.Graphics.drawRectangleCorners(canvas, x, y, width, height, { lineColor, shadowBlur });

