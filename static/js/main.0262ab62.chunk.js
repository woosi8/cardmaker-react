(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,c){e.exports={makerBlack:"black"}},22:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(8),r=c.n(n),i=c(14),s=c.n(i),a=(c(21),c(22),c(6)),o=function(e){return Object(a.jsx)("h1",{children:"Footer"})},u=function(e){return Object(a.jsx)("h1",{children:"Header"})},j=function(e){var t=e.authService,c=function(e){t.login(e.currentTarget.textContent).then(console.log)};return Object(a.jsxs)("section",{children:[Object(a.jsx)(u,{}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:c,children:"Google"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:c,children:"Github"})})]})]}),Object(a.jsx)(o,{})]})};var b=function(e){var t=e.authService;return Object(a.jsx)(j,{authService:t})},_=c(15),d=c(16),h=c(10),l={apiKey:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",authDomain:"business-card-maker-c495c.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/cardmaker-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-c495c.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"business-card-maker-c495c",REACT_APP_FIREBASE_REACT_APP_FIREBASE_DB_URL:"https://business-card-maker-c495c-default-rtdb.firebaseio.com"}).REACT_APP_FIREBASE_DB_URL,projectId:"business-card-maker-c495c"},E=h.a.initializeApp(l),A=new(function(){function e(){Object(_.a)(this,e)}return Object(d.a)(e,[{key:"login",value:function(e){var t=new(h.a.auth["".concat(e,"AuthProvider")]);return E.auth().signInWithPopup(t)}}]),e}());s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{authService:A})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0262ab62.chunk.js.map