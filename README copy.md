# **Youtube** (React)

## Introduction

- Firebase를 이용한 사용자 로그인, 실시간 서버 데이터베이스를 이용하여 사용자의 명함을 간단하게 만들고 서버에 저장하는 기능을 구현.

- 컨셉: React Hook, PostCSS, React Router, Firebase (Authentication, Realtime database), Cloudinary, Testable Code, Service layer

## Firebase 실시간 Database Sync

-login.jsx
메이커 컴포넌트에서 사용자의 카드가 업데이트 될떄마다 cardRepository를 이용할건데 이때 사용자의 아이디를 이용해서 카드들이 사용자 id별로 저장되도록 만들어야한다
사용자 id는 login할때 history에서 함께 전달하게 된다
메이커에서 이 값을 state로 저장한다. userId

- maker.jsx ( // 데이터 보존하기 위한 state)

1. 컴포넌트가 마운트가 되면 cardRepository의 syncCards가 먼저 호출이 됩니다

2. syncCards의 함수가 수행됩니다 (ref.on이 실행되겠죠?)
   그리고 함수 수행이 완료되고 마지막으로는 arrow 함수가 리턴이 되어요 (아직 수행되지 않음)

3. 리턴된 arrow 함수의 오브젝트가 stopSync에 할당이 되어지고

4. 여기 useEffect에서 리턴되는 stopSync를 수행하게될 arrow 함수는 나중에 컴포넌트가 언마운트되면 수행이 될거예요 :) (그전까지는 stopSync()는 호출되지 않음, 그러므로 startSync에서 리턴되었던 함수도 수행이 되지 않음)
   !!useEffect return에서는 항상 function을 리턴해 주어야 한답니다.

## ☎️ Contacts

- E-mail: [tmfvmehek@gmail.com](mailto:tmfvmehek@gmail.com)
- LinkedIn: [Hyuck Choi](https://www.linkedin.com/in/hyuck-choi-77923512b/)
- **Github** : [woosi8](https://github.com/woosi8)
- Portfolio : [FrontEnd](https://woosi8.github.io/Frontend_Web_Developer/)

## 📁 My Work

### - HTML,CSS

- [CSS_Compilation](https://github.com/woosi8/css_compilation/tree/master/Simple_Css): compile simple css examples
- [Scroll Show](https://github.com/woosi8/css_compilation/tree/master/scroll-show): Scroll animation by Jquery
- [Clone Web Site with Jquery](https://github.com/woosi8/Css-Waxom): clone a desined site with Jquery
- [Grid](https://github.com/woosi8/css_compilation/tree/master/Grid): WinForm basic grid sample and responsive web

### - JavaScript

- [JS_Compilation](https://github.com/woosi8/js_compilation/tree/master/Examples): compile Accordian,Drag and Drop and Hover by Vanila Javascript
- [JS_Games](https://github.com/woosi8/js_compilation/tree/master/Games): built Games(lottery,baseball, rock scissor paper) by Vanila Javascript
- [JS_ChracterShow](https://github.com/woosi8/js_compilation/tree/master/Character%20Show): working on
