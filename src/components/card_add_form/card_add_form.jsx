import React, { useRef } from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
// onAdd를 제공한것이 editor.jsx editor는 maker에서 전달받는다
const CardAddForm = ({ onAdd }) => {
	const formRef = useRef();
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const onSubmit = (event) => {
		event.preventDefault(); //버튼클릭시 페이지가 로딩되는 현상 막기
		const card = {
			id: Date.now(), //uuid
			name: nameRef.current.value || "",
			company: companyRef.current.value || "",
			theme: themeRef.current.value,
			title: titleRef.current.value || "",
			email: emailRef.current.value || "",
			message: messageRef.current.value || "",
			fileName: "",
			fileURL: "",
		};
		formRef.current.reset(); //사용자가 입력해서 제출하고 나면 폼이 리셋이 나도록
		onAdd(card); //최종적으로 card가 maker에 const addCard = (card)값으로 전달된다
	};
	return (
		<form ref={formRef} className={styles.form}>
			<input
				ref={nameRef}
				className={styles.input}
				type="text"
				name="name"
				placeholder="Name"
			/>
			<input
				ref={companyRef}
				className={styles.input}
				type="text"
				name="company"
				placeholder="Company"
			/>
			<select
				ref={themeRef}
				className={styles.select}
				name="theme"
				placeholder="Theme"
			>
				<option placeholder="light">light</option>
				<option placeholder="dark">dark</option>
				<option placeholder="colorful">colorful</option>
			</select>
			<input
				ref={titleRef}
				className={styles.input}
				type="text"
				name="title"
				placeholder="Title"
			/>
			<input
				ref={emailRef}
				className={styles.input}
				type="text"
				name="email"
				placeholder="Email"
			/>
			<textarea
				ref={messageRef}
				className={styles.textarea}
				name="message"
				placeholder="Message"
			></textarea>
			{/* 클래스는 스타일 주려면 div안에 넣어줘야한다 */}
			<div className={styles.fileInput}>
				<ImageFileInput />
			</div>
			<Button name="Add" onClick={onSubmit} />
		</form>
	);
};

export default CardAddForm;
