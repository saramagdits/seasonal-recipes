!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const o=new class{constructor(){this.print="hello from date class"}queryMonth(){return(new Date).getUTCMonth()}},n=new class{constructor(){this.print="Hello from the produce class"}queryProduce(e){return fetch(`http://localhost:3000/produce?month=${e}`,{method:"GET"}).then(e=>e.json()).then(e=>e).catch(e=>console.log(e))}},c=new class{constructor(){this.print="Hello from the recipe class"}queryRecipes(e){return fetch(`http://localhost:3000/recipes?ing=${e}`).then(e=>e.json().then(e=>e)).catch(e=>console.log(e))}},i=new class{constructor(){this.print="Hello from the UI class",this.produceContainer=document.querySelector("#produceContainer"),this.produceList=document.querySelector(".produceList"),this.recipeContainer=document.querySelector("#recipeContainer"),this.recipeList=document.querySelector(".recipeList")}displayProduce(e){let t="";e.produce.forEach(e=>{t+=`<li>${e}</li>`}),this.produceList.innerHTML=t}displayRecipes(e){let t="";e.hits.forEach(e=>{t+=`<li>${e.recipe.label}</li>`}),this.recipeList.innerHTML=t}};document.addEventListener("DOMContentLoaded",function(){const e=o.queryMonth();n.queryProduce(e).then(e=>{i.displayProduce(e)})}),document.querySelector("#searchRecipesBtn").addEventListener("click",function(){c.queryRecipes("okra").then(e=>i.displayRecipes(e))}),console.log(o.print),console.log(n.print),console.log(c.print),console.log(i.print)}]);