(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),s=n(6),l=n.n(s),r=(n(12),n(13),n(3)),a=n(7),i=n(0);function d(e){return Object(i.jsxs)("div",{className:"alert alert-primary",children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("h5",{children:[e.todo.sno,": ",e.todo.title]}),Object(i.jsxs)("h6",{children:["Description: ",e.todo.desc]})]}),Object(i.jsx)("div",{style:{textAlign:"right"},children:Object(i.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){e.onDel(e.todo)},children:"X"})})]})}function j(e){var t=Object(o.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],l=Object(o.useState)(""),a=Object(r.a)(l,2),d=a[0],j=a[1];return Object(i.jsx)("div",{onSubmit:function(t){t.preventDefault(),c&&d?(e.addingTodos(c,d),j(""),s("")):alert("Todo or Description can not be empty")},className:"my-3",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Todo"}),Object(i.jsx)("input",{type:"text",className:"form-control my-2",value:c,onChange:function(e){s(e.target.value)},id:"todo",placeholder:"Enter Todo"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Todo Descripton"}),Object(i.jsx)("input",{type:"tes=xt",className:"form-control my-2",value:d,onChange:function(e){j(e.target.value)},id:"desc",placeholder:"Todo Desc"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary btn-success",children:"Add Todo"})]})})}function u(){var e;function t(e){console.log("del todo ",e),l(s.filter((function(t){return t!==e})))}e=null===localStorage.getItem("allTodos")?[]:JSON.parse(localStorage.getItem("allTodos"));var n=Object(o.useState)(e),c=Object(r.a)(n,2),s=c[0],l=c[1];return Object(o.useEffect)((function(){localStorage.setItem("allTodos",JSON.stringify(s))}),[s]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(j,{addingTodos:function(e,t){var n={sno:s.length<=0?1:s[s.length-1].sno+1,title:e,desc:t,active:!0};console.log(n),l([].concat(Object(a.a)(s),[n]))}}),s.length<=0?Object(i.jsx)("div",{className:"alert alert-danger text-center",children:"No more Todos"}):s.map((function(e){return Object(i.jsx)(d,{todo:e,onDel:t},e.sno)}))]})}var b=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"alert alert-success text-center",role:"alert",children:"hello Ans"}),Object(i.jsx)(u,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),o(e),c(e),s(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.b010089e.chunk.js.map