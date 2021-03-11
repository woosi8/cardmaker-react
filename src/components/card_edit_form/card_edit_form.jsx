import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
	const { name, company, title, email, message, theme, fileName } = card; //props으로 maker에 있는 cards 오브젝트를 가져와서 맞는 키값에 할당

	const onFileChange = (file) => {
		//file은 image_file_input.jsx에서온 name,url 데이터
		updateCard({
			// = CreateOrupdateCard
			...card,
			fileName: file.name,
			fileURL: file.url,
		});
	};
	const onChange = (event) => {
		if (event.currentTarget == null) {
			return;
		}
		event.preventDefault();
		// 순서는: 1. 기존의 card값을 복사하고 + 업데이트 되는 내용을 추가(or 덮어써서) 해서 새로운 오브젝트를 먼저 만들고 2. 그리고 updateCard에 인자로 전달해줘요
		updateCard({
			...card, //기존 카드의 키와 벨류는 그대로 쓰면서
			// 클릭한 input의 name이 card의 key가 되고, value가 우리의 value가 된다
			[event.currentTarget.name]: event.currentTarget.value, // 키는 지금 발생하고 있는 이벤트의 타겟의 이름을 쓰고: value즉 입력되는 값을 쓴다
			// Computed property names : updateCard[event.currentTarget.name] = event.currentTarget.value
		}); // 여기가지는 updateCard만 되어있는상태고 화면에 보일려면 card state가 업데이트가 되야한다
	};
	const onSubmit = () => {
		deleteCard(card);
	};
	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type="text"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<input
				className={styles.input}
				type="text"
				name="company"
				value={company}
				onChange={onChange}
			/>
			<select
				className={styles.select}
				name="theme"
				value={theme}
				onChange={onChange}
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="colorful">Colorful</option>
			</select>
			<input
				className={styles.input}
				type="text"
				name="title"
				value={title}
				onChange={onChange}
			/>
			<input
				className={styles.input}
				type="text"
				name="email"
				value={email}
				onChange={onChange}
			/>
			<textarea
				className={styles.textarea}
				name="message"
				value={message}
				onChange={onChange}
			></textarea>
			{/* 클래스는 스타일 주려면 div안에 넣어줘야한다 */}
			<div className={styles.fileInput}>
				<FileInput name={fileName} onFileChange={onFileChange} />
			</div>
			<Button name="Delete" onClick={onSubmit} />
		</form>
	);
};

export default CardEditForm;
