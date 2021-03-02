import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
			id: "1",
			company: "Samsung",
			theme: "dark",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			name: "ellie1",
			fileURL: null, // 사진 초기값을 주기위해
		},
		{
			id: "2",
			company: "Samsung",
			theme: "light",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			name: "ellie2",
			fileURL: null,
		},
		{
			id: "3",
			company: "Samsung",
			theme: "colorful",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			name: "ellie3",
			fileURL: null,
		},
	]);
	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push("/");
			}
		});
	});
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor cards={cards} />
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
