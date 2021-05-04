import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Editor</h1>
		{/* { {cards.map((card) => (  cards는 더이상 배열이 아닌 오브젝트이기 때문에} */}
		{/* 오브젝트를 맵핑해줄때 쓰는 Object.keys라는 함수를 이용 , cards안에 있는 모든 key를 받아온다(문자열로) */}
		{Object.keys(cards).map((
			key //key = 1,2,3, 이런식으로
		) => (
			<CardEditForm
				key={key}
				FileInput={FileInput}
				card={cards[key]}
				updateCard={updateCard}
				deleteCard={deleteCard}
			/>
		))}
		<CardAddForm FileInput={FileInput} onAdd={addCard} />
	</section>
);

export default Editor;
