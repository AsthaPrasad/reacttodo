(this["webpackJsonptodod-list"]=this["webpackJsonptodod-list"]||[]).push([[0],{14:function(t,e,o){"use strict";o.r(e);var c=o(1),n=o.n(c),r=o(7),d=o.n(r),i=o(8),a=o(6),j=o(4),l=o(0),u=function(t){var e=t.todo,o=t.toggleTodo;return Object(l.jsx)("li",{children:Object(l.jsxs)("label",{style:{textDecoration:e.complete?"line-through":void 0},children:[Object(l.jsx)("input",{type:"checkbox",checked:e.complete,onClick:function(){o(e)}})," ",e.text]})})},s=function(t){var e=t.todos,o=t.toggleTodo;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)(u,{todo:t,toggleTodo:o},t.text)}))})},b=function(t){var e=t.addTodo,o=Object(c.useState)(""),n=Object(j.a)(o,2),r=n[0],d=n[1];return Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",value:r,onChange:function(t){d(t.target.value)}}),Object(l.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e(r),d("")},children:"Add Todo"})]})},p=[{text:"Walk the dog",complete:!1},{text:"Write app",complete:!0}];var x=function(){var t=Object(c.useState)(p),e=Object(j.a)(t,2),o=e[0],n=e[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{todos:o,toggleTodo:function(t){var e=o.map((function(e){return e===t?Object(a.a)(Object(a.a)({},e),{},{complete:!e.complete}):e}));n(e)}}),Object(l.jsx)(b,{addTodo:function(t){var e={text:t,complete:!1};n([].concat(Object(i.a)(o),[e]))}})]})};d.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.83c5adc6.chunk.js.map