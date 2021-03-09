import React, { memo, useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
	const [loading, setLoading] = useState(false); //기본값은 당연히 loading되고 있지 않으니깐 false
	const inputRef = useRef();
	const onButtonClick = (event) => {
		event.preventDefault();
		inputRef.current.click();
	};

	// const onChange = (event) => {
	// 	imageUploader.upload(event.target.files[0]).then(console.log);
	// }; 이거말고 아래에 async로 비동기적으로 처리할수 있다
	const onChange = async (event) => {
		setLoading(true);
		const uploaded = await imageUploader.upload(event.target.files[0]);
		setLoading(false); //로딩이 끝나고 다시 기본값으로
		// onFileChange prop으로 전달된 콜백함수에 아래 정보들을 전달한다
		onFileChange({
			name: uploaded.original_filename,
			url: uploaded.url,
		});
	};
	return (
		<div className={styles.container}>
			<input
				ref={inputRef}
				className={styles.input}
				type="file"
				accept="image/*"
				name="file"
				onChange={onChange}
			/>
			{/* 로딩이 아닐때 (초기화면)button을 클릭시 input이 발동되도록 해야한다 */}
			{!loading && (
				<button
					className={`${styles.button} ${name ? styles.pink : styles.grey}`}
					onClick={onButtonClick}
				>
					{name || "No file"}
				</button>
			)}
			{loading && <div className={styles.loading}></div>}
		</div>
	);
});

export default ImageFileInput;
