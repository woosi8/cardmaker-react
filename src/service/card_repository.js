import fireBaseApp from "./firebase";
class CardRepository {
	syncCards(userId, onUpdate) {
		//firebase에서 해당 경로의 데이터가 계속 업데이트 될때마다 ,snapshot의 value설정이 되어있다면 onUpdate계속 호출한다
		const ref = fireBaseApp.database().ref(`${userId}/cards`);
		//firebase Listen for value events 페이지에서 참고
		// value - 값이 변경될때 마다 알고싶다
		ref.on("value", (snapshot) => {
			const value = snapshot.val();
			value && onUpdate(value); //value가 있다면 onUpdate함수를 호출한다
		});

		return () => ref.off(); //stopSync
	}
	//maker에서 id,최신화된 card를 받아온다
	saveCard(userId, card) {
		fireBaseApp.database().ref(`${userId}/cards/${card.id}`).set(card); //firebase /console/ Realtiem Database에 경로를 따라 저장해준다
	}
	removeCard(userId, card) {
		fireBaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
	}
}

export default CardRepository;
