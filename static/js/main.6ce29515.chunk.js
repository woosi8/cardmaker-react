(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__1o9Pf",list:"login_list__uzB3B",item:"login_item__3bzXk",button:"login_button__Z762E"}},16:function(e,t,a){e.exports={makerGreen:"#385461",makerBlack:"black",makerWhite:"white",header:"header_header__4txbQ",logo:"header_logo__1QtGk",title:"header_title__1MQfW",logout:"header_logout__2ubf_"}},21:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",footer:"footer_footer__1o0r0",title:"footer_title__1We8M"}},24:function(e,t,a){e.exports={makerGreen:"#385461",editor:"editor_editor__SZrpb",title:"editor_title__3xNKl"}},25:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3S_AF",title:"preview_title__1lIN8"}},26:function(e,t,a){e.exports={mediaQuery:"62rem",maker:"maker_maker__1AIl3",container:"maker_container__3LMTn"}},31:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__3mqhr"}},40:function(e,t,a){e.exports={makerBlack:"black"}},46:function(e,t,a){},47:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"card_login__1Gg5i",list:"card_list__2z7pZ",item:"card_item__3LJMi",button:"card_button__3Mwyr"}},51:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),r=a(30),c=a.n(r),s=(a(40),a(31)),o=a.n(s),l=a(18),u=a(8),m=a(21),_=a.n(m),h=a(4),j=function(){return Object(h.jsx)("footer",{className:_.a.footer,children:Object(h.jsx)("p",{className:_.a.title,children:"Code your dream"})})},d=a(16),b=a.n(d),f=function(e){var t=e.onLogout;return Object(h.jsxs)("header",{className:b.a.header,children:[t&&Object(h.jsx)("button",{className:b.a.logout,onClick:t,children:"Logout"}),Object(h.jsx)("img",{className:b.a.logo,src:"/cardmaker-react/images/logo.png",alt:"logo"}),Object(h.jsx)("h1",{className:b.a.title,children:"Business Card Maker"})]})},g=a(13),O=a.n(g),p=function(e){var t=e.authService,a=Object(u.f)(),i=function(e){a.push({pathname:"/maker",state:{id:e}})},r=function(e){t.login(e.currentTarget.textContent).then((function(e){return i(e.user.uid)}))};return Object(n.useEffect)((function(){t.onAuthChange((function(e){e&&i(e.uid)}))})),Object(h.jsxs)("section",{className:O.a.login,children:[Object(h.jsx)(f,{}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("ul",{className:O.a.list,children:[Object(h.jsx)("li",{className:O.a.item,children:Object(h.jsx)("button",{className:O.a.button,onClick:r,children:"Google"})}),Object(h.jsx)("li",{className:O.a.item,children:Object(h.jsx)("button",{className:O.a.button,onClick:r,children:"Github"})})]})]}),Object(h.jsx)(j,{})]})},x=a(35),k=(a(46),function(e){var t=e.card;return Object(h.jsx)("h1",{children:t.id})}),v=a(24),E=a.n(v),S=function(e){var t=e.cards;return Object(h.jsxs)("section",{className:E.a.editor,children:[Object(h.jsx)("h1",{className:E.a.title,children:"Card Maker"}),t.map((function(e){return Object(h.jsx)(k,{card:e})}))]})},A=(a(47),function(e){var t=e.card;return Object(h.jsx)("h1",{children:t.id})}),N=a(25),R=a.n(N),B=function(e){var t=e.cards;return Object(h.jsxs)("section",{className:R.a.preview,children:[Object(h.jsx)("h1",{className:R.a.title,children:"Card Preview"}),t.map((function(e){return Object(h.jsx)(A,{card:e})}))]})},C=a(26),P=a.n(C),w=function(e){var t=e.authService,a=Object(n.useState)([{id:"1",company:"Samsung",theme:"light",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",firstName:"ellie1",fileURL:""},{id:"2",company:"Samsung",theme:"light",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",firstName:"ellie2",fileURL:""},{id:"3",company:"Samsung",theme:"light",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",firstName:"ellie3",fileURL:""}]),i=Object(x.a)(a,2),r=i[0],c=(i[1],Object(u.f)());return Object(n.useEffect)((function(){t.onAuthChange((function(e){e||c.push("/")}))})),Object(h.jsxs)("section",{className:P.a.maker,children:[Object(h.jsx)(f,{onLogout:function(){t.logout()}}),Object(h.jsxs)("div",{className:P.a.container,children:[Object(h.jsx)(S,{cards:r}),Object(h.jsx)(B,{cards:r})]}),Object(h.jsx)(j,{})]})};var L=function(e){var t=e.authService;return Object(h.jsx)("div",{className:o.a.app,children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",children:Object(h.jsx)(p,{authService:t})}),Object(h.jsx)(u.a,{exact:!0,path:"/maker",children:Object(h.jsx)(w,{authService:t})})]})})})},I=a(33),T=a(34),y=a(14),G={apiKey:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",authDomain:"business-card-maker-c495c.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/cardmaker-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-c495c.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"business-card-maker-c495c",REACT_APP_FIREBASE_REACT_APP_FIREBASE_DB_URL:"https://business-card-maker-c495c-default-rtdb.firebaseio.com"}).REACT_APP_FIREBASE_DB_URL,projectId:"business-card-maker-c495c"},W=y.a.initializeApp(G),F=new(function(){function e(){Object(I.a)(this,e)}return Object(T.a)(e,[{key:"login",value:function(e){var t=new(y.a.auth["".concat(e,"AuthProvider")]);return W.auth().signInWithPopup(t)}},{key:"logout",value:function(){y.a.auth().signOut()}},{key:"onAuthChange",value:function(e){y.a.auth().onAuthStateChanged((function(t){e(t)}))}}]),e}());c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(L,{authService:F})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.6ce29515.chunk.js.map