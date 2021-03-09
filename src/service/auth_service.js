// import firebase from "firebase"; // 전체를 가져오지 않고 필요한 기능만 가져온다
import { firebaseAuth, githubProvider, googleProvider } from "./firebase"; //

// 사용자가 로그인하거나 로그아웃하는 걸 담당하는 클래스
class AuthService {
	//providerName = 구글 인지 트위터인지 무엇인지 받아오기
	//lgoin에서 클릭시 해당 text를 불러온다
	login(providerName) {
		const authProvider = this.getProvider(providerName); //  해당하는 providerName을 주는 함수
		// new firebase.auth[`${providerName}AuthProvider`](); // 파이어 홈피에서 해당하는 회사의 provider object를 providerName으로 받아온다
		// firebaseApp : 그냥 firebase가 아니라 firabse.js에서 이니셜라이즈된 firebaseApp을 사용해야 한다
		return firebaseAuth.signInWithPopup(authProvider); //공홈에 twitter에서 팝업설명서대로 따온다 (provider) 전달
	}
	logout() {
		firebaseAuth.signOut();
	}

	// 사용자가 바꼈을때 원하는 기능을 수행하는 콜백함수
	//(onUserChanged)는 login.jsx에서 함수자체로 전달받는다
	onAuthChange(onUserChanged) {
		//(user) 사용자가 바뀔때마다 전달받는 사용자 정보
		firebaseAuth.onAuthStateChanged((user) => {
			//사용자가 바뀔떄마다 전달받은 사용자 정보를 함수에 전달 호출
			onUserChanged(user);
		});
	}
	getProvider(providerName) {
		switch (providerName) {
			case "Google":
				return googleProvider;
			case "Github":
				return githubProvider;
			default:
				throw new Error(`not supported provider: ${providerName}`);
		}
	}
}

export default AuthService;
