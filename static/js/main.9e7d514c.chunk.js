(this["webpackJsonpheeko-login"]=this["webpackJsonpheeko-login"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(6),o=n.n(c),r=(n(11),n(3)),i=n(5),l=n(2),j=function(e){var t=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return{output:t.test(e)||/^[0-9 ]{10}$/.test(e),isAnEmail:!!t.test(e)}},d=(n(12),n(0)),u=function(e){var t=e.handleForgotPassword,n=Object(s.useState)(""),a=Object(l.a)(n,2),c=a[0],o=a[1],r=Object(s.useState)({}),i=Object(l.a)(r,2),u=i[0],p=i[1];return Object(d.jsxs)("div",{className:"forgotPasswordRoot",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"forgotPasswordBlock",children:[Object(d.jsx)("p",{className:"forgotPopupClose",onClick:function(){return t(!1),void p({})},children:"Close"}),Object(d.jsx)("p",{children:"Enter your email id"}),Object(d.jsx)("input",{type:"text",name:"emailOrPhone",placeholder:"Email address or phone number",value:c,onChange:function(e){var t=e.target.value;o(t)}}),Object(d.jsx)("button",{className:"retrieveButton",onClick:function(){var e=j(c);e.output?fetch("https://heeko-backend.herokuapp.com/api/forgotPassword",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({input:c,isAnEmail:e.isAnEmail})}).then((function(e){return e.json()})).then((function(e){return p(e.output)})):alert("Enter proper email/phone")},children:"Retrieve Password"})]})}),Object.keys(u).length>0&&Object(d.jsx)("div",{className:"retrievedDetails",children:u.email.length>0?Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"retrievedDetailsHeader",children:"Details below:"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"retrieveDetailsSpan",children:"Email:"})," ",u.email]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"retrieveDetailsSpan",children:"Phone:"})," ",u.phoneNumber]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"retrieveDetailsSpan",children:"Password:"})," ",u.password]})]}):Object(d.jsx)("p",{children:"No Details matched!"})})]})},p=(n(14),function(){var e=Object(s.useState)({emailOrPhone:"",password:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)({}),o=Object(l.a)(c,2),p=(o[0],o[1]),h=Object(s.useState)(!1),b=Object(l.a)(h,2),O=b[0],m=b[1],g=function(e){var t=e.target.name,n=e.target.value;a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t,n))}))},x=function(e){m(e)};return Object(d.jsxs)("div",{className:"loginRoot",children:[Object(d.jsxs)("div",{className:"loginBlock "+(O?"dimBackground":""),children:[Object(d.jsxs)("div",{className:"loginForm",children:[Object(d.jsx)("input",{type:"text",name:"emailOrPhone",placeholder:"Email address or phone number",value:n.emailOrPhone,onChange:g}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:n.password,onChange:g}),Object(d.jsx)("button",{className:"loginButton",onClick:function(){var e=j(n.emailOrPhone);e.output?fetch("https://heeko-backend.herokuapp.com/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({input:n.emailOrPhone,password:n.password,isAnEmail:e.isAnEmail})}).then((function(e){return e.json()})).then((function(e){p(e),alert("Login successfull")})):alert("Wrong email/phone Number")},children:"Log In"}),Object(d.jsx)("p",{className:"forgotPasswordLink",onClick:function(){return x(!0)},children:"Forgotten password?"})]}),Object(d.jsx)("div",{className:"seperator",children:Object(d.jsx)("p",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"createAccountButton",children:"Create new account"})})]}),O&&Object(d.jsx)(u,{handleForgotPassword:x})]})});n(15);var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),b()}],[[16,1,2]]]);
//# sourceMappingURL=main.9e7d514c.chunk.js.map