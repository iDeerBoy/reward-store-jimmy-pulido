(this["webpackJsonpreward-store"]=this["webpackJsonpreward-store"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(21),i=c.n(a),r=(c(28),c(29),c(15)),o=c(2),j=(c(30),c(5)),l=c.n(j),u=c(9),d=c(4);var b=function(e){var t=Object(s.useState)(e),c=Object(d.a)(t,2),n=c[0],a=c[1];return{state:n,setSwitch:function(){a(!n)},setTrue:function(){a(!0)},setFalse:function(){a(!1)}}},h=c(0),O=Object(s.createContext)({}),p=function(e){var t=Object(s.useState)({}),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(!1),r=Object(d.a)(i,2),o=r[0],j=r[1],p=b(!0);return Object(s.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),j(!0)}),[p.state]),Object(h.jsx)(O.Provider,{value:{userData:n,pointsUsed:p,userLoaded:o},children:e.children})},m=c.p+"static/media/logo.d1e853b7.svg";var x=function(){var e=Object(s.useContext)(O),t=e.userData,c=e.userLoaded;return Object(h.jsx)("header",{className:"header",children:c?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:m,alt:"logo"}),Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("p",{children:t.points})]}):Object(h.jsx)("p",{children:"cargando"})})},f=(c(33),Object(s.createContext)([])),g=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)([]),r=Object(d.a)(i,2),o=r[0],j=r[1],b=Object(s.useState)(!1),O=Object(d.a)(b,2),p=O[0],m=O[1],x=Object(s.useState)("All Categories"),g=Object(d.a)(x,2),v=g[0],A=g[1];return Object(s.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge-api.aerolab.co/products",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c),j(c),m(!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsx)(f.Provider,{value:{productsData:n,setProductsData:a,updateProducts:o,setUpdateProducts:j,stateProducts:p,category:v,setCategory:A},children:e.children})},v=c.p+"static/media/img-allCategories.7207b3e2.png";c(34);var A=function(e){var t=e.titel,c=e.to,s=e.btnClass;return Object(h.jsx)(r.b,{to:"/".concat(c),className:"BtnNavigation ".concat(s),children:t})},y=c(13),C=c(23),N=(c(40),c.p+"static/media/Arrow1.4f677cd3.svg"),M=c.p+"static/media/Arrow2.8804de2e.svg";c(41);var w=function(e){var t=e.name,c=e.category,n=e.img,a=e.cost,i=e._id,r=Object(s.useContext)(O),o=r.userData,j=r.pointsUsed,d=b(!1),p=a-o.points,m=b(!1),x=b(!1),f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a<=o.points)){e.next=12;break}return e.next=3,fetch("https://coding-challenge-api.aerolab.co/redeem",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4"},body:JSON.stringify({productId:i})});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),m.setTrue(),j.setSwitch(),e.next=14;break;case 12:x.setTrue(),setTimeout((function(){x.setFalse()}),1500);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{onMouseEnter:d.setSwitch,onMouseLeave:d.setSwitch,onClick:f,className:"card ".concat(m.state?"purchase":""),children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("h3",{children:c}),Object(h.jsx)("div",{className:"buyContainer",children:a>=o.points?Object(h.jsxs)("p",{children:["You need",Object(h.jsx)("br",{}),p," more."]}):Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJISURBVHgBtVc7UuNAEH0tjAMgMAmx9gZUkQN7AjYgAUytfIK1T7DsCVZ7AovChoBg4QTrjYioMhlkugFOMVhDt2T8AY1mLKRXNbbUPTOvu2d6pkWwgGq3a6hUNkG0x22XRS632lg9YFkfUdSHUv/p+PjKZk4yElarTX78MUNkmJFCNuAUjhPQwUGo7aYl7XSaPMlPa8I0A4ATOjw8TVWnkna7PhIvPw8in8lbRmJ1fh5wqL6jWAR0dNSYFThzpOJp8aQCjx36PSugGVKP/9ooE0q1qF73J8Tq4sJl4T9ububA9XVgawvY2JjKHh+BmxtOqgEsMMBw+IUajUES6ijyjKSC7e150jdjdnZgCUnPeNMmxER267q6upg8HU05H0idnX3jZP+b2qVaBfb3sTAuL4HnZ70+ir46WFrSx2kxT6YQg7PAR6+EejP3BDqYDObz3uFNVTzx2pqphyse68/ilRXkwvKyqUfNyVTn9dhinBDrMz/v5jKPiw+QUKs2r1U6TKFWqu/wDuuhaJgNZuLR6FqrLi+Pew5eXvrQrXM5axzy3XztyE3BL35ql4cH5ML9fZY2kJ9K/Dgc/hkXdfM5fXubtOIQMldcg8V5HHut1C+UDaVOmCucEMfkUhlwYYayoJTPHJOK82Ox1+kE1vezPbKLvdiSet0r1HPx9B1pKnFMLnXwaCSdQ+SHZEuTHWmlcmSN5BLF5d0uYfeQfC/ZEvqSKeNUxcLEc0Z0u3sctl1I4UAkd/j0o00io1SPS6grPD3dZRG+4RVObLhmc0QedwAAAABJRU5ErkJggg==",alt:"BuyIcon"})}),Object(h.jsx)("img",{src:n.url,alt:t}),m.state?Object(h.jsx)("p",{className:"cost",children:"Purchased"}):Object(h.jsx)("p",{className:"cost",children:a}),d.state&&o.points>=a&&Object(h.jsx)("div",{className:"redeem",children:Object(h.jsx)("p",{children:"Redeem"})}),x.state&&Object(h.jsx)("div",{className:"noRedeem",children:Object(h.jsxs)("p",{children:["You need",Object(h.jsx)("br",{}),"more credits"]})})]})};var S=function(e){var t=e.firstPage,c=e.Lowest,n=e.Highest;function a(e){var t=Object(C.a)(e);return c?t.sort((function(e,t){return e.cost-t.cost})):n?t.sort((function(e,t){return t.cost-e.cost})):c||n?void 0:e}var i=Object(s.useContext)(f),r=i.updateProducts,o=i.stateProducts,j=a(r).slice(0,16),l=a(r).slice(16,32),u=t.state?M:N;return Object(h.jsxs)("section",{className:"productList",id:"productList",children:[o?t.state?j.map((function(e){return Object(s.createElement)(w,Object(y.a)(Object(y.a)({},e),{},{key:e._id}))})):l.map((function(e){return Object(s.createElement)(w,Object(y.a)(Object(y.a)({},e),{},{key:e._id}))})):Object(h.jsx)("h2",{className:"loading",children:"Loading..."}),r.length>16&&Object(h.jsx)("div",{onClick:t.setSwitch,className:"btnContainer",children:Object(h.jsx)("a",{href:"#productList",children:Object(h.jsx)("div",{className:"btnPage",children:Object(h.jsx)("img",{src:u,alt:"arrow"})})})})]})};var I=function(){var e=Object(s.useContext)(f),t=e.productsData,c=e.setUpdateProducts,n=e.category,a=e.setCategory,i=b(!0),r=b(!1),o=b(!1);return Object(h.jsxs)("section",{className:"Home",children:[Object(h.jsxs)("div",{className:"navigation",children:[Object(h.jsx)("img",{src:v,alt:"categories"}),Object(h.jsx)("h1",{children:n}),Object(h.jsxs)("nav",{className:"navContainer",children:[Object(h.jsx)(A,{titel:"History",to:"History",btnClass:"btnBlue"}),Object(h.jsx)(A,{titel:"Credits",to:"Credits"})]})]}),Object(h.jsxs)("div",{className:"filterSection",children:[i.state?Object(h.jsx)("p",{children:"16 of 32 products"}):Object(h.jsx)("p",{children:"32 of 32 products"}),Object(h.jsxs)("div",{className:"filters",children:[Object(h.jsxs)("select",{name:"categories",onChange:function(e){var s=t.filter((function(t){return"All Categories"===e.target.value?t:t.category===e.target.value}));c(s),a(e.target.value),i.setTrue()},children:[Object(h.jsx)("option",{value:"All Categories",children:"All Categories"}),Object(h.jsx)("option",{value:"Laptops",children:"Laptops"}),Object(h.jsx)("option",{value:"Cameras",children:"Cameras"}),Object(h.jsx)("option",{value:"Audio",children:"Audio"}),Object(h.jsx)("option",{value:"Gaming",children:"Gaming"}),Object(h.jsx)("option",{value:"Phones",children:"Phones"})]}),Object(h.jsx)("div",{className:"btnOFF ".concat(r.state?"btnActive":""),onClick:function(){r.setSwitch(),o.setFalse()},children:"Lowest"}),Object(h.jsx)("div",{className:"btnOFF ".concat(o.state?"btnActive":""),onClick:function(){o.setSwitch(),r.setFalse()},children:"Highest"})]})]}),Object(h.jsx)(S,{firstPage:i,Lowest:r.state,Highest:o.state})]})};c(42);var E=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge-api.aerolab.co/user/history",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)("section",{className:"history",children:[Object(h.jsxs)("div",{className:"navigationHistory",children:[Object(h.jsx)("h1",{children:"History"}),Object(h.jsxs)("nav",{className:"navContainerH",children:[Object(h.jsx)(A,{titel:"Home",to:"reward-store-jimmy-pulido",btnClass:"btnBlue"}),Object(h.jsx)(A,{titel:"Credits",to:"reward-store-jimmy-pulido/Credits"})]})]}),Object(h.jsx)("div",{className:"historyList",children:c.length<=0?Object(h.jsxs)("p",{className:"historyEmpy",children:["Anything you buy",Object(h.jsx)("br",{}),"will appear here"]}):c.map((function(e,t){return Object(h.jsxs)("div",{className:"historyProduct",children:[Object(h.jsx)("img",{src:e.img.url,alt:e.name}),Object(h.jsx)("h2",{children:e.name}),Object(h.jsx)("h3",{children:e.category}),Object(h.jsx)("p",{children:e.cost})]},t)}))})]})};c(43);var k=function(e){var t=Object(s.useState)(e),c=Object(d.a)(t,2),n=c[0],a=c[1];return{state:n,setString:function(e){a(e.target.value)}}};var P=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],n=t[1],a=parseInt(c,10),i=k(""),r=k(""),o=k(""),j=Object(s.useState)(!1),b=Object(d.a)(j,2),p=b[0],m=b[1],x=Object(s.useState)(!1),f=Object(d.a)(x,2),g=f[0],v=f[1],y=Object(s.useContext)(O),C=y.userData,N=y.pointsUsed,M=function(e){n(e.target.value)},w=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge-api.aerolab.co/user/points",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4"},body:JSON.stringify({amount:a})});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),N.setSwitch();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("section",{className:"credits",children:[Object(h.jsxs)("div",{className:"navigationCredits",children:[Object(h.jsx)("h1",{children:"Buy credits"}),Object(h.jsxs)("div",{className:"navContainerC",children:[Object(h.jsx)(A,{titel:"Home",to:"reward-store-jimmy-pulido",btnClass:"btnBlue"}),Object(h.jsx)(A,{titel:"History",to:"reward-store-jimmy-pulido/History"})]})]}),Object(h.jsx)("div",{className:"formContainer",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),7!==o.state.length||i.state!==C.name||""===r.state||0===c?m(!0):(w(),m(!1),v(!0),setTimeout((function(){document.getElementById("buyCredits").reset(),v(!1)}),1500))},id:"buyCredits",children:[Object(h.jsx)("p",{children:"Your Nickname:"}),Object(h.jsx)("input",{type:"text",placeholder:"Your Nickname",onChange:i.setString}),Object(h.jsx)("p",{children:"Email:"}),Object(h.jsx)("input",{type:"email",placeholder:"Your Email",onChange:r.setString}),Object(h.jsx)("p",{children:"Credit card:"}),Object(h.jsx)("input",{type:"text",placeholder:"Min/Max 7 mumbers",onChange:o.setString}),Object(h.jsxs)("div",{className:"radioContainer",children:[Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsx)("input",{type:"radio",id:"1000",name:"getCredits",value:1e3,onClick:M}),Object(h.jsx)("label",{htmlFor:"1000",children:"1000"})]}),Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsx)("input",{type:"radio",id:"5000",name:"getCredits",value:5e3,onClick:M}),Object(h.jsx)("label",{htmlFor:"5000",children:"5000"})]}),Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsx)("input",{type:"radio",id:"7500",name:"getCredits",value:7500,onClick:M}),Object(h.jsx)("label",{htmlFor:"7500",children:"7500"})]})]}),p&&Object(h.jsx)("p",{className:"fail",children:"Revisa tus datos"}),g&&Object(h.jsx)("p",{className:"success",children:"Succesful transaction"}),Object(h.jsx)("button",{className:"buy",children:"Buy"})]})})]})};c(44);var J=function(){return Object(h.jsxs)("section",{className:"nofound",children:[Object(h.jsx)(A,{titel:"Home",to:"reward-store-jimmy-pulido"}),Object(h.jsx)("h1",{children:"404"}),Object(h.jsx)("p",{children:"PAGE NO FOUND"})]})},U=(c(45),c.p+"static/media/GitHub-Mark-02.a9914f8f.svg"),Y=c.p+"static/media/linkedin.7defd339.svg";var T=function(){return Object(h.jsxs)("section",{className:"footer",children:[Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("span",{children:"Design & Front end by:"})," Jimmy Alejandro"]}),Object(h.jsx)("a",{href:"https://github.com/iDeerBoy?tab=repositories",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:U,alt:"github logo"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jimmy-pulido/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:Y,alt:"linkein logo"})})]})};var B=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"appContainer",children:[Object(h.jsx)(x,{}),Object(h.jsx)(r.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/reward-store-jimmy-pulido",component:I}),Object(h.jsx)(o.a,{exact:!0,path:"/reward-store-jimmy-pulido/History",component:E}),Object(h.jsx)(o.a,{exact:!0,path:"/reward-store-jimmy-pulido/Credits",component:P}),Object(h.jsx)(o.a,{component:J})]})}),Object(h.jsx)(T,{})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(p,{children:Object(h.jsx)(g,{children:Object(h.jsx)(B,{})})})}),document.getElementById("root")),F()}},[[46,1,2]]]);
//# sourceMappingURL=main.fa7172df.chunk.js.map