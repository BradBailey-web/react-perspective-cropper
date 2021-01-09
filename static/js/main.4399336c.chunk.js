(this["webpackJsonpreact-perspective-cropper-example"]=this["webpackJsonpreact-perspective-cropper-example"]||[]).push([[0],{142:function(e,t,a){e.exports=a(275)},143:function(e,t,a){},155:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);a(143);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),c=a(39),l=a.n(c),u=a(47),s=a(43),p=a(281),m=a(54),h=a(280),b=a(284),f=a(285),d=a(92),g=a(140),v=a(35),w=a(87),E=a(6),O=a.n(E),y=a(119),j=a.n(y),x=function(e){return e instanceof File?new Promise((function(t,a){var n=new FileReader;n.onload=function(e){t(n.result)},n.onerror=function(e){a(e)},n.readAsDataURL(e)})):"string"===typeof e?Promise.resolve(e):void 0};function C(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1];return[a,Object(n.useCallback)((function(e){r(e)}),[])]}var R=function(e){var t,a,o=e.cropPoints,i=e.pointArea,c=e.defaultPosition,l=e.pointSize,u=void 0===l?20:l,s=e.pointColor,p=void 0===s?"#3cabe2":s,m=e.onStop,h=e.onDrag,b=Object(n.useCallback)((function(e,t){h(Object(v.a)(Object(v.a)({},t),{},{x:t.x+u/2,y:t.y+u/2}),i)}),[h]),f=Object(n.useCallback)((function(e,t){m(Object(v.a)(Object(v.a)({},t),{},{x:t.x+u/2,y:t.y+u/2}),i,o)}),[h,o]);return r.a.createElement(j.a,{bounds:"parent",defaultPosition:c,position:{x:o[i].x-u/2,y:o[i].y-u/2},onDrag:b,onStop:f},r.a.createElement("div",{style:(t=u,a=p,{width:t,height:t,backgroundColor:a,borderRadius:"100%",position:"absolute",zIndex:1001})}))};R.propTypes={cropPoints:O.a.shape({"left-top":O.a.shape({x:O.a.number,y:O.a.number}).isRequired,"right-top":O.a.shape({x:O.a.number,y:O.a.number}).isRequired,"right-bottom":O.a.shape({x:O.a.number,y:O.a.number}).isRequired,"left-bottom":O.a.shape({x:O.a.number,y:O.a.number}).isRequired}),pointArea:O.a.oneOf(["left-top","right-top","right-bottom","left-bottom"]),defaultPosition:O.a.shape({x:O.a.number,y:O.a.number}),pointSize:O.a.number,pointColor:O.a.string,onStop:O.a.func,onDrag:O.a.func};var S=function(e){var t=e.previewDims,a=Object(g.a)(e,["previewDims"]);return r.a.createElement(n.Fragment,null,r.a.createElement(R,Object.assign({pointArea:"left-top",defaultPosition:{x:0,y:0}},a)),r.a.createElement(R,Object.assign({pointArea:"right-top",defaultPosition:{x:t.width,y:0}},a)),r.a.createElement(R,Object.assign({pointArea:"right-bottom",defaultPosition:{x:0,y:t.height}},a)),r.a.createElement(R,Object.assign({pointArea:"left-bottom",defaultPosition:{x:t.width,y:t.height}},a)))};S.propTypes={previewDims:O.a.shape({ratio:O.a.number,width:O.a.number,height:O.a.number})};var k=function(e,t,a,n,r){var o,i,c=e.imread(t),l=a["right-bottom"],u=a["left-bottom"],s=a["right-top"],p=a["left-top"],m=[p,s,l,u].map((function(e){return[e.x/n,e.y/n]})),h=Math.max(l.x-u.x,s.x-p.x)/n,b=Math.max(u.y-p.y,l.y-s.y)/n,f=[[0,0],[h-1,0],[h-1,b-1],[0,b-1]],g=e.matFromArray(4,1,e.CV_32FC2,(o=[]).concat.apply(o,Object(d.a)(m))),v=e.matFromArray(4,1,e.CV_32FC2,(i=[]).concat.apply(i,f)),w=e.getPerspectiveTransform(g,v),E=new e.Size(h,b);e.warpPerspective(c,c,w,E,e.INTER_LINEAR,e.BORDER_CONSTANT,new e.Scalar),e.imshow(t,c),c.delete(),g.delete(),v.delete(),w.delete(),r()},A=function(){var e=Object(u.a)(l.a.mark((function e(t,a,n){var r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(v.a)({blur:!1,th:!0,thMode:t.ADAPTIVE_THRESH_MEAN_C,thMeanCorrection:15,thBlockSize:25,thMax:255,grayScale:!0},n),o=t.imread(a),r.grayScale&&t.cvtColor(o,o,t.COLOR_RGBA2GRAY,0),r.blur&&(i=new t.Size(5,5),t.GaussianBlur(o,o,i,0,0,t.BORDER_DEFAULT)),r.th&&(r.grayScale?t.adaptiveThreshold(o,o,r.thMax,r.thMode,t.THRESH_BINARY,r.thBlockSize,r.thMeanCorrection):(o.convertTo(o,-1,1,60),t.threshold(o,o,170,255,t.THRESH_BINARY))),t.imshow(a,o);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),P=function(e){var t=e.cropPoints,a=e.previewDims,o=e.lineWidth,i=void 0===o?3:o,c=e.lineColor,l=void 0===c?"#3cabe2":c,u=C(),p=Object(s.a)(u,2),m=p[0],h=p[1],b=Object(n.useCallback)((function(){m.getContext("2d").clearRect(0,0,a.width,a.height)}),[m,a]),f=Object(n.useCallback)((function(){return["left-top","right-top","right-bottom","left-bottom"].reduce((function(e,a){return[].concat(Object(d.a)(e),[t[a]])}),[])}),[t]),g=Object(n.useCallback)((function(e){var t=m.getContext("2d");t.lineWidth=i,t.strokeStyle=l,t.beginPath(),e.forEach((function(a,n){if(0===n&&t.moveTo(a.x,a.y),n!==e.length-1){var r=e[n+1];t.lineTo(r.x,r.y)}else t.closePath()})),t.stroke()}),[m]);return Object(n.useEffect)((function(){if(t&&m){b();var e=f();g(e)}}),[t,m]),r.a.createElement("canvas",{ref:h,style:{position:"absolute",zIndex:5,width:a.width,height:a.height},width:a.width,height:a.height})};P.propTypes={previewDims:O.a.shape({ratio:O.a.number,width:O.a.number,height:O.a.number}),cropPoints:O.a.shape({"left-top":O.a.shape({x:O.a.number,y:O.a.number}).isRequired,"right-top":O.a.shape({x:O.a.number,y:O.a.number}).isRequired,"right-bottom":O.a.shape({x:O.a.number,y:O.a.number}).isRequired,"left-bottom":O.a.shape({x:O.a.number,y:O.a.number}).isRequired}),lineColor:O.a.string,lineWidth:O.a.number};var T,D=function(e){return{width:e.width,height:e.height}},_=function(e){var t=e.image,a=e.onDragStop,o=e.onChange,i=e.cropperRef,c=e.pointSize,p=e.lineWidth,m=e.pointColor,h=e.lineColor,b=Object(w.b)(),f=b.loaded,d=b.cv,g=Object(n.useRef)(),E=C(),O=Object(s.a)(E,2),y=O[0],j=O[1],R=Object(n.useState)(),_=Object(s.a)(R,2),I=_[0],M=_[1],z=Object(n.useState)(),B=Object(s.a)(z,2),N=B[0],H=B[1],q=Object(n.useState)(!1),F=Object(s.a)(q,2),L=F[0],G=F[1],W=Object(n.useState)("crop"),Y=Object(s.a)(W,2),U=Y[0],V=Y[1];Object(n.useImperativeHandle)(i,(function(){return{backToCrop:function(){V("crop")},done:function(){var e=Object(u.a)(l.a.mark((function e(){var a,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:{},e.abrupt("return",new Promise((function(e){G(!0),k(d,g.current,N,T,J),A(d,g.current,a.filterCvParams),a.preview&&V("preview"),g.current.toBlob((function(t){e(t),G(!1)}),t.type)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}})),Object(n.useEffect)((function(){"preview"===U&&K()}),[U]);var J=function(){var e=function(e,t){var a=e/t,n=window.innerWidth-40,r=window.innerHeight-240,o={width:n,height:Math.round(n/a),ratio:a};return o.height>r&&(o.height=r,o.width=Math.round(r*a)),o}(g.current.width,g.current.height);M(e),y.width=e.width,y.height=e.height,T=e.width/g.current.width},X=function(e){return new Promise((function(t,a){var n=document.createElement("img");n.onload=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.current=document.createElement("canvas"),g.current.width=n.width,g.current.height=n.height,g.current.getContext("2d").drawImage(n,0,0),J(),t();case 7:case"end":return e.stop()}}),e)}))),n.src=e}))},K=function(e){var t=e||d.imread(g.current),a=new d.Mat,n=new d.Size(0,0);d.resize(t,a,n,T,T,d.INTER_AREA),d.imshow(y,a),t.delete(),a.delete()},Q=function(){var e=d.imread(g.current),t=new d.Size(5,5);d.cvtColor(e,e,d.COLOR_RGBA2GRAY,0),d.GaussianBlur(e,e,t,0,0,d.BORDER_DEFAULT),d.Canny(e,e,75,200),d.threshold(e,e,120,200,d.THRESH_BINARY);var a=new d.MatVector,n=new d.Mat;d.findContours(e,a,n,d.RETR_CCOMP,d.CHAIN_APPROX_SIMPLE);var r=d.boundingRect(e);e.delete(),n.delete(),a.delete(),Object.keys(r).forEach((function(e){r[e]=r[e]*T}));var o={"left-top":{x:r.x,y:r.y},"right-top":{x:r.x+r.width,y:r.y},"right-bottom":{x:r.x+r.width,y:r.y+r.height},"left-bottom":{x:r.x,y:r.y+r.height}};H(o)};Object(n.useEffect)((function(){o&&o(Object(v.a)(Object(v.a)({},N),{},{loading:L}))}),[N,L]),Object(n.useEffect)((function(){t&&y&&f&&"crop"===U?function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return a=e.sent,e.next=5,X(a);case 5:K(),Q(),G(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():G(!0)}),[t,y,f,U]);var Z=Object(n.useCallback)((function(e,t){var a=e.x,n=e.y;H((function(e){return Object(v.a)(Object(v.a)({},e),{},{[t]:{x:a,y:n}})}))}),[]),$=Object(n.useCallback)((function(e,t,n){var r=e.x,o=e.y;H((function(e){return Object(v.a)(Object(v.a)({},e),{},{[t]:{x:r,y:o}})})),a&&a(Object(v.a)(Object(v.a)({},n),{},{[t]:{x:r,y:o}}))}),[]);return r.a.createElement("div",{style:Object(v.a)({position:"relative"},I&&D(I))},I&&"crop"===U&&N&&r.a.createElement(S,{pointSize:c,pointColor:m,cropPoints:N,previewDims:I,onDrag:Z,onStop:$}),I&&"crop"===U&&N&&r.a.createElement(P,{previewDims:I,cropPoints:N,lineWidth:p,lineColor:h}),r.a.createElement("canvas",{style:{zIndex:5,pointerEvents:"none"},ref:j}))};_.propTypes={image:O.a.object.isRequired,onDragStop:O.a.func,onChange:O.a.func,cropperRef:O.a.shape({current:O.a.shape({done:O.a.func.isRequired,backToCrop:O.a.func.isRequired})}),pointSize:O.a.number,lineWidth:O.a.number,pointColor:O.a.string,lineColor:O.a.string};var I=r.a.forwardRef((function(e,t){return e.image?r.a.createElement(w.a,{openCvPath:"./opencv/opencv.js"},r.a.createElement(_,Object.assign({},e,{cropperRef:t}))):null})),M=(a(155),a(282)),z=a(283),B=a(91),N=a.n(B),H=function(){return r.a.createElement("div",{className:"site-page-header"},r.a.createElement(M.a,{ghost:!1,title:"react-perspective-cropper"},r.a.createElement(z.b,{size:"small",column:2},r.a.createElement(z.b.Item,{label:"Package"},r.a.createElement("a",{href:"https://www.npmjs.com/package/react-perspective-cropper"},r.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/react-perspective-cropper.svg"})),r.a.createElement("a",{href:"https://standardjs.com"},r.a.createElement("img",{alt:"standardjs",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}))),r.a.createElement(z.b.Item,{label:"Description"},r.a.createElement(N.a,null,"React component performing border detection, perspective correction and simple image filters over a provided image \ud83d\udcf2 \ud83d\udcf8")),r.a.createElement(z.b.Item,{label:"Created by"},"Giacomo Cerquone from",r.a.createElement("span",{"aria-label":"italy flag",role:"img",style:{margin:"0 10px"}},"\ud83c\uddee\ud83c\uddf9"),"with"," ",r.a.createElement("span",{"aria-label":"heart",role:"img",style:{margin:"0 10px"}},"\u2764\ufe0f")),r.a.createElement(z.b.Item,{label:"Info"},r.a.createElement(N.a,null,"Make sure to only use HiRes images!",r.a.createElement("br",null),r.a.createElement("b",null,r.a.createElement("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/giacomocerquone/react-perspective-cropper/blob/master/gifs/example-img.jpg?raw=true"},"You could use this image for example.")))))))},q=p.a.Dragger,F=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(),c=Object(s.a)(i,2),p=c[0],d=c[1],g=Object(n.useRef)(),v=Object(n.useCallback)((function(e){return o(e)}),[]),w=Object(n.useCallback)((function(e){return o(e)}),[]),E=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CropState",a),e.prev=1,e.next=4,g.current.done({preview:!0,filterCvParams:{thMeanCorrection:13,thMode:window.cv.ADAPTIVE_THRESH_GAUSSIAN_C}});case 4:t=e.sent,console.log("Cropped and filtered image",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),O={name:"file",multiple:!1,onChange:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fileList&&t.fileList.length>0&&d(t.fileList[0].originFileObj);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return r.a.createElement("div",{className:"root-container"},r.a.createElement(H,null),r.a.createElement("div",{className:"content-container"},a&&r.a.createElement("div",{className:"buttons-container"},r.a.createElement(m.a,{onClick:E,icon:r.a.createElement(b.a,null)},"Done"),r.a.createElement(m.a,{onClick:function(){g.current.backToCrop()}},"Back"),r.a.createElement(m.a,{onClick:function(){d(void 0),o()}},"Reset")),r.a.createElement(I,{ref:g,image:p,onChange:w,onDragStop:v}),(null===a||void 0===a?void 0:a.loading)&&r.a.createElement(h.a,null),!p&&r.a.createElement(q,O,r.a.createElement("p",null,r.a.createElement(f.a,null)),r.a.createElement("p",null,"Upload"))))};i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.4399336c.chunk.js.map