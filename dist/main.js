!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=[];function c(){a.forEach(e=>{const t=document.querySelector("#all-projects"),n=document.createElement("div");n.classList.add("project-text"),n.classList.add("project-container"),!0===e.active&&n.classList.add("active");const a=document.createElement("div");a.textContent=e.name;const c=document.createElement("img");c.src="images/icons8-trash-1.svg",c.classList.add("utility-btn"),n.appendChild(a),n.appendChild(c),t.appendChild(n)})}function d(){let e=a.filter(e=>!0===e.active),t=e[0].name,n=e[0].description;const c=document.querySelector("#project-name"),d=document.querySelector("[name=edit-project-name]"),o=document.querySelector("#project-description"),s=document.querySelector("[name=edit-project-description");c.textContent=t,d.value=t,o.textContent=n,s.value=n}function o(){a.forEach(e=>{e.toDoItems.forEach(t=>{!0===e.active&&function(e){const t=document.querySelector("#all-tasks"),n=document.createElement("div");n.classList.add("to-do");const a=document.createElement("div");a.classList.add("task-container");const c=document.createElement("div");c.classList.add("horizontal-flex");const d=document.createElement("div");d.classList.add("checkbox");const o=document.createElement("div");o.textContent=e.name,o.classList.add("task-name"),c.appendChild(d),c.appendChild(o);const s=document.createElement("div");s.classList.add("horizontal-flex");const i=document.createElement("div");i.classList.add("date-text"),i.textContent=e.dueDate;const l=document.createElement("img");l.classList.add("utility-btn"),l.classList.add("edit-task"),l.src="images/pen.svg";const r=document.createElement("img");r.classList.add("utility-btn"),r.classList.add("delte-task"),r.src="images/icons8-trash-1.svg",s.appendChild(i),s.appendChild(l),s.appendChild(r),a.appendChild(c),a.appendChild(s);const u=document.createElement("div");u.classList.add("w-form"),u.classList.add("edit-task-form");const m=document.createElement("form");m.classList.add("flex-form");const p=document.createElement("input");p.classList.add("w-input"),p.classList.add("edit-task-name");const f=document.createElement("div");f.classList.add("horizontal-flex");const v=document.createElement("button");v.classList.add("w-button"),v.classList.add("submit-btn"),v.classList.add("edit-task"),v.textContent="Submit",v.min;const h=document.createElement("div");h.classList.add("cancel-btn"),h.classList.add("task-edit"),h.textContent="Cancel",f.appendChild(v),f.appendChild(h),m.appendChild(p),m.appendChild(f),u.appendChild(m),n.appendChild(a),n.appendChild(u),t.appendChild(n)}(t)})})}var s,i;s="project 1",i="description 1",a.forEach(e=>{e.active=!1}),a.push({name:s,description:i,toDoItems:[],active:!0}),((e,t)=>{a.filter(e=>!0===e.active)[0].toDoItems.push({name:e,dueDate:t,active:!0,complete:!1})})("hello old pal"),console.log(a),c(),d(),o()}]);