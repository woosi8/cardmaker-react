(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{12:function(e,t,a){e.exports={makerWheat:"wheat",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerBlack:"black",makerWhite:"white",makerShadow:"rgba(217, 217, 217, 1)",from:"'../../common/colors.css'",card:"card_card__1GMTm",dark:"card_dark__3xzQ5",light:"card_light__1W1wZ",colorful:"card_colorful__9Ew1O",avatar:"card_avatar__sePSk",info:"card_info__3q5d3",name:"card_name__2ml5N",company:"card_company__2EZef",title:"card_title__6mQa-",email:"card_email__3WvV1",message:"card_message__15NcV"}},14:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__35yNP",input:"card_add_form_input__1COx5",textarea:"card_add_form_textarea__2g4Z1",select:"card_add_form_select__3R779",button:"card_add_form_button__JOCb4",fileInput:"card_add_form_fileInput__1ZYuB"}},15:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__2C8rk",input:"card_edit_form_input__26leO",textarea:"card_edit_form_textarea__mGYiF",select:"card_edit_form_select__1PUXI",button:"card_edit_form_button__11WN6",fileInput:"card_edit_form_fileInput__2Re5N"}},18:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__1o9Pf",list:"login_list__uzB3B",item:"login_item__3bzXk",button:"login_button__Z762E"}},19:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerGrey:"#626262",makerPink:"#FFC0CB",container:"image_file_input_container__31iwX",input:"image_file_input_input__3QbTt",button:"image_file_input_button__1t80z",grey:"image_file_input_grey__zhweO",pink:"image_file_input_pink__H0hpZ",loading:"image_file_input_loading__C89lk",spin:"image_file_input_spin__3X4La"}},25:function(e,t,a){e.exports={makerGreen:"#385461",makerBlack:"black",makerWhite:"white",header:"header_header__4txbQ",logo:"header_logo__1QtGk",title:"header_title__1MQfW",logout:"header_logout__2ubf_"}},30:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3S_AF",title:"preview_title__1lIN8",cards:"preview_cards__3rFpJ"}},33:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",footer:"footer_footer__1o0r0",title:"footer_title__1We8M"}},36:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerGreen:"#385461",editor:"editor_editor__SZrpb",title:"editor_title__3xNKl"}},37:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1AIl3",container:"maker_container__3LMTn"}},42:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__3mqhr"}},44:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__1CJT-"}},49:function(e,t,a){e.exports={makerBlack:"black"}},59:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(3),c=a.n(r),i=a(41),s=a.n(i),o=(a(49),a(42)),l=a.n(o),u=a(27),d=a(8),m=a(33),_=a.n(m),j=a(2),f=function(){return Object(j.jsx)("footer",{className:_.a.footer,children:Object(j.jsx)("p",{className:_.a.title,children:"Code your dream"})})},p=a(25),b=a.n(p),h=function(e){var t=e.onLogout;return Object(j.jsxs)("header",{className:b.a.header,children:[t&&Object(j.jsx)("button",{className:b.a.logout,onClick:t,children:"Logout"}),Object(j.jsx)("img",{className:b.a.logo,src:"/cardmaker-react/images/logo.png",alt:"logo"}),Object(j.jsx)("h1",{className:b.a.title,children:"Business Card Maker"})]})},O=a(18),x=a.n(O),g=function(e){var t=e.authService,a=Object(d.f)(),n=function(e){a.push({pathname:"/maker",state:{id:e}})},c=function(e){t.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.uid)}))})),Object(j.jsxs)("section",{className:x.a.login,children:[Object(j.jsx)(h,{}),Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("ul",{className:x.a.list,children:[Object(j.jsx)("li",{className:x.a.item,children:Object(j.jsx)("button",{className:x.a.button,onClick:c,children:"Google"})}),Object(j.jsx)("li",{className:x.a.item,children:Object(j.jsx)("button",{className:x.a.button,onClick:c,children:"Github"})})]})]}),Object(j.jsx)(f,{})]})},k=a(17),v=a(14),N=a.n(v),C=a(44),y=a.n(C),R=function(e){var t=e.name,a=e.onClick;return Object(j.jsx)("button",{className:y.a.button,onClick:a,children:t})},w=function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),s=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useState)({fileName:null,fileURL:null}),m=Object(k.a)(d,2),_=m[0],f=m[1];return Object(j.jsxs)("form",{ref:n,className:N.a.form,children:[Object(j.jsx)("input",{ref:c,className:N.a.input,type:"text",name:"name",placeholder:"Name"}),Object(j.jsx)("input",{ref:i,className:N.a.input,type:"text",name:"company",placeholder:"Company"}),Object(j.jsxs)("select",{ref:s,className:N.a.select,name:"theme",placeholder:"Theme",children:[Object(j.jsx)("option",{placeholder:"light",children:"light"}),Object(j.jsx)("option",{placeholder:"dark",children:"dark"}),Object(j.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(j.jsx)("input",{ref:o,className:N.a.input,type:"text",name:"title",placeholder:"Title"}),Object(j.jsx)("input",{ref:l,className:N.a.input,type:"text",name:"email",placeholder:"Email"}),Object(j.jsx)("textarea",{ref:u,className:N.a.textarea,name:"message",placeholder:"Message"}),Object(j.jsx)("div",{className:N.a.fileInput,children:Object(j.jsx)(t,{onFileChange:function(e){f({fileName:e.name,fileURL:e.url})},name:_.fileName})}),Object(j.jsx)(R,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:s.current.value,title:o.current.value||"",email:l.current.value||"",message:u.current.value||"",fileName:_.fileName||"",fileURL:_.fileURL||""};n.current.reset(),a(t),f({fileName:null,fileURL:null})}})]})},A=a(28),E=a(15),I=a.n(E),S=function(e){var t=e.FileInput,a=e.card,r=e.updateCard,c=e.deleteCard,i=a.name,s=a.company,o=a.title,l=a.email,u=a.message,d=a.theme,m=a.fileName,_=function(e){null!=e.currentTarget&&(e.preventDefault(),r(Object(n.a)(Object(n.a)({},a),{},Object(A.a)({},e.currentTarget.name,e.currentTarget.value))))};return console.log(m),Object(j.jsxs)("form",{className:I.a.form,children:[Object(j.jsx)("input",{className:I.a.input,type:"text",name:"name",value:i,onChange:_}),Object(j.jsx)("input",{className:I.a.input,type:"text",name:"company",value:s,onChange:_}),Object(j.jsxs)("select",{className:I.a.select,name:"theme",value:d,onChange:_,children:[Object(j.jsx)("option",{value:"light",children:"Light"}),Object(j.jsx)("option",{value:"dark",children:"Dark"}),Object(j.jsx)("option",{value:"colorful",children:"Colorful"})]}),Object(j.jsx)("input",{className:I.a.input,type:"text",name:"title",value:o,onChange:_}),Object(j.jsx)("input",{className:I.a.input,type:"text",name:"email",value:l,onChange:_}),Object(j.jsx)("textarea",{className:I.a.textarea,name:"message",value:u,onChange:_}),Object(j.jsx)("div",{className:I.a.fileInput,children:Object(j.jsx)(t,{name:m,onFileChange:function(e){r(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(j.jsx)(R,{name:"Delete",onClick:function(){c(a)}})]})},F=a(36),B=a.n(F),P=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(j.jsxs)("section",{className:B.a.editor,children:[Object(j.jsx)("h1",{className:B.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(j.jsx)(S,{FileInput:t,card:a[e],updateCard:r,deleteCard:c},e)})),Object(j.jsx)(w,{FileInput:t,onAdd:n})]})},T=a(12),L=a.n(T);function W(e){switch(e){case"dark":return L.a.dark;case"light":return L.a.light;case"colorful":return L.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var U=function(e){var t=e.card,a=t.name,n=t.company,r=t.title,c=t.email,i=t.message,s=t.theme,o=(t.fileName,t.fileURL||"/cardmaker-react/images/default_logo.png");return Object(j.jsxs)("li",{className:"".concat(L.a.card," ").concat(W(s)),children:[Object(j.jsx)("img",{className:L.a.avatar,src:o,alt:"profile photo"}),Object(j.jsxs)("div",{className:L.a.info,children:[Object(j.jsx)("h1",{className:L.a.name,children:a}),Object(j.jsx)("p",{className:L.a.company,children:n}),Object(j.jsx)("p",{className:L.a.title,children:r}),Object(j.jsx)("p",{className:L.a.email,children:c}),Object(j.jsx)("p",{className:L.a.message,children:i})]})]})},G=a(30),D=a.n(G),M=function(e){var t=e.cards;return Object(j.jsxs)("section",{className:D.a.preview,children:[Object(j.jsx)("h1",{className:D.a.title,children:"Card Preview"}),Object(j.jsx)("ul",{className:D.a.cards,children:Object.keys(t).map((function(e){return Object(j.jsx)(U,{card:t[e]},e)}))})]})},z=a(37),J=a.n(z),H=function(e){var t,a=e.FileInput,c=e.authService,i=e.cardRepository,s=Object(d.f)(),o=null===s||void 0===s||null===(t=s.location)||void 0===t?void 0:t.state,l=Object(r.useState)({}),u=Object(k.a)(l,2),m=u[0],_=u[1],p=Object(r.useState)(o&&o.id),b=Object(k.a)(p,2),O=b[0],x=b[1];Object(r.useEffect)((function(){if(O){var e=i.syncCards(O,(function(e){_(e)}));return function(){e()}}}),[O]),Object(r.useEffect)((function(){c.onAuthChange((function(e){e?x(e.uid):s.push("/cardmaker-react")}))}));var g=function(e){_((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(O,e)};return Object(j.jsxs)("section",{className:J.a.maker,children:[Object(j.jsx)(h,{onLogout:function(){c.logout()}}),Object(j.jsxs)("div",{className:J.a.container,children:[Object(j.jsx)(P,{FileInput:a,cards:m,addCard:g,updateCard:g,deleteCard:function(e){_((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.removeCard(O,e)}}),Object(j.jsx)(M,{cards:m})]}),Object(j.jsx)(f,{})]})};var Q=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(j.jsx)("div",{className:l.a.app,children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/cardmaker-react",children:Object(j.jsx)(g,{authService:a})}),Object(j.jsx)(d.a,{exact:!0,path:"/maker",children:Object(j.jsx)(H,{FileInput:t,authService:a,cardRepository:n})})]})})})},Y=a(20),Z=a(21),K=a(23),X={apiKey:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",authDomain:"business-card-maker-c495c.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/cardmaker-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBFt5GUjsuWmxB11sJYHLjXRYmB17_RmBs",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-c495c.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"business-card-maker-c495c",REACT_APP_FIREBASE_REACT_APP_FIREBASE_DB_URL:"https://business-card-maker-c495c-default-rtdb.firebaseio.com"}).REACT_APP_FIREBASE_DB_URL,projectId:"business-card-maker-c495c"},V=K.a.initializeApp(X),q=function(){function e(){Object(Y.a)(this,e)}return Object(Z.a)(e,[{key:"login",value:function(e){var t=new(K.a.auth["".concat(e,"AuthProvider")]);return V.auth().signInWithPopup(t)}},{key:"logout",value:function(){K.a.auth().signOut()}},{key:"onAuthChange",value:function(e){K.a.auth().onAuthStateChanged((function(t){e(t)}))}}]),e}(),$=a(22),ee=a.n($),te=a(29),ae=function(){function e(){Object(Y.a)(this,e)}return Object(Z.a)(e,[{key:"upload",value:function(){var e=Object(te.a)(ee.a.mark((function e(t){var a,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","docs_upload_example_us_preset"),e.next=5,fetch("https://api.cloudinary.com/v1_1/demo/image/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ne=a(19),re=a.n(ne),ce=function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,c=Object(r.useState)(!1),i=Object(k.a)(c,2),s=i[0],o=i[1],l=Object(r.useRef)(),u=function(){var e=Object(te.a)(ee.a.mark((function e(a){var r;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,o(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:re.a.container,children:[Object(j.jsx)("input",{ref:l,className:re.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!s&&Object(j.jsx)("button",{className:"".concat(re.a.button," ").concat(a?re.a.pink:re.a.grey),onClick:function(e){e.preventDefault(),l.current.click()},children:a||"No file"}),s&&Object(j.jsx)("div",{className:re.a.loading})]})},ie=function(){function e(){Object(Y.a)(this,e)}return Object(Z.a)(e,[{key:"syncCards",value:function(e,t){var a=V.database().ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){V.database().ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){V.database().ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),se=new q,oe=new ae,le=new ie;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Q,{authService:se,FileInput:function(e){return Object(j.jsx)(ce,Object(n.a)(Object(n.a)({},e),{},{imageUploader:oe}))},cardRepository:le})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.c3e6183d.chunk.js.map