(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,c,n){},11:function(e,c,n){"use strict";n.r(c);var t=n(1),r=n.n(t),i=n(4),a=n.n(i),s=n(2),o=n(0);var l=function(e){return Object(o.jsxs)("div",{className:"card "+(e.Clicked?"animate":""),onClick:function(){return e.handleClick(e.id)},children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{alt:e.name,src:e.image})}),Object(o.jsx)("div",{className:"img-content",children:Object(o.jsx)("ul",{children:Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Name:"}),e.name]})})})]})};var j=function(e){return Object(o.jsx)("div",{className:"wrapper",children:e.children})};var d=function(e){return Object(o.jsx)("header",{className:"container-fluid fixed-top",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h1",{className:"col-sm-8",children:"Memory Game"}),Object(o.jsxs)("nav",{className:"col-sm-4",children:[Object(o.jsxs)("p",{children:["Score: ",Object(o.jsx)("span",{children:e.currentScore})]}),Object(o.jsxs)("p",{children:["Top Score: ",Object(o.jsx)("span",{children:e.highScore})," "]}),e.children]})]})})};var u=function(e){return Object(o.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(o.jsxs)("div",{className:"container",children:[e.children,Object(o.jsx)("p",{className:"lead",children:"Get points by clicking on an image but don't click on any more than once!"})]})})},h=(n(10),function(){var e=Object(t.useState)([]),c=Object(s.a)(e,2),n=c[0],r=c[1],i=Object(t.useState)(0),a=Object(s.a)(i,2),h=a[0],b=a[1],m=Object(t.useState)(0),O=Object(s.a)(m,2),f=O[0],x=O[1],p=Object(t.useState)(!1),v=Object(s.a)(p,2),g=v[0],k=v[1];Object(t.useEffect)((function(){fetch("characters.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),console.log("data",n);var N=function(e){y(),S(e)},S=function(e){n.forEach((function(c){e===c.id&&!1===c.clicked?(c.clicked=!0,k(!1),C(),console.log(n)):e===c.id&&!0===c.clicked&&(f>h&&b(f),x(0),k(!0),n.forEach((function(e){return e.clicked=!1})),console.log(n))}))},y=function(){var e=w(n);r(e)},C=function(){x(f+1)},w=function(e){for(var c,n,t=e.length;--t>0;)n=e[c=Math.floor(Math.random()*(t+1))],e[c]=e[t],e[t]=n;return e};return Object(o.jsxs)(j,{children:[Object(o.jsx)(d,{currentScore:f,highScore:h}),Object(o.jsx)(u,{}),n.map((function(e){return Object(o.jsx)(l,{Clicked:g,handleClick:N,id:e.id,name:e.name,image:e.image,occupation:e.occupation},e.id)}))]})});a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5bbc2f1b.chunk.js.map