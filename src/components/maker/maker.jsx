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
				history.push("/cardmaker-react");
			}
		});
	});

	const addCard = (card) => {
		// ...cards 기존에 있는 cards를 그대로 복사해오고  추가하는 하나만(card) 더해준다
		const updated = [...cards, card];
		// state API (setCards)로 updated되는거 저장
		setCards(updated);
	};
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor cards={cards} addCard={addCard} />
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
