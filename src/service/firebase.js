import firebase from "firebase";
var firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase (먼저 firebase 공홈 Authentication/ sing-in method에서 해당 프로그램 enabled 해줘야 한다)
const fireBaseApp = firebase.initializeApp(firebaseConfig); // auth_service에 return (동일한 인터페이스)
export default fireBaseApp;
