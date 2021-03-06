import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
	const history = useHistory();
	const historyState = history?.location?.state; //login 에서 history에 저장한 state에 user id를 불러온다

	const [cards, setCards] = useState({});
	console.log(cards);
	// 리액트 훅으로 state를 다른 변수로 따로 관리할수 있다는 장점
	const [userId, setUserId] = useState(historyState && historyState.id); // historyState는 login 컴포넌트에서 오면 값이 있고 다른 컴포넌트에서 오면 값이 없다

	// 지역변수의 콜백함수가 다른 자식 컴포넌트로 전달될때는 useCallback을 이용해 캐쉬가 되도록 계속 만들어지지 않도록 하는게 중요하다
	// maker의 지역변수로써 maker가 업데이트 될때마다 랜더링이 된다. 함수가 계속 호출이 되어도 동일한 데이터를 쓸려고 usuCallback
	const onLogout = useCallback(() => {
		authService.logout();
	}, [authService]); // useCallback으로 변경이 안되지만 다만 authService 프롭의 변화가 생기면 그떄는 다시 새로운 콜백을 만든다

	// 데이터 보존하기 위한
	useEffect(() => {
		if (!userId) {
			return;
		}
		const stopSync = cardRepository.syncCards(userId, (cards) => {
			//cards cardrepository에서 value가 들어온다
			//2번째 인자 cards는 prop으로 onUpdate를 호출한다 value = cards 우리 state에 넣어서  업데이트한다
			setCards(cards); // cards(새로운 데이터)를 받아오면 우리의 state를 업데이트 한다
		});
		// 끄고 싶을때 (컴포넌트가 업마운트 되었을때 더이상 보이지 않을때)
		// 위에 작업이 다 수행이 완료되고 마지막으로 return 된다
		return () => {
			stopSync(); // 컴포넌트가 언마운트되면 수행한다(CardRepository의 return값이 온다)
		};
	}, [userId, cardRepository]); // 이 useEffect는 maker 컴포넌트가 마운트가 되었을때 그리고 사용자의 userid, cardRepository가 변경될때마다 쓴다

	// 사용자가 변경될때 콜백 (로그인)
	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			}
			// 로그아웃시
			else {
				history.push("/cardmaker-react");
			}
		});
	}, [authService, userId, history]); //authService가 변경될때만 등록되도록 (dependancy)

	const CreateOrupdateCard = (card) => {
		//card는 card_edit_form,add에서 updateCard로 입력추가된 업데이트된 값을 props로 가져온다
		//setCards를 이용해야 최신화가 잘된다 . setCards를 부를때의 cards의 상태,이 시점(최신)의 cards의 상태를 복사해온다
		setCards((cards) => {
			const updated = { ...cards };
			// cards는 기존의 오브젝트고 card는 새로운 입력값을 가진
			updated[card.id] = card; // 기존 cards에 key값에 새로만든 card.id(즉 임의의 숫자값)를 넣고 거기에 card 값들을 업데이트해준다
			// edit에서는 card.id(edit하고 있는 인덱스)에 해당하는 정보들이 새로운 card값으로 덮어진다
			// add에서는 애초에 card.id에 맞는 인덱스가 오브젝트에 없으니깐 새로운것이 추가가 된다
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
