(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{12:function(e,t,a){e.exports={makerWheat:"wheat",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerBlack:"black",makerWhite:"white",makerShadow:"rgba(217, 217, 217, 1)",from:"'../../common/colors.css'",card:"card_card__1GMTm",dark:"card_dark__3xzQ5",light:"card_light__1W1wZ",colorful:"card_colorful__9Ew1O",avatar:"card_avatar__sePSk",info:"card_info__3q5d3",name:"card_name__2ml5N",company:"card_company__2EZef",title:"card_title__6mQa-",email:"card_email__3WvV1",message:"card_message__15NcV"}},13:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__35yNP",input:"card_add_form_input__1COx5",textarea:"card_add_form_textarea__2g4Z1",select:"card_add_form_select__3R779",button:"card_add_form_button__JOCb4",fileInput:"card_add_form_fileInput__1ZYuB"}},14:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__2C8rk",input:"card_edit_form_input__26leO",textarea:"card_edit_form_textarea__mGYiF",select:"card_edit_form_select__1PUXI",button:"card_edit_form_button__11WN6",fileInput:"card_edit_form_fileInput__2Re5N"}},16:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__1o9Pf",list:"login_list__uzB3B",item:"login_item__3bzXk",button:"login_button__Z762E"}},20:function(e,t,a){e.exports={makerGreen:"#385461",makerBlack:"black",makerWhite:"white",header:"header_header__4txbQ",logo:"header_logo__1QtGk",title:"header_title__1MQfW",logout:"header_logout__2ubf_"}},24:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3S_AF",title:"preview_title__1lIN8",cards:"preview_cards__3rFpJ"}},27:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",footer:"footer_footer__1o0r0",title:"footer_title__1We8M"}},30:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerGreen:"#385461",editor:"editor_editor__SZrpb",title:"editor_title__3xNKl"}},31:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1AIl3",container:"maker_container__3LMTn"}},36:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__3mqhr"}},38:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__1CJT-"}},46:function(e,t,a){e.exports={makerBlack:"black"}},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var r=a(3),c=a.n(r),n=a(35),i=a.n(n),s=(a(46),a(36)),l=a.n(s),o=a(22),m=a(8),u=a(27),d=a.n(u),_=a(2),j=function(){return Object(_.jsx)("footer",{className:d.a.footer,children:Object(_.jsx)("p",{className:d.a.title,children:"Code your dream"})})},h=a(20),f=a.n(h),b=function(e){var t=e.onLogout;return Object(_.jsxs)("header",{className:f.a.header,children:[t&&Object(_.jsx)("button",{className:f.a.logout,onClick:t,children:"Logout"}),Object(_.jsx)("img",{className:f.a.logo,src:"/cardmaker-react/images/logo.png",alt:"logo"}),Object(_.jsx)("h1",{className:f.a.title,children:"Business Card Maker"})]})},p=a(16),x=a.n(p),O=function(e){var t=e.authService,a=Object(m.f)(),c=function(e){a.push({pathname:"/maker",state:{id:e}})},n=function(e){t.login(e.currentTarget.textContent).then((function(e){return c(e.user.uid)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&c(e.uid)}))})),Object(_.jsxs)("section",{className:x.a.login,children:[Object(_.jsx)(b,{}),Object(_.jsxs)("section",{children:[Object(_.jsx)("h1",{children:"Login"}),Object(_.jsxs)("ul",{className:x.a.list,children:[Object(_.jsx)("li",{className:x.a.item,children:Object(_.jsx)("button",{className:x.a.button,onClick:n,children:"Google"})}),Object(_.jsx)("li",{className:x.a.item,children:Object(_.jsx)("button",{className:x.a.button,onClick:n,children:"Github"})})]})]}),Object(_.jsx)(j,{})]})},g=a(17),k=a(41),v=a(13),N=a.n(v),C=a(38),R=a.n(C),E=function(e){var t=e.name,a=e.onClick;return Object(_.jsx)("button",{className:R.a.button,onClick:a,children:t})},A=(a(52),function(e){return Object(_.jsx)("button",{children:"Image"})}),S=function(e){var t=e.onAdd,a=Object(r.useRef)(),c=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useRef)(),o=Object(r.useRef)();return Object(_.jsxs)("form",{ref:a,className:N.a.form,children:[Object(_.jsx)("input",{ref:c,className:N.a.input,type:"text",name:"name",placeholder:"Name"}),Object(_.jsx)("input",{ref:n,className:N.a.input,type:"text",name:"company",placeholder:"Company"}),Object(_.jsxs)("select",{ref:i,className:N.a.select,name:"theme",placeholder:"Theme",children:[Object(_.jsx)("option",{placeholder:"light",children:"light"}),Object(_.jsx)("option",{placeholder:"dark",children:"dark"}),Object(_.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(_.jsx)("input",{ref:s,className:N.a.input,type:"text",name:"title",placeholder:"Title"}),Object(_.jsx)("input",{ref:l,className:N.a.input,type:"text",name:"email",placeholder:"Email"}),Object(_.jsx)("textarea",{ref:o,className:N.a.textarea,name:"message",placeholder:"Message"}),Object(_.jsx)("div",{className:N.a.fileInput,children:Object(_.jsx)(A,{})}),Object(_.jsx)(E,{name:"Add",onClick:function(e){e.preventDefault();var r={id:Date.now(),name:c.current.value||"",company:n.current.value||"",theme:i.current.value,title:s.current.value||"",email:l.current.value||"",message:o.current.value||"",fileName:"",fileURL:""};a.current.reset(),t(r)}})]})},y=a(23),w=a(14),B=a.n(w),I=function(e){var t=e.card,a=e.updateCard,r=e.deleteCard,c=t.name,n=t.company,i=t.title,s=t.email,l=t.message,o=t.theme,m=(t.fileURL,function(e){null!=e.currentTarget&&(e.preventDefault(),a(Object(g.a)(Object(g.a)({},t),{},Object(y.a)({},e.currentTarget.name,e.currentTarget.value))))});return Object(_.jsxs)("form",{className:B.a.form,children:[Object(_.jsx)("input",{className:B.a.input,type:"text",name:"name",value:c,onChange:m}),Object(_.jsx)("input",{className:B.a.input,type:"text",name:"company",value:n,onChange:m}),Object(_.jsxs)("select",{className:B.a.select,name:"theme",value:o,onChange:m,children:[Object(_.jsx)("option",{value:"light",children:"Light"}),Object(_.jsx)("option",{value:"dark",children:"Dark"}),Object(_.jsx)("option",{value:"colorful",children:"Colorful"})]}),Object(_.jsx)("input",{className:B.a.input,type:"text",name:"title",value:i,onChange:m}),Object(_.jsx)("input",{className:B.a.input,type:"text",name:"email",value:s,onChange:m}),Object(_.jsx)("textarea",{className:B.a.textarea,name:"message",value:l,onChange:m}),Object(_.jsx)("div",{className:B.a.fileInput,children:Object(_.jsx)(A,{})}),Object(_.jsx)(E,{name:"Delete",onClick:function(){r(t)}})]})},P=a(30),T=a.n(P),L=function(e){var t=e.cards,a=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(_.jsxs)("section",{className:T.a.editor,children:[Object(_.jsx)("h1",{className:T.a.title,children:"Card Maker"}),Object.keys(t).map((function(e){return Object(_.jsx)(I,{card:t[e],updateCard:r,deleteCard:c},e)})),Object(_.jsx)(S,{onAdd:a})]})},W=a(12),G=a.n(W);function U(e){switch(e){case"dark":return G.a.dark;case"light":return G.a.light;case"colorful":return G.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var D=function(e){var t=e.card,a=t.name,r=t.company,c=t.title,n=t.email,i=t.message,s=t.theme,l=(t.fileName,t.fileURL||"/cardmaker-react/images/default_logo.png");return Object(_.jsxs)("li",{className:"".concat(G.a.card," ").concat(U(s)),children:[Object(_.jsx)("img",{className:G.a.avatar,src:l,alt:"profile photo"}),Object(_.jsxs)("div",{className:G.a.info,children:[Object(_.jsx)("h1",{className:G.a.name,children:a}),Object(_.jsx)("p",{className:G.a.company,children:r}),Object(_.jsx)("p",{className:G.a.title,children:c}),Object(_.jsx)("p",{className:G.a.email,children:n}),Object(_.jsx)("p",{className:G.a.message,children:i})]})]})},F=a(24),M=a.n(F),J=function(e){var t=e.cards;return Object(_.jsxs)("section",{className:M.a.preview,children:[Object(_.jsx)("h1",{className:M.a.title,children:"Card Preview"}),Object(_.jsx)("ul",{className:M.a.cards,children:Object.keys(t).map((function(e){return Object(_.jsx)(D,{card:t[e]},e)}))})]})},Y=a(31),z=a.n(Y),H=function(e){var t=e.authService,a=Object(r.useState)({1:{id:"1",company:"Samsung",theme:"dark",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",name:"ellie1",fileURL:null},2:{id:"2",company:"Samsung",theme:"light",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",name:"ellie2",fileURL:null},3:{id:"3",company:"Samsung",theme:"colorful",title:"Software Engineer",email:"tmfvmehek@gmail.com",message:"go for it",name:"ellie3",fileURL:null}}),c=Object(k.a)(a,2),n=c[0],i=c[1],s=Object(m.f)();Object(r.useEffect)((function(){t.onAuthChange((function(e){e||s.push("/cardmaker-react")}))}));var l=function(e){i((function(t){var a=Object(g.a)({},t);return a[e.id]=e,a}))};return Object(_.jsxs)("section",{className:z.a.maker,children:[Object(_.jsx)(b,{onLogout:function(){t.logout()}}),Object(_.jsxs)("div",{className:z.a.container,children:[Object(_.jsx)(L,{cards:n,addCard:l,updateCard:l,deleteCard:function(e){i((function(t){var a=Object(g.a)({},t);return delete a[e.id],a}))}}),Object(_.jsx)(J,{cards:n})]}),Object(_.jsx)(j,{})]})};var K=function(e){var t=e.authService;return Object(_.jsx)("div",{className:l.a.app,children:Object(_.jsx)(o.a,{children:Object(_.jsxs)(m.c,{children:[Object(_.jsx)(m.a,{exact:!0,path:"/cardmaker-react",children:Object(_.jsx)(O,{authService:t})}),Object(_.jsx)(m.a,{exact:!0,path:"/maker",children:Object(_.jsx)(H,{authService:t})})]})})})},Q=a(39),Z=a(40),X=a(18),V={apiKey:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",authDomain:"business-card-maker-c495c.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/cardmaker-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-c495c.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"business-card-maker-c495c",REACT_APP_FIREBASE_REACT_APP_FIREBASE_DB_URL:"https://business-card-maker-c495c-default-rtdb.firebaseio.com"}).REACT_APP_FIREBASE_DB_URL,projectId:"business-card-maker-c495c"},q=X.a.initializeApp(V),$=new(function(){function e(){Object(Q.a)(this,e)}return Object(Z.a)(e,[{key:"login",value:function(e){var t=new(X.a.auth["".concat(e,"AuthProvider")]);return q.auth().signInWithPopup(t)}},{key:"logout",value:function(){X.a.auth().signOut()}},{key:"onAuthChange",value:function(e){X.a.auth().onAuthStateChanged((function(t){e(t)}))}}]),e}());i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(K,{authService:$})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.598273b9.chunk.js.map