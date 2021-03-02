import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => (
	<section className={styles.preview}>
		<h1 className={styles.title}>Card Preview</h1>
		<ul className={styles.cards}>
			{/* cards를 돌면서 각각의 카드를 해당하는 컴포넌트로 변환 */}
			{cards.map((card) => (
				<Card card={card} />
			))}
		</ul>
	</section>
);

export default Preview;
