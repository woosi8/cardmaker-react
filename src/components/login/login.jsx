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

	useEffect(() => {
		// onAuthChange : authService에 변화가 있따면 (내장 함수)
		authService.onAuthChange((user) => {
			// user가 있다면 (로그인) goToMAker로 uid 전달
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
