import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
const CardEditForm = ({ card }) => {
	const { name, company, title, email, message, theme, fileURL } = card; //props으로 maker에 있는 cards 오브젝트를 가져온다
	const onSubmit = () => {};
	return (
		<form className={styles.form}>
			<input className={styles.input} type="text" name="name" value={name} />
			<input
				className={styles.input}
				type="text"
				name="company"
				value={company}
			/>
			<select className={styles.select} name="theme" value={theme}>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="colorful">Colorful</option>
			</select>
			<input className={styles.input} type="text" name="title" value={title} />
			<input className={styles.input} type="text" name="email" value={email} />
			<textarea
				className={styles.textarea}
				name="message"
				value={message}
			></textarea>
			{/* 클래스는 스타일 주려면 div안에 넣어줘야한다 */}
			<div className={styles.fileInput}>
				<ImageFileInput />
			</div>
			<Button name="Delete" onClick={onSubmit} />
		</form>
	);
};

export default CardEditForm;
