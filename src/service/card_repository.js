import { firebaseDatabase } from "./firebase";
class CardRepository {
	syncCards(userId, onUpdate) {
		//firebase에서 해당 경로의 데이터가 계속 업데이트 될때마다 ,snapshot의 value설정이 되어있다면 onUpdate계속 호출한다
		const ref = firebaseDatabase.ref(`${userId}/cards`);
		// on기능으로 지속적으로 데이터가 변경될때마다 들을수 있다
		// 원하는 콜백을 전달해서 데이터가 변경될때마다 snapshot을 전달한다
		// snapshot val안에 해당하는 데이터가 들어있다
		ref.on("value", (snapshot) => {
			const value = snapshot.val(); //ref경로에 데이터가 업데이트된다면 snaphot.val를
			value && onUpdate(value); // 즉 데이터 베이스가 업데이트 될때마다 value와 함께 maker에 syncCard에 두번째 인자(cards) 콜백함수에 전달
		});
		return () => ref.off(); //stopSync
	}
	//maker에서 id,최신화된 card를 받아온다
	saveCard(userId, card) {
		firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card); //firebase /console/ Realtiem Database에 경로를 따라 저장해준다
	}
	removeCard(userId, card) {
		firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
	}
}

export default CardRepository;
