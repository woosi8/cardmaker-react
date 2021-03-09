import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
	const history = useHistory();
	const historyState = history?.location?.state; //login 에서 history에 저장한 state에 user id를 불러온다

	const [cards, setCards] = useState({
		// key는 카드의 아이디이고 {오브젝트는} 벨류 : 오브젝트 형태로 관리해야 속도측면에서 좋다. 배열이 많아지면 업데이트시 맵핑할때 그만큼 속도가 저하된다.
		// key는 card의 id로 한다 1: {id:"1"}
	});
	// 리액트 훅으로 state를 다른 변수로 따로 관리할수 있다는 장점
	const [userId, setUserId] = useState(historyState && historyState.id); // historyState는 login 컴포넌트에서 오면 값이 있고 다른 컴포넌트에서 오면 값이 없다
	const onLogout = () => {
		authService.logout();
	};

	// 데이터 보존하기 위한 state
	useEffect(() => {
		if (!userId) {
			return;
		}
		const stopSync = cardRepository.syncCards(userId, (cards) => {
			//2번째 인자 cards는 prop으로 onUpdate를 호출한다 value = cards 우리 state에 넣어서  업데이트한다
			setCards(cards); // cards(새로운 데이터)를 받아오면 우리의 state를 업데이트 한다
		});
		// 끄고 싶을때 (컴포넌트가 업마운트 되었을때 더이상 보이지 않을때)
		// 위에 작업이 다 수행이 완료되고 마지막으로 return 된다
		return () => {
			stopSync(); // 컴포넌트가 언마운트되면 수행한다
		};
	}, [userId, cardRepository]); // 이 useEffect는 maker 컴포넌트가 마운트가 되었을때 그리고 사용자의 userid, cardRepository가 변경될때마다 쓴다

	// 사용자가 변경될때 콜백 (로그인)
	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				history.push("/cardmaker-react");
			}
		});
	}, [authService, userId, history]); //authService가 변경될때만 등록되도록 (dependancy)

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

		// 카드가 업데이트 되어서 우리 컴포넌트에 우리 카드를 업데이트 한다음에(위에서 처리) 다음 아래에서 데이터 베이스에 업데이트 해준다
		cardRepository.saveCard(userId, card);
	};
	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
		cardRepository.removeCard(userId, card);
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
