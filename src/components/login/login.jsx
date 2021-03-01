import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
	const history = useHistory();
	const goToMaker = (userId) => {
		// history.push("/.maker");
		//사용자의 정보도 같이 넘어가야한다 (uid)
		history.push({
			//추가적인 정보들을 전달하고싶을때는 오브젝트 이용
			pathname: "/maker",
			state: { id: userId },
		});
	};

	const onLogin = (event) => {
		authService //
			.login(event.currentTarget.textContent) // authService의 provier를 전달해야한다
			.then((data) => goToMaker(data.user.uid));
	};

	// 접속할때마다 로그인 되지 않고 로그인을 기억하고 있어 접속시 로그인 화면으로 바로 넘어가게 해주기
	useEffect(() => {
		// onAuthChange : authService에 변화가 있다면 (내장 함수)
		authService.onAuthChange((user) => {
			// user(로그인)가 있다면  goToMAker로 uid 전달
			user && goToMaker(user.uid);
		});
	});

	return (
		<section className={styles.login}>
			<Header />
			<section>
				<h1>Login</h1>
				<ul className={styles.list}>
					<li className={styles.item}>
						<button className={styles.button} onClick={onLogin}>
							Google
						</button>
					</li>
					<li className={styles.item}>
						<button className={styles.button} onClick={onLogin}>
							Github
						</button>
					</li>
				</ul>
			</section>
			<Footer />
		</section>
	);
};

export default Login;
