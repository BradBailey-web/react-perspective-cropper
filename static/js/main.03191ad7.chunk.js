(this["webpackJsonpreact-perspective-cropper-example"]=this["webpackJsonpreact-perspective-cropper-example"]||[]).push([[0],{137:function(e,t,r){e.exports=r(270)},138:function(e,t,r){},150:function(e,t,r){},270:function(e,t,r){"use strict";r.r(t);r(138);var n=r(0),a=r.n(n),o=r(20),i=r.n(o),c=r(62),l=r.n(c),u=r(82),s=r(88),p=r(276),h=r(50),m=r(275),d=r(279),f=r(280),b=r(83),v=r(6),g=r.n(v),y=r(115),E=r.n(y);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var x=function(e){var t,r,o=e.cropPoints,i=e.pointArea,c=e.defaultPosition,l=e.pointSize,u=e.pointColor,s=void 0===u?"#3cabe2":u,p=e.onStop,h=e.onDrag,m=e.bounds,d=Object(n.useCallback)((function(e,t){h(w({},t,{x:t.x+l/2,y:t.y+l/2}),i)}),[h]),f=Object(n.useCallback)((function(e,t){p(w({},t,{x:t.x+l/2,y:t.y+l/2}),i,o)}),[h,o]);return a.a.createElement(E.a,{bounds:m,defaultPosition:c,position:{x:o[i].x-l/2,y:o[i].y-l/2},onDrag:d,onStop:f},a.a.createElement("div",{style:(t=l,r=s,{width:t,height:t,backgroundColor:r,borderRadius:"100%",position:"absolute",zIndex:1001})}))};x.propTypes={cropPoints:g.a.shape({"left-top":g.a.shape({x:g.a.number,y:g.a.number}).isRequired,"right-top":g.a.shape({x:g.a.number,y:g.a.number}).isRequired,"right-bottom":g.a.shape({x:g.a.number,y:g.a.number}).isRequired,"left-bottom":g.a.shape({x:g.a.number,y:g.a.number}).isRequired}),pointArea:g.a.oneOf(["left-top","right-top","right-bottom","left-bottom"]),defaultPosition:g.a.shape({x:g.a.number,y:g.a.number}),pointSize:g.a.number,pointColor:g.a.string,onStop:g.a.func,onDrag:g.a.func};var C=function(e){var t=e.previewDims,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["previewDims"]);return a.a.createElement(n.Fragment,null,a.a.createElement(x,w({pointArea:"left-top",defaultPosition:{x:0,y:0}},r)),a.a.createElement(x,w({pointArea:"right-top",defaultPosition:{x:t.width,y:0}},r)),a.a.createElement(x,w({pointArea:"right-bottom",defaultPosition:{x:0,y:t.height}},r)),a.a.createElement(x,w({pointArea:"left-bottom",defaultPosition:{x:t.width,y:t.height}},r)))};C.propTypes={previewDims:g.a.shape({ratio:g.a.number,width:g.a.number,height:g.a.number})};var R=function(e){var t=e.cropPoints,r=e.previewDims,o=e.lineWidth,i=void 0===o?3:o,c=e.lineColor,l=void 0===c?"#3cabe2":c,u=Object(n.useRef)(),s=Object(n.useCallback)((function(){u.current.getContext("2d").clearRect(0,0,r.width,r.height)}),[u.current,r]),p=Object(n.useCallback)((function(){return["left-top","right-top","right-bottom","left-bottom"].reduce((function(e,r){return[].concat(e,[t[r]])}),[])}),[t]),h=Object(n.useCallback)((function(e){var t=u.current.getContext("2d");t.lineWidth=i,t.strokeStyle=l,t.beginPath(),e.forEach((function(r,n){if(0===n&&t.moveTo(r.x,r.y),n!==e.length-1){var a=e[n+1];t.lineTo(a.x,a.y)}else t.closePath()})),t.stroke()}),[u.current]);return Object(n.useEffect)((function(){if(t&&u.current){s();var e=p();h(e)}}),[t,u.current]),a.a.createElement("canvas",{ref:u,style:{position:"absolute",zIndex:5,width:r.width,height:r.height},width:r.width,height:r.height})};R.propTypes={previewDims:g.a.shape({ratio:g.a.number,width:g.a.number,height:g.a.number}),cropPoints:g.a.shape({"left-top":g.a.shape({x:g.a.number,y:g.a.number}).isRequired,"right-top":g.a.shape({x:g.a.number,y:g.a.number}).isRequired,"right-bottom":g.a.shape({x:g.a.number,y:g.a.number}).isRequired,"left-bottom":g.a.shape({x:g.a.number,y:g.a.number}).isRequired}),lineColor:g.a.string,lineWidth:g.a.number};var O,j=function(e){return{width:e.width,height:e.height}},P={width:0,height:0},S=function(e){var t,r,o,i,c,l,u=e.image,s=e.onDragStop,p=e.onChange,h=e.cropperRef,m=e.pointSize,d=void 0===m?20:m,f=e.lineWidth,v=e.pointColor,g=e.lineColor,y=e.maxWidth,E=e.maxHeight,x=Object(b.b)(),S=x.loaded,k=x.cv,A=Object(n.useRef)(),T=Object(n.useRef)(),D=Object(n.useState)(),_=D[0],I=D[1],M=Object(n.useState)(),z=M[0],H=M[1],B=Object(n.useState)(!1),N=B[0],q=B[1],L=Object(n.useState)("crop"),F=L[0],W=L[1];Object(n.useImperativeHandle)(h,(function(){return{backToCrop:function(){W("crop")},done:function(e){void 0===e&&(e={});try{return Promise.resolve(new Promise((function(t){q(!0),function(e,t,r,n,a){var o,i,c=e.imread(t),l=r["right-bottom"],u=r["left-bottom"],s=r["right-top"],p=r["left-top"],h=[p,s,l,u].map((function(e){return[e.x/n,e.y/n]})),m=Math.max(l.x-u.x,s.x-p.x)/n,d=Math.max(u.y-p.y,l.y-s.y)/n,f=[[0,0],[m-1,0],[m-1,d-1],[0,d-1]],b=e.matFromArray(4,1,e.CV_32FC2,(o=[]).concat.apply(o,h)),v=e.matFromArray(4,1,e.CV_32FC2,(i=[]).concat.apply(i,f)),g=e.getPerspectiveTransform(b,v),y=new e.Size(m,d);e.warpPerspective(c,c,g,y,e.INTER_LINEAR,e.BORDER_CONSTANT,new e.Scalar),e.imshow(t,c),c.delete(),b.delete(),v.delete(),g.delete(),a()}(k,A.current,z,O,G),function(e,t,r){try{var n=w({blur:!1,th:!0,thMode:e.ADAPTIVE_THRESH_MEAN_C,thMeanCorrection:15,thBlockSize:25,thMax:255,grayScale:!0},r),a=e.imread(t);if(n.grayScale&&e.cvtColor(a,a,e.COLOR_RGBA2GRAY,0),n.blur){var o=new e.Size(5,5);e.GaussianBlur(a,a,o,0,0,e.BORDER_DEFAULT)}n.th&&(n.grayScale?e.adaptiveThreshold(a,a,n.thMax,n.thMode,e.THRESH_BINARY,n.thBlockSize,n.thMeanCorrection):(a.convertTo(a,-1,1,60),e.threshold(a,a,170,255,e.THRESH_BINARY))),e.imshow(t,a),Promise.resolve()}catch(i){return Promise.reject(i)}}(k,A.current,e.filterCvParams),e.preview&&W("preview"),A.current.toBlob((function(e){t(e),q(!1)}),u.type)})))}catch(t){return Promise.reject(t)}}}})),Object(n.useEffect)((function(){"preview"===F&&Y()}),[F]);var G=function(){var e=function(e,t,r,n){var a=e/t,o=window.innerWidth||r,i=window.innerHeight||n,c={width:o,height:Math.round(o/a),ratio:a};return c.height>i&&(c.height=i,c.width=Math.round(i*a)),c}(A.current.width,A.current.height,y,E);I(e),T.current.width=e.width,T.current.height=e.height,O=e.width/A.current.width},Y=function(e){var t=e||k.imread(A.current),r=new k.Mat,n=new k.Size(0,0);k.resize(t,r,n,O,O,k.INTER_AREA),k.imshow(T.current,r),t.delete(),r.delete()};Object(n.useEffect)((function(){p&&p(w({},z,{loading:N}))}),[z,N]),Object(n.useEffect)((function(){u&&T.current&&S&&"crop"===F?function(){try{return Promise.resolve((e=u,e instanceof File?new Promise((function(t,r){var n=new FileReader;n.onload=function(e){t(n.result)},n.onerror=function(e){r(e)},n.readAsDataURL(e)})):"string"===typeof e?Promise.resolve(e):void 0)).then((function(e){return Promise.resolve(function(e){return new Promise((function(t,r){var n=document.createElement("img");n.onload=function(){try{return A.current=document.createElement("canvas"),A.current.width=n.width,A.current.height=n.height,A.current.getContext("2d").drawImage(n,0,0),P.width=A.current.width,P.height=A.current.height,G(),t(),Promise.resolve()}catch(e){return Promise.reject(e)}},n.src=e}))}(e)).then((function(){Y(),function(){var e=k.imread(A.current),t=new k.Size(5,5);k.cvtColor(e,e,k.COLOR_RGBA2GRAY,0),k.GaussianBlur(e,e,t,0,0,k.BORDER_DEFAULT),k.Canny(e,e,75,200),k.threshold(e,e,120,200,k.THRESH_BINARY);var r=new k.MatVector,n=new k.Mat;k.findContours(e,r,n,k.RETR_CCOMP,k.CHAIN_APPROX_SIMPLE);var a=k.boundingRect(e);e.delete(),n.delete(),r.delete(),Object.keys(a).forEach((function(e){a[e]=a[e]*O}));var o={"left-top":{x:a.x,y:a.y},"right-top":{x:a.x+a.width,y:a.y},"right-bottom":{x:a.x+a.width,y:a.y+a.height},"left-bottom":{x:a.x,y:a.y+a.height}};H(o)}(),q(!1)}))}))}catch(t){return Promise.reject(t)}var e}():q(!0)}),[u,T.current,S,F]);var U=Object(n.useCallback)((function(e,t){var r=e.x,n=e.y;H((function(e){var a;return w({},e,((a={})[t]={x:r,y:n},a))}))}),[]),V=Object(n.useCallback)((function(e,t,r){var n,a=e.x,o=e.y;(H((function(e){var r;return w({},e,((r={})[t]={x:a,y:o},r))})),s)&&s(w({},r,((n={})[t]={x:a,y:o},n)))}),[]);return a.a.createElement("div",{style:w({position:"relative"},_&&j(_))},_&&"crop"===F&&z&&a.a.createElement(C,{pointSize:d,pointColor:v,cropPoints:z,previewDims:_,onDrag:U,onStop:V,bounds:{left:(null===T||void 0===T||null===(t=T.current)||void 0===t?void 0:t.offsetLeft)-d/2,top:(null===T||void 0===T||null===(r=T.current)||void 0===r?void 0:r.offsetTop)-d/2,right:(null===T||void 0===T||null===(o=T.current)||void 0===o?void 0:o.offsetLeft)-d/2+(null===T||void 0===T||null===(i=T.current)||void 0===i?void 0:i.offsetWidth),bottom:(null===T||void 0===T||null===(c=T.current)||void 0===c?void 0:c.offsetTop)-d/2+(null===T||void 0===T||null===(l=T.current)||void 0===l?void 0:l.offsetHeight)}}),_&&"crop"===F&&z&&a.a.createElement(R,{previewDims:_,cropPoints:z,lineWidth:f,lineColor:g}),a.a.createElement("canvas",{style:{zIndex:5,pointerEvents:"none"},ref:T}))};S.propTypes={image:g.a.object.isRequired,onDragStop:g.a.func,onChange:g.a.func,cropperRef:g.a.shape({current:g.a.shape({done:g.a.func.isRequired,backToCrop:g.a.func.isRequired})}),pointSize:g.a.number,lineWidth:g.a.number,pointColor:g.a.string,lineColor:g.a.string};var k=a.a.forwardRef((function(e,t){return e.image?a.a.createElement(b.a,{openCvPath:"./opencv/opencv.js"},a.a.createElement(S,w({},e,{cropperRef:t}))):null})),A=(r(150),r(277)),T=r(278),D=r(87),_=r.n(D),I=function(){return a.a.createElement("div",{className:"site-page-header"},a.a.createElement(A.a,{ghost:!1,title:"react-perspective-cropper"},a.a.createElement(T.b,{size:"small",column:2},a.a.createElement(T.b.Item,{label:"Package"},a.a.createElement("a",{href:"https://www.npmjs.com/package/react-perspective-cropper"},a.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/react-perspective-cropper.svg"})),a.a.createElement("a",{href:"https://standardjs.com"},a.a.createElement("img",{alt:"standardjs",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}))),a.a.createElement(T.b.Item,{label:"Description"},a.a.createElement(_.a,null,"React component performing border detection, perspective correction and simple image filters over a provided image \ud83d\udcf2 \ud83d\udcf8")),a.a.createElement(T.b.Item,{label:"Created by"},"Giacomo Cerquone from",a.a.createElement("span",{"aria-label":"italy flag",role:"img",style:{margin:"0 10px"}},"\ud83c\uddee\ud83c\uddf9"),"with"," ",a.a.createElement("span",{"aria-label":"heart",role:"img",style:{margin:"0 10px"}},"\u2764\ufe0f")),a.a.createElement(T.b.Item,{label:"Info"},a.a.createElement(_.a,null,"Make sure to only use HiRes images!",a.a.createElement("br",null),a.a.createElement("b",null,a.a.createElement("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/giacomocerquone/react-perspective-cropper/blob/master/gifs/example-img.jpg?raw=true"},"You could use this image for example.")))))))},M=p.a.Dragger,z=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(),c=Object(s.a)(i,2),p=c[0],b=c[1],v=Object(n.useRef)(),g=Object(n.useCallback)((function(e){return o(e)}),[]),y=Object(n.useCallback)((function(e){return o(e)}),[]),E=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CropState",r),e.prev=1,e.next=4,v.current.done({preview:!0,filterCvParams:{thMeanCorrection:13,thMode:window.cv.ADAPTIVE_THRESH_GAUSSIAN_C}});case 4:t=e.sent,console.log("Cropped and filtered image",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),w={name:"file",multiple:!1,onChange:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fileList&&t.fileList.length>0&&b(t.fileList[0].originFileObj);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return a.a.createElement("div",{className:"root-container"},a.a.createElement(I,null),a.a.createElement("div",{className:"content-container"},r&&a.a.createElement("div",{className:"buttons-container"},a.a.createElement(h.a,{onClick:E,icon:a.a.createElement(d.a,null)},"Done"),a.a.createElement(h.a,{onClick:function(){v.current.backToCrop()}},"Back"),a.a.createElement(h.a,{onClick:function(){b(void 0),o()}},"Reset")),a.a.createElement(k,{ref:v,image:p,onChange:y,onDragStop:g}),(null===r||void 0===r?void 0:r.loading)&&a.a.createElement(m.a,null),!p&&a.a.createElement(M,w,a.a.createElement("p",null,a.a.createElement(f.a,null)),a.a.createElement("p",null,"Upload"))))};i.a.render(a.a.createElement(z,null),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.03191ad7.chunk.js.map