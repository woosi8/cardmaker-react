import React, { useRef, useState } from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";
// onAdd를 제공한것이 editor.jsx editor는 maker에서 전달받는다
const CardAddForm = ({ FileInput, onAdd }) => {
	const formRef = useRef();
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const titleRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	// 파일이 바뀌면(사용자가 업로드) 하면 state로 가지고 있는다 왜냐면 변경해놨다가 add버튼을 누를때만 업데이트 되기떄문
	const [file, setFile] = useState({ fileName: null, fileURL: null });
	const onFileChange = (file) => {
		// file을 받아와면 setFile로 업데이트 해준다
		setFile({
			fileName: file.name,
			fileURL: file.url,
		});
	};

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
			// image upload
			fileName: file.fileName || "",
			fileURL: file.fileURL || "",
		};
		formRef.current.reset(); //사용자가 입력해서 제출하고 나면 폼이 리셋이 나도록
		onAdd(card); //최종적으로 card가 maker에 const addCard = (card)값으로 전달된다
		setFile({ fileName: null, fileURL: null }); // 사진 업데이트 하고 추가한 다음 add에 이름,url도 초기화되도록
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
				<FileInput onFileChange={onFileChange} name={file.fileName} />
			</div>
			<Button name="Add" onClick={onSubmit} />
		</form>
	);
};

export default CardAddForm;
