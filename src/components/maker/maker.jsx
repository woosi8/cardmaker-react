import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
	const [cards, setCards] = useState({
		// key는 카드의 아이디이고 {오브젝트는} 벨류 : 오브젝트 형태로 관리해야 속도측면에서 좋다. 배열이 많아지면 업데이트시 맵핑할때 그만큼 속도가 저하된다.
		// key는 card의 id로 한다 1: {id:"1"}
		1: {
			id: "1",
			name: "ellie1",
			company: "Samsung",
			theme: "dark",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			fileName: "ellie",
			fileURL: null, // 사진 초기값을 주기위해
		},
		2: {
			id: "2",
			name: "ellie2",
			company: "Samsung",
			theme: "light",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			fileName: "ellie",
			fileURL: null,
		},
		3: {
			id: "3",
			name: "ellie3",
			company: "Samsung",
			theme: "colorful",
			title: "Software Engineer",
			email: "tmfvmehek@gmail.com",
			message: "go for it",
			fileName: "ellie",
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
		//card는 card_edit_form에서 updateCard로 입력추가된 업데이트된 값을 props로 가져온다
		//setCards를 이용해야 최신화가 잘된다 . setCards를 부를때의 cards의 상태,이 시점(최신)의 cards의 상태를 복사해온다
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card; // updated[card.id] 해당하는 이 키 아이디를 새로업데이트된 card로 변경 해준다
			// [card.id]는 1,2,3 중에 하나이고, 만약 1이면 state가 1인 오브젝트가 선택되고 그 오브젝트를 최신화된 card로 변경해준다
			return updated; // maker.js의 state(cards)를 업데이트 해줘야 입력한 값들이 화면에 나오게 된다 (그전에 입력값은 그저 card에 넣어놓은거 뿐)
		});
		console.log(card);
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
					FileInput={FileInput}
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
