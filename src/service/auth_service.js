import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
	login(providerName) {
		const authProvider = new firebase.auth[`${providerName}AuthProvider`](); // 파이어 홈피에서 로그인하는 사이트이름을 providerName에 받아온다
		return firebaseApp.auth().signInWithPopup(authProvider);
	}
}

export default AuthService;
