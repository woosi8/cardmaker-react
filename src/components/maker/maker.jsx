import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
	const [cards, setCards] = useState({
		// key는 카드의 아이디이고 {오브젝트는} 벨류 : 오브젝트 형태로 관리해야 업데이트시 맵핑할때 배열이 많으면 그만큼 속도가 저하된다.
			id: "1",
			company: "Samsung",
			theme: "dark",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			name: "ellie1",
			fileURL: null, // 사진 초기값을 주기위해
		},
		2: {
			id: "2",
			company: "Samsung",
			theme: "light",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			name: "ellie2",
			fileURL: null,
		},
		3: {
			id: "3",
			company: "Samsung",
			theme: "colorful",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			name: "ellie3",
			fileURL: null,
		},
	});
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

	// state가 Obejct로 처리되면서 중복되어 필요없어짐
	// card_add_form에서가 아니고 maker에서 최종적으로 받기 때문에 여기서 만들어줘야 한다
	// const addCard = (card) => {
	// 	// ...cards 기존에 있는 cards를 그대로 복사해오고  추가하는 하나만(card) 더해준다
	// 	const updated = [...cards, card];
	// 	// state API (setCards)로 updated되는거 저장
	// 	setCards(updated);
	// };
	const CreateOrupdateCard = (card) => {
		setCards((cards) => {
			//setCards를 부를때의 이상태,이 시점(최신) 을 복사한다
			const updated = { ...cards };
			updated[card.id] = card; //card는 업데이트된 값
			return updated;
		});
	};
	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor
					cards={cards}
					addCard={CreateOrupdateCard}
					updateCard={CreateOrupdateCard}
					deleteCard={deleteCard}
				/>
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
