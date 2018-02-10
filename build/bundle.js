module.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r=n(6);t.exports=r.fromExpress(n(3))},function(t,e){t.exports=require("boom")},function(t,e){t.exports=require("request")},function(t,e,n){var r=n(7),i=r(),o=n(4);i.get("/",function(t,e){e.header("Content-Type","text/html"),e.status(200).send(o())}),t.exports=i},function(t,e,n){var r=n(5);t.exports=function(t){var e=[],n=t||{};return function(t){e.push('<!DOCTYPE html><html><head><title>My Application</title><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"'+r.attr("content",""+t,!0,!0)+'><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.973/css/index.min.css"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/latest/index.css"></head><body class="a0-extension"><div class="container"><div class="row"><section class="content-page current"><div class="col-xs-12"><div id="my-application"><h1>Hello world!</h1></div></div></section></div></div></body></html>')}.call(this,"description"in n?n.description:"undefined"!=typeof description?description:void 0),e.join("")}},function(t,e,n){"use strict";function r(t){return null!=t&&""!==t}function i(t){return(Array.isArray(t)?t.map(i):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(r).join(" ")}e.merge=function t(e,n){if(1===arguments.length){for(var i=e[0],o=1;o<e.length;o++)i=t(i,e[o]);return i}var a=e.class,s=n.class;(a||s)&&(a=a||[],s=s||[],Array.isArray(a)||(a=[a]),Array.isArray(s)||(s=[s]),e.class=a.concat(s).filter(r));for(var c in n)"class"!=c&&(e[c]=n[c]);return e},e.joinClasses=i,e.cls=function(t,n){for(var r=[],o=0;o<t.length;o++)n&&n[o]?r.push(e.escape(i([t[o]]))):r.push(i(t[o]));var a=i(r);return a.length?' class="'+a+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,r,i){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(i?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(JSON.stringify(n).indexOf("&")!==-1&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var r=[],o=Object.keys(t);if(o.length)for(var a=0;a<o.length;++a){var s=o[a],c=t[s];"class"==s?(c=i(c))&&r.push(" "+s+'="'+c+'"'):r.push(e.attr(s,c,!1,n))}return r.join("")},e.escape=function(t){var e=String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return e===""+t?t:e},e.rethrow=function t(e,r,i,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&r||o))throw e.message+=" on line "+i,e;try{o=o||n(8).readFileSync(r,"utf8")}catch(n){t(e,null,i)}var a=3,s=o.split("\n"),c=Math.max(i-a,0),l=Math.min(s.length,i+a),a=s.slice(c,l).map(function(t,e){var n=e+c+1;return(n==i?"  > ":"    ")+n+"| "+t}).join("\n");throw e.path=r,e.message=(r||"Jade")+":"+i+"\n"+a+"\n\n"+e.message,e},e.DebugItem=function(t,e){this.lineno=t,this.filename=e}},function(t,e,n){function r(t){return function(e,n,r){var i=a(n.x_wt.jtn);return n.originalUrl=n.url,n.url=n.url.replace(i,"/"),n.webtaskContext=s(e),t(n,r)}}function i(t){var e;return t.ext("onRequest",function(t,n){var r=a(t.x_wt.jtn);t.setUrl(t.url.replace(r,"/")),t.webtaskContext=e}),function(n,r,i){var o=t._dispatch();e=s(n),o(r,i)}}function o(t){return function(e,n,r){var i=a(n.x_wt.jtn);return n.originalUrl=n.url,n.url=n.url.replace(i,"/"),n.webtaskContext=s(e),t.emit("request",n,r)}}function a(t){var e="^/api/run/[^/]+/",n="(?:[^/?#]*/?)?";return new RegExp(e+(t?n:""))}function s(t){function e(t,e,r){var i=n(1);"function"==typeof e&&(r=e,e={}),r(i.preconditionFailed("Storage is not available in this context"))}function r(e,r,i){var o=n(1),a=n(2);"function"==typeof r&&(i=r,r={}),a({uri:t.secrets.EXT_STORAGE_URL,method:"GET",headers:r.headers||{},qs:{path:e},json:!0},function(t,e,n){return t?i(o.wrap(t,502)):404===e.statusCode&&Object.hasOwnProperty.call(r,"defaultValue")?i(null,r.defaultValue):e.statusCode>=400?i(o.create(e.statusCode,n&&n.message)):void i(null,n)})}function i(t,e,r,i){var o=n(1);"function"==typeof r&&(i=r,r={}),i(o.preconditionFailed("Storage is not available in this context"))}function o(e,r,i,o){var a=n(1),s=n(2);"function"==typeof i&&(o=i,i={}),s({uri:t.secrets.EXT_STORAGE_URL,method:"PUT",headers:i.headers||{},qs:{path:e},body:r},function(t,e,n){return t?o(a.wrap(t,502)):e.statusCode>=400?o(a.create(e.statusCode,n&&n.message)):void o(null)})}return t.read=t.secrets.EXT_STORAGE_URL?r:e,t.write=t.secrets.EXT_STORAGE_URL?o:i,t}e.fromConnect=e.fromExpress=r,e.fromHapi=i,e.fromServer=e.fromRestify=o},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("fs")}]);