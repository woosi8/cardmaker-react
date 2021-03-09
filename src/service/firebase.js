import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase (먼저 firebase 공홈 Authentication/ sing-in method에서 해당 프로그램 enabled 해줘야 한다)
const fireBaseApp = firebase.initializeApp(firebaseConfig); // auth_service에 return (동일한 인터페이스)
export const firebaseAuth = fireBaseApp.auth();
export const firebaseDatabase = fireBaseApp.database();
// 그전에는 firebase 자체에 있는 auth.provider로 접근했었는데
// 코드 개선을 위해서 firebase 안에 작은 단위의 인터페이스를 써야하는데 거기에는 auth.provider가 없어서 아래처럼 정의해줘서 써야한다
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
// export default fireBaseApp;
