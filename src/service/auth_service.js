import firebase from "firebase";
import firebaseApp from "./firebase"; //

// 사용자가 로그인하거나 로그아웃하는 걸 담당하는 클래스
class AuthService {
	//providerName = 구글 인지 트위터인지 무엇인지 받아오기
	//lgoin에서 클릭시 해당 text를 불러온다
	login(providerName) {
		const authProvider = new firebase.auth[`${providerName}AuthProvider`](); // 파이어 홈피에서 해당하는 회사의 provider object를 providerName으로 받아온다
		// firebaseApp : 그냥 firebase가 아니라 firabse.js에서 이니셜라이즈된 firebaseApp을 사용해야 한다
		return firebaseApp.auth().signInWithPopup(authProvider); //공홈에 twitter에서 팝업설명서대로 따온다 (provider) 전달
	}
	logout() {
		firebase.auth().signOut();
	}

	// 사용자가 바꼈을때 원하는 기능을 수행하는 콜백함수
	onAuthChange(onUserChanged) {
		firebase.auth().onAuthStateChanged((user) => {
			//사용자가 바뀔떄마다 전달받은 사용자 정보를 함수에 전달 호출
			onUserChanged(user);
		});
	}
}

export default AuthService;
