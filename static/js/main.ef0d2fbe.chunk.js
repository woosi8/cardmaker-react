(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{12:function(e,t,a){e.exports={makerWheat:"wheat",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerBlack:"black",makerWhite:"white",makerShadow:"rgba(217, 217, 217, 1)",from:"'../../common/colors.css'",card:"card_card__1GMTm",dark:"card_dark__3xzQ5",light:"card_light__1W1wZ",colorful:"card_colorful__9Ew1O",avatar:"card_avatar__sePSk",info:"card_info__3q5d3",name:"card_name__2ml5N",company:"card_company__2EZef",title:"card_title__6mQa-",email:"card_email__3WvV1",message:"card_message__15NcV"}},14:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__35yNP",input:"card_add_form_input__1COx5",textarea:"card_add_form_textarea__2g4Z1",select:"card_add_form_select__3R779",button:"card_add_form_button__JOCb4",fileInput:"card_add_form_fileInput__1ZYuB"}},15:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__2C8rk",input:"card_edit_form_input__26leO",textarea:"card_edit_form_textarea__mGYiF",select:"card_edit_form_select__1PUXI",button:"card_edit_form_button__11WN6",fileInput:"card_edit_form_fileInput__2Re5N"}},17:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__1o9Pf",list:"login_list__uzB3B",item:"login_item__3bzXk",button:"login_button__Z762E"}},20:function(e,t,a){e.exports={makerGreen:"#385461",makerBlack:"black",makerWhite:"white",header:"header_header__4txbQ",logo:"header_logo__1QtGk",title:"header_title__1MQfW",logout:"header_logout__2ubf_"}},26:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3S_AF",title:"preview_title__1lIN8",cards:"preview_cards__3rFpJ"}},29:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",footer:"footer_footer__1o0r0",title:"footer_title__1We8M"}},32:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerGreen:"#385461",editor:"editor_editor__SZrpb",title:"editor_title__3xNKl"}},33:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1AIl3",container:"maker_container__3LMTn"}},39:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__3mqhr"}},41:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__1CJT-"}},48:function(e,t,a){e.exports={makerBlack:"black"}},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(13),c=a(3),n=a.n(c),i=a(38),l=a.n(i),s=(a(48),a(39)),o=a.n(s),u=a(22),m=a(8),d=a(29),_=a.n(d),j=a(2),h=function(){return Object(j.jsx)("footer",{className:_.a.footer,children:Object(j.jsx)("p",{className:_.a.title,children:"Code your dream"})})},f=a(20),b=a.n(f),p=function(e){var t=e.onLogout;return Object(j.jsxs)("header",{className:b.a.header,children:[t&&Object(j.jsx)("button",{className:b.a.logout,onClick:t,children:"Logout"}),Object(j.jsx)("img",{className:b.a.logo,src:"/cardmaker-react/images/logo.png",alt:"logo"}),Object(j.jsx)("h1",{className:b.a.title,children:"Business Card Maker"})]})},O=a(17),x=a.n(O),g=function(e){var t=e.authService,a=Object(m.f)(),r=function(e){a.push({pathname:"/maker",state:{id:e}})},n=function(e){t.login(e.currentTarget.textContent).then((function(e){return r(e.user.uid)}))};return Object(c.useEffect)((function(){t.onAuthChange((function(e){e&&r(e.uid)}))})),Object(j.jsxs)("section",{className:x.a.login,children:[Object(j.jsx)(p,{}),Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("ul",{className:x.a.list,children:[Object(j.jsx)("li",{className:x.a.item,children:Object(j.jsx)("button",{className:x.a.button,onClick:n,children:"Google"})}),Object(j.jsx)("li",{className:x.a.item,children:Object(j.jsx)("button",{className:x.a.button,onClick:n,children:"Github"})})]})]}),Object(j.jsx)(h,{})]})},k=a(43),v=a(14),N=a.n(v),C=a(41),R=a.n(C),E=function(e){var t=e.name,a=e.onClick;return Object(j.jsx)("button",{className:R.a.button,onClick:a,children:t})},y=function(e){var t=e.FileInput,a=e.onAdd,r=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useRef)(),l=Object(c.useRef)(),s=Object(c.useRef)(),o=Object(c.useRef)(),u=Object(c.useRef)();return Object(j.jsxs)("form",{ref:r,className:N.a.form,children:[Object(j.jsx)("input",{ref:n,className:N.a.input,type:"text",name:"name",placeholder:"Name"}),Object(j.jsx)("input",{ref:i,className:N.a.input,type:"text",name:"company",placeholder:"Company"}),Object(j.jsxs)("select",{ref:l,className:N.a.select,name:"theme",placeholder:"Theme",children:[Object(j.jsx)("option",{placeholder:"light",children:"light"}),Object(j.jsx)("option",{placeholder:"dark",children:"dark"}),Object(j.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(j.jsx)("input",{ref:s,className:N.a.input,type:"text",name:"title",placeholder:"Title"}),Object(j.jsx)("input",{ref:o,className:N.a.input,type:"text",name:"email",placeholder:"Email"}),Object(j.jsx)("textarea",{ref:u,className:N.a.textarea,name:"message",placeholder:"Message"}),Object(j.jsx)("div",{className:N.a.fileInput,children:Object(j.jsx)(t,{})}),Object(j.jsx)(E,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:n.current.value||"",company:i.current.value||"",theme:l.current.value,title:s.current.value||"",email:o.current.value||"",message:u.current.value||"",fileName:"",fileURL:""};r.current.reset(),a(t)}})]})},A=a(23),S=a(15),I=a.n(S),w=function(e){var t=e.FileInput,a=e.card,c=e.updateCard,n=e.deleteCard,i=a.name,l=a.company,s=a.title,o=a.email,u=a.message,m=a.theme,d=(a.fileURL,function(e){null!=e.currentTarget&&(e.preventDefault(),c(Object(r.a)(Object(r.a)({},a),{},Object(A.a)({},e.currentTarget.name,e.currentTarget.value))))});return Object(j.jsxs)("form",{className:I.a.form,children:[Object(j.jsx)("input",{className:I.a.input,type:"text",name:"name",value:i,onChange:d}),Object(j.jsx)("input",{className:I.a.input,type:"text",name:"company",value:l,onChange:d}),Object(j.jsxs)("select",{className:I.a.select,name:"theme",value:m,onChange:d,children:[Object(j.jsx)("option",{value:"light",children:"Light"}),Object(j.jsx)("option",{value:"dark",children:"Dark"}),Object(j.jsx)("option",{value:"colorful",children:"Colorful"})]}),Object(j.jsx)("input",{className:I.a.input,type:"text",name:"title",value:s,onChange:d}),Object(j.jsx)("input",{className:I.a.input,type:"text",name:"email",value:o,onChange:d}),Object(j.jsx)("textarea",{className:I.a.textarea,name:"message",value:u,onChange:d}),Object(j.jsx)("div",{className:I.a.fileInput,children:Object(j.jsx)(t,{})}),Object(j.jsx)(E,{name:"Delete",onClick:function(){n(a)}})]})},B=a(32),P=a.n(B),T=function(e){var t=e.FileInput,a=e.cards,r=e.addCard,c=e.updateCard,n=e.deleteCard;return Object(j.jsxs)("section",{className:P.a.editor,children:[Object(j.jsx)("h1",{className:P.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(j.jsx)(w,{FileInput:t,card:a[e],updateCard:c,deleteCard:n},e)})),Object(j.jsx)(y,{FileInput:t,onAdd:r})]})},F=a(12),L=a.n(F);function W(e){switch(e){case"dark":return L.a.dark;case"light":return L.a.light;case"colorful":return L.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var U=function(e){var t=e.card,a=t.name,r=t.company,c=t.title,n=t.email,i=t.message,l=t.theme,s=(t.fileName,t.fileURL||"/cardmaker-react/images/default_logo.png");return Object(j.jsxs)("li",{className:"".concat(L.a.card," ").concat(W(l)),children:[Object(j.jsx)("img",{className:L.a.avatar,src:s,alt:"profile photo"}),Object(j.jsxs)("div",{className:L.a.info,children:[Object(j.jsx)("h1",{className:L.a.name,children:a}),Object(j.jsx)("p",{className:L.a.company,children:r}),Object(j.jsx)("p",{className:L.a.title,children:c}),Object(j.jsx)("p",{className:L.a.email,children:n}),Object(j.jsx)("p",{className:L.a.message,children:i})]})]})},G=a(26),D=a.n(G),M=function(e){var t=e.cards;return Object(j.jsxs)("section",{className:D.a.preview,children:[Object(j.jsx)("h1",{className:D.a.title,children:"Card Preview"}),Object(j.jsx)("ul",{className:D.a.cards,children:Object.keys(t).map((function(e){return Object(j.jsx)(U,{card:t[e]},e)}))})]})},J=a(33),Y=a.n(J),z=function(e){var t=e.FileInput,a=e.authService,n=Object(c.useState)({1:{id:"1",company:"Samsung",theme:"dark",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",name:"ellie1",fileURL:null},2:{id:"2",company:"Samsung",theme:"light",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",name:"ellie2",fileURL:null},3:{id:"3",company:"Samsung",theme:"colorful",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",name:"ellie3",fileURL:null}}),i=Object(k.a)(n,2),l=i[0],s=i[1],o=Object(m.f)();Object(c.useEffect)((function(){a.onAuthChange((function(e){e||o.push("/cardmaker-react")}))}));var u=function(e){s((function(t){var a=Object(r.a)({},t);return a[e.id]=e,a})),console.log(e)};return Object(j.jsxs)("section",{className:Y.a.maker,children:[Object(j.jsx)(p,{onLogout:function(){a.logout()}}),Object(j.jsxs)("div",{className:Y.a.container,children:[Object(j.jsx)(T,{FileInput:t,cards:l,addCard:u,updateCard:u,deleteCard:function(e){s((function(t){var a=Object(r.a)({},t);return delete a[e.id],a}))}}),Object(j.jsx)(M,{cards:l})]}),Object(j.jsx)(h,{})]})};var H=function(e){var t=e.FileInput,a=e.authService;return Object(j.jsx)("div",{className:o.a.app,children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:"/cardmaker-react",children:Object(j.jsx)(g,{authService:a})}),Object(j.jsx)(m.a,{exact:!0,path:"/maker",children:Object(j.jsx)(z,{FileInput:t,authService:a})})]})})})},K=a(24),Q=a(25),Z=a(18),X={apiKey:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",authDomain:"business-card-maker-c495c.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/cardmaker-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-c495c.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"business-card-maker-c495c",REACT_APP_FIREBASE_REACT_APP_FIREBASE_DB_URL:"https://business-card-maker-c495c-default-rtdb.firebaseio.com"}).REACT_APP_FIREBASE_DB_URL,projectId:"business-card-maker-c495c"},V=Z.a.initializeApp(X),q=function(){function e(){Object(K.a)(this,e)}return Object(Q.a)(e,[{key:"login",value:function(e){var t=new(Z.a.auth["".concat(e,"AuthProvider")]);return V.auth().signInWithPopup(t)}},{key:"logout",value:function(){Z.a.auth().signOut()}},{key:"onAuthChange",value:function(e){Z.a.auth().onAuthStateChanged((function(t){e(t)}))}}]),e}(),$=a(34),ee=a.n($),te=a(42),ae=function(){function e(){Object(K.a)(this,e)}return Object(Q.a)(e,[{key:"upload",value:function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","file");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),re=(a(58),function(e){e.imageUploader;return Object(j.jsx)("button",{children:"Image"})}),ce=new q,ne=new ae;l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(H,{authService:ce,FileInput:function(e){return Object(j.jsx)(re,Object(r.a)(Object(r.a)({},e),{},{imageUploader:ne}))}})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ef0d2fbe.chunk.js.map