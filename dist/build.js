var _0x9433=['videoWidth','videoHeight','width','isMediaLoaded','complete','getContext','beginPath','arc','fill','aqua','drawPoint','moveTo','lineTo','closePath','lineWidth','strokeStyle','stroke','flipHorizontal','getImageData','height','data','Types','isAsync','constructor','version','1.0.0','defineProperty','__esModule','object','function','amd','exports','xtejsUtils','isNodeEnvironment','[object\x20process]','prototype','toString','call','undefined','fallbackGlobalObject','Browser','isAndroid','test','userAgent','isIOS','isMobile','Geometry','calculateRotatedRectCoordinates','calculateRotationCoordinate','sin','cos','calculateCenterCoordinate','reduce','length','calculateAngleBetweenCoordinates','calculateFitDimensions','contain','scale-down','min','getMediaDimensions','naturalWidth','naturalHeight'];(function(_0x48c0a3,_0x25bc20){var _0x50daf7=function(_0x429278){while(--_0x429278){_0x48c0a3['push'](_0x48c0a3['shift']());}};_0x50daf7(++_0x25bc20);}(_0x9433,0x98));var _0x1c01=function(_0xf049c8,_0x1ef02c){_0xf049c8=_0xf049c8-0x0;var _0x2229e8=_0x9433[_0xf049c8];return _0x2229e8;};!function(_0x1a5f35,_0x24b1cd){_0x1c01('0x0')==typeof exports&&'undefined'!=typeof module?_0x24b1cd(exports):_0x1c01('0x1')==typeof define&&define[_0x1c01('0x2')]?define([_0x1c01('0x3')],_0x24b1cd):_0x24b1cd((_0x1a5f35=_0x1a5f35||self)[_0x1c01('0x4')]={});}(this,function(_0x3c5e19){'use strict';class _0x544e64{static[_0x1c01('0x5')](){return _0x1c01('0x6')===Object[_0x1c01('0x7')][_0x1c01('0x8')][_0x1c01('0x9')](_0x1c01('0xa')!=typeof process?process:0x0);}static['getGlobal'](){return this[_0x1c01('0x5')]()?global:'undefined'!=typeof window?window:_0x1c01('0xa')!=typeof self?self:this['fallbackGlobalObject'];}}_0x544e64[_0x1c01('0xb')]={};_0x3c5e19[_0x1c01('0xc')]=class{static[_0x1c01('0xd')](){return/Android/i[_0x1c01('0xe')](navigator[_0x1c01('0xf')]);}static[_0x1c01('0x10')](){return/iPhone|iPad|iPod/i[_0x1c01('0xe')](navigator[_0x1c01('0xf')]);}static[_0x1c01('0x11')](){return this[_0x1c01('0xd')]()||this[_0x1c01('0x10')]();}},_0x3c5e19[_0x1c01('0x12')]=class{static[_0x1c01('0x13')]({x:_0x3c5e19,y:_0x544e64,width:_0x38953e,height:_0x4c1779,degree:_0x11fef3=0x0}){let _0x6222d7,_0x143cfc,_0x1ccc69,_0x2a2fd7;if(_0x11fef3){const _0x1dd1d1=_0x3c5e19+_0x38953e/0x2,_0x4d38f3=_0x544e64+_0x4c1779/0x2;_0x6222d7=this[_0x1c01('0x14')]({'x':_0x3c5e19,'y':_0x544e64,'cx':_0x1dd1d1,'cy':_0x4d38f3,'degree':_0x11fef3}),_0x143cfc=this['calculateRotationCoordinate']({'x':_0x3c5e19+_0x38953e,'y':_0x544e64,'cx':_0x1dd1d1,'cy':_0x4d38f3,'degree':_0x11fef3}),_0x1ccc69=this[_0x1c01('0x14')]({'x':_0x3c5e19+_0x38953e,'y':_0x544e64+_0x4c1779,'cx':_0x1dd1d1,'cy':_0x4d38f3,'degree':_0x11fef3}),_0x2a2fd7=this[_0x1c01('0x14')]({'x':_0x3c5e19,'y':_0x544e64+_0x4c1779,'cx':_0x1dd1d1,'cy':_0x4d38f3,'degree':_0x11fef3});}else _0x6222d7={'x':_0x3c5e19,'y':_0x544e64},_0x143cfc={'x':_0x3c5e19+_0x38953e,'y':_0x544e64},_0x1ccc69={'x':_0x3c5e19+_0x38953e,'y':_0x544e64+_0x4c1779},_0x2a2fd7={'x':_0x3c5e19,'y':_0x544e64+_0x4c1779};return{'topleft':_0x6222d7,'topright':_0x143cfc,'bottomright':_0x1ccc69,'bottomleft':_0x2a2fd7};}static[_0x1c01('0x14')]({x:_0x3c5e19,y:_0x544e64,cx:_0x1f92f1=0x0,cy:_0x47c846=0x0,degree:_0x1cb074=0x0}){const _0x235e4b=_0x1cb074*(Math['PI']/0xb4),_0x5e4643=Math[_0x1c01('0x15')](_0x235e4b),_0x180851=Math[_0x1c01('0x16')](_0x235e4b);return{'x':_0x180851*(_0x3c5e19-_0x1f92f1)-_0x5e4643*(_0x544e64-_0x47c846)+_0x1f92f1,'y':_0x5e4643*(_0x3c5e19-_0x1f92f1)+_0x180851*(_0x544e64-_0x47c846)+_0x47c846};}static[_0x1c01('0x17')](..._0x3c5e19){const _0x544e64=_0x3c5e19[_0x1c01('0x18')]((_0x3c5e19,{x:_0x544e64,y:_0x3adbe3})=>(_0x3c5e19['x']+=_0x544e64,_0x3c5e19['y']+=_0x3adbe3,_0x3c5e19),{'x':0x0,'y':0x0});return _0x544e64['x']/=_0x3c5e19[_0x1c01('0x19')],_0x544e64['y']/=_0x3c5e19[_0x1c01('0x19')],_0x544e64;}static[_0x1c01('0x1a')](_0x3c5e19,_0x544e64){return 0xb4*Math['atan2'](_0x544e64['y']-_0x3c5e19['y'],_0x544e64['x']-_0x3c5e19['x'])/Math['PI'];}static[_0x1c01('0x1b')]({objectFit:_0x3c5e19,intrinsicWidth:_0x544e64,intrinsicHeight:_0x28eb44,intrinsicTop:_0x4ec63d=0x0,intrinsicLeft:_0x58c72e=0x0,actualWidth:_0x3ba9a2,actualHeight:_0x237f88}){let _0x492024=_0x4ec63d,_0x3c62db=_0x58c72e,_0x449853=_0x544e64,_0x865273=_0x28eb44;if(_0x1c01('0x1c')===_0x3c5e19||'cover'===_0x3c5e19||_0x1c01('0x1d')===_0x3c5e19){const _0x13c633=_0x544e64/_0x3ba9a2,_0x5b85fa=_0x28eb44/_0x237f88,_0x505d12=_0x1c01('0x1c')===_0x3c5e19||_0x1c01('0x1d')===_0x3c5e19?Math[_0x1c01('0x1e')](_0x13c633,_0x5b85fa):Math['max'](_0x13c633,_0x5b85fa);_0x492024=_0x4ec63d+(_0x28eb44-_0x237f88*_0x505d12)/0x2,_0x3c62db=_0x58c72e+(_0x544e64-_0x3ba9a2*_0x505d12)/0x2,_0x449853=_0x3ba9a2*_0x505d12,_0x865273=_0x237f88*_0x505d12;}return{'top':_0x492024,'left':_0x3c62db,'width':_0x449853,'height':_0x865273};}static[_0x1c01('0x1f')](_0x3c5e19){return _0x3c5e19 instanceof HTMLImageElement?{'width':_0x3c5e19[_0x1c01('0x20')],'height':_0x3c5e19[_0x1c01('0x21')]}:_0x3c5e19 instanceof HTMLVideoElement?{'width':_0x3c5e19[_0x1c01('0x22')],'height':_0x3c5e19[_0x1c01('0x23')]}:{'width':_0x3c5e19[_0x1c01('0x24')],'height':_0x3c5e19['height']};}static[_0x1c01('0x25')](_0x3c5e19){return _0x3c5e19 instanceof HTMLImageElement&&_0x3c5e19[_0x1c01('0x26')]||_0x3c5e19 instanceof HTMLVideoElement&&0x4===_0x3c5e19['readyState'];}static['drawPoint'](_0x3c5e19,{x:_0x544e64,y:_0x39f3e7,r:_0x57d8d7=0x3,color:_0x18f972='aqua'}){const _0x20f71c=_0x3c5e19[_0x1c01('0x27')]('2d');_0x20f71c[_0x1c01('0x28')](),_0x20f71c[_0x1c01('0x29')](_0x544e64,_0x39f3e7,_0x57d8d7,0x0,0x2*Math['PI']),_0x20f71c['fillStyle']=_0x18f972,_0x20f71c[_0x1c01('0x2a')]();}static['drawCenterPoint'](_0x3c5e19,{points:_0x544e64,r:_0x34c9d1=0x3,color:_0x545ff7=_0x1c01('0x2b')}){const {x:a,y:n}=this[_0x1c01('0x17')](..._0x544e64);this[_0x1c01('0x2c')](_0x3c5e19,{'x':a,'y':n,'r':_0x34c9d1,'color':_0x545ff7});}static['drawRect'](_0x3c5e19,{x:_0x544e64,y:_0x2ba182,width:_0x1bc092,height:_0x5418ab,degree:_0x21790d=0x0,lineWidth:_0x4df887=0x2,color:_0x31c782=_0x1c01('0x2b')}){const {topleft:s,topright:l,bottomright:d,bottomleft:h}=this[_0x1c01('0x13')]({'x':_0x544e64,'y':_0x2ba182,'width':_0x1bc092,'height':_0x5418ab,'degree':_0x21790d}),_0x137e2f=_0x3c5e19['getContext']('2d');_0x137e2f[_0x1c01('0x28')](),_0x137e2f[_0x1c01('0x2d')](s['x'],s['y']),_0x137e2f[_0x1c01('0x2e')](l['x'],l['y']),_0x137e2f[_0x1c01('0x2e')](d['x'],d['y']),_0x137e2f[_0x1c01('0x2e')](h['x'],h['y']),_0x137e2f[_0x1c01('0x2f')](),_0x137e2f[_0x1c01('0x30')]=_0x4df887,_0x137e2f[_0x1c01('0x31')]=_0x31c782,_0x137e2f[_0x1c01('0x32')]();}static[_0x1c01('0x33')](_0x3c5e19){const _0x544e64=_0x3c5e19[_0x1c01('0x27')]('2d'),_0x5e97a8=_0x544e64[_0x1c01('0x34')](0x0,0x0,_0x3c5e19[_0x1c01('0x24')],_0x3c5e19[_0x1c01('0x35')]);for(let _0x3c5e19=0x0;_0x3c5e19<_0x5e97a8[_0x1c01('0x35')];_0x3c5e19++)for(let _0x544e64=0x0;_0x544e64<_0x5e97a8[_0x1c01('0x24')]/0x2;_0x544e64++){const _0x127ce=0x4*_0x3c5e19*_0x5e97a8[_0x1c01('0x24')]+0x4*_0x544e64,_0x168759=0x4*(_0x3c5e19+0x1)*_0x5e97a8[_0x1c01('0x24')]-0x4*(_0x544e64+0x1);for(let _0x3c5e19=0x0;_0x3c5e19<0x4;_0x3c5e19++){let _0x544e64=_0x5e97a8[_0x1c01('0x36')][_0x127ce+_0x3c5e19];_0x5e97a8[_0x1c01('0x36')][_0x127ce+_0x3c5e19]=_0x5e97a8[_0x1c01('0x36')][_0x168759+_0x3c5e19],_0x5e97a8['data'][_0x168759+_0x3c5e19]=_0x544e64;}}_0x544e64['putImageData'](_0x5e97a8,0x0,0x0,0x0,0x0,_0x5e97a8[_0x1c01('0x24')],_0x5e97a8[_0x1c01('0x35')]);}},_0x3c5e19['Misc']=_0x544e64,_0x3c5e19[_0x1c01('0x37')]=class{static[_0x1c01('0x38')](_0x3c5e19){return _0x3c5e19&&_0x3c5e19[_0x1c01('0x39')]&&_0x3c5e19['constructor']===Object['getPrototypeOf'](async function(){})[_0x1c01('0x39')];}},_0x3c5e19[_0x1c01('0x3a')]=_0x1c01('0x3b'),Object[_0x1c01('0x3c')](_0x3c5e19,_0x1c01('0x3d'),{'value':!0x0});});
