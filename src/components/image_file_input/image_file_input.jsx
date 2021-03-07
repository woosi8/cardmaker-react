import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
	const inputRef = useRef();
	const onButtonClick = (event) => {
		event.preventDefault();
		inputRef.current.click();
	};
	// const onChange = (event) => {
	// 	imageUploader.upload(event.target.files[0]).then(console.log);
	// }; 여기서 아예 비동기적으로 처리할수 있다 async
	const onChange = async (event) => {
		const uploaded = await imageUploader.upload(event.target.files[0]);
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
			{/* button을 클릭시 input이 발동되도록 해야한다 */}
			<button className={styles.button} onClick={onButtonClick}>
				{name || "No file"}
			</button>
		</div>
	);
};

export default ImageFileInput;
