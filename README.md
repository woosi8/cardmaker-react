# Youtube with React <img align="center" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

# Introduction

- Firebase를 이용한 사용자 로그인, 실시간 서버 데이터베이스를 이용하여 사용자의 명함을 간단하게 만들고 서버에 저장하는 기능을 구현.

- 컨셉: React Hook, PostCSS, React Router, Firebase (Authentication, Realtime database), Cloudinary, Testable Code, Service layer

# 📁 Components

## Header

### - logout

로그아웃 버튼 onClick으로 Header에 onLogout을 props로 maker에서 받아와 실행된다.  
props : maker -> onLogout  
maker에 onLogout 함수가 로그인시(authService(prop)에 변경사항이 있다면) prop으로 Header에 전달되게 된다.  
onLogout이 전달되면 Header에 Logout button을 보여주고 Logout 버튼 실행으로 onClikc으로 onLogout이 실행되어 로그아웃 되게 된다.  
로그아웃을 하게 되면 maker에 useEffect의 authService에 history push를 통해 app.jsx에서 Route로 지정해준 /cardmaker-react(login) 화면으로 돌아가게 한다.

## Section

### - login

prop으로 authService을 받아온다 ( App > index > auth_service.js)  
class AuthService에서 login을 설정한다.  
login은 providerName을 받아와서 해당 요소의 text값을 받아와서 providerName이 Google 또는 Github인지 구별하여 firebase의 로그인 기능을 수행한다.

- Login 컴포넌트에서 onLogin으로 로그인 되고나서 로그인 data를 goToMaker에 user.uid를 전달한다.
- useEffect로 authService에 변화가 있다면(onAuthChange) 새로 - 로그인된 user의 uid를 goToMaker에 인자로 할당한다.
- goToMaker에서는 userID를 받아 history push로 path:/maker화면으로 넘겨주고 state id에 받아온 userId를 할당한다.  
  maker에서 history로 해당 state를 가져와서 userId state에 id를 할당한다.
- 메이커 컴포넌트에서 사용자의 카드가 업데이트 될떄마다 cardRepository를 이용할건데 이때 사용자의 아이디를 이용해서  
  카드들이 사용자 id별로 저장되도록 만들어야한다.  
  사용자 id는 login할때 history에서 함께 전달하게 된다.  
  메이커에서 이 값을 state로 저장한다. userId

## Maker

props (FileInput,authService,cardRepository)  
state = cards, userId  
useEffect = stopSync, onAuthChange

데이터 보존하기 위한 state

- maker에 onLogout함수는 authservice를 props로 받아와서 logout 시킨다.  
  onLogout안에 authService(props)는 -> maker -> app -> index - auth_service.js
- useEffect으로 card_repository.js에 class CardRepository안 syncCards에 userId와 onUpdate에 value 인자를 넣은 함수를 setCards에 할당해서 return 하여 업데이트 시킨다.  
  value는 firebase에서 ref.on 기능으로 가져온 지속적으로 업데이트될때마다 최신화된 데이터를 저장해 놓은 값이다.
- 사용자가 변경될때 원하는 기능을 수행하는 콜백함수  
  두번째 useEffect는 AuthService클래스 onAuthChange에 user 데이터를 가져와서 UserId에 할당한다.  
  AuthService클래스안에 onAuthChange의 user데이터는 firebase에 onAuthStateChanged로 사용자가 바뀔때마다 사용자 정보를 전달받는 기능을 이용하여 user을 maker 두번째 useEffect에 setUserId에 user.uid를 전달한다.

- CreateOrupdateCard
  edit_form(prop:onAdd)과 add_form(prop:updateCard)에서 업데이트 된 데이터(card)를 전달 받아 cards에 업데이트 해준다.
- deleteCard
  해당하는 key를 delete 해준다. edit_form에서 deletcard를 prop으로 전달해서 onSubmit에 호출해준다.

### Editor

### - CardEditForm

props (FileInput, card, updateCard, deleteCard)

FileInput : image_file_input.jsx , upload.js> index > app > maker >Editor > card_edit_form  
onFileChange는 image_file_input.jsx에 있는 onChange의 onFileChange에서 upload한 파일의 name,url을 받아와서 카드 데이터에 넣어준다.  
onChange는 form에 자식요소들의 값들이 변경될때 onChange를 불러오게 설정하고,  
각각의 event의 target을 받아와서 name을 key 값으로, value를 value로 card에 넣어줘서 updateCard(maker의 CreateOrupdateCard)에 전달되서 업데이트 되게 한다.

### - CardAddForm

props (FileInput, onAdd)
state (file)
file이 바뀌면(사용자가 업로드) 하면 state로 가지고 있는다. 왜냐면 변경된 값은 add버튼을 누를때만 업데이트 되기떄문

### - image_file_input

사용자가 실제로는 button을 클릭하지만 실제로는 input이 실행된다. onButtonClick에 input에 ref를 주어서 버튼 클릭시 input이 클릭되도록 설정한다.  
Add 버튼이 클릭되면 onClick에 onSubmit이 button 컴포넌트에 전달된다. onSubmit 함수에 card 데이터들이 들어있는 오브젝트를 만든다.  
또한, onAdd에 인자 card를 prop으로 전달한다. editor > maker(addCard) >CreateOrupdateCard에 card로 전달된다.

### - Preview

prop cards를 maker/cards에서 전달받는다.  
API Object.keys를 이용해 cards를 맵핑하여 각각 Card에 prop으로 전달한다.

### - Card

Preview에서 cards[key](cards중 하나의 인덱스 해당오브젝트) prop을 card로 전달받아 나타내준다

# 📁 Service

## - auth_service

사용자가 로그인하거나 로그아웃,사용자가 바꼈을때 원하는 기능을 수행하는 기능들을 담당하는 클래스

## - card_repository

firebase에서 해당 경로의 데이터가 계속 업데이트 될때마다 서버에 동기화하고, firebase에 save or remove 해주는 기능을 담당하는 클래스

1. maker컴포넌트가 마운트가 되면 첫번째 useEffect에서 cardRepository의 syncCards가 먼저 호출이 된다.

2. syncCards의 함수가 수행된다. (ref.on이 실행)
   그리고 함수 수행이 완료되고 마지막으로는 arrow 함수가 리턴이 된다.(아직 수행되지 않음)

3. 리턴된 arrow 함수의 오브젝트가 stopSync에 할당이 되어지고

4. 여기 useEffect에서 리턴되는 stopSync를 수행하게될 arrow 함수는 나중에 컴포넌트가 언마운트되면 수행이 된다. (그전까지는 stopSync()는 호출되지 않음)
   !!useEffect return에서는 항상 function을 리턴해 주어야 함

## - firebase

firebase에서 받아온 apiKey,databaseURL등을 설정해놓고 env에 저장하여 gitignore로 숨김 처리한다.
firebase를 전부가져오지 않고 필요한 인터페이스를 정리한다.

## - image_uploader

이미지를 업로드해주는 클래스 (파이어베이스)
