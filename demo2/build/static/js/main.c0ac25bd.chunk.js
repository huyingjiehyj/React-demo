(this.webpackJsonpmyapp2=this.webpackJsonpmyapp2||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),l=n.n(o),r=n(15),u=n(16),i=n(19),m=n(18),p=function(e){return c.a.createElement("ul",null,e.data.map((function(e){return c.a.createElement("li",{key:e.id},e.title)})))},s=function(e){return c.a.createElement("div",null,[1,2,3,4,5].map((function(t){return c.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},E=(a.Component,n(20)),d=n(1),f=n(3),h=(n(26),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(f.b,{activeClassName:"active",exact:!0,to:"/"},"React"),c.a.createElement(f.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),c.a.createElement(f.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),c.a.createElement(f.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),c.a.createElement(f.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),v=function(e){return console.log(e),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))},b=(n(32),[{path:"/",exact:!0,component:v},{path:"/doc",component:Object(d.g)((function(e){var t=e.routes;return c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},t.map((function(e,t){return c.a.createElement(k,Object.assign({key:t},e))})),c.a.createElement(d.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/hooks"},"Hooks"))))})),pri:!0,routes:[{path:"/doc/core",component:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Core"))}},{path:"/doc/guide",component:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Guide"))}},{path:"/doc/api",component:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Api"))}},{path:"/doc/hooks",component:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Hooks"))}}]},{path:"/tuto",component:function(){return c.a.createElement("div",null,"Tuto")},pri:!0},{path:"/blog",component:function(){return c.a.createElement("div",null,"Blog")}},{path:"/comm",component:function(){return c.a.createElement("div",null,"Comm")}},{path:"/login",component:function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))}}]);function g(e){var t=e.component,n=Object(E.a)(e,["component"]);return c.a.createElement(d.b,Object.assign({},n,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?c.a.createElement(t,n):c.a.createElement(d.a,{to:{pathname:"/login",state:a}})}}))}function k(e){return e.pri?c.a.createElement(g,e):c.a.createElement(d.b,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var C=function(){return c.a.createElement(f.a,null,c.a.createElement(h,null),c.a.createElement(d.d,null,b.map((function(e,t){return c.a.createElement(k,Object.assign({key:t},e))}))))};l.a.render(c.a.createElement(C,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c0ac25bd.chunk.js.map