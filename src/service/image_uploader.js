class ImageUploader {
	// 서버에 이미지를 업로드하고 업로드를 완료하면 그 결과값(서버의 해당 url)을 리턴하니깐  async promise를 사용한다
	async upload(file) {
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "docs_upload_example_us_preset");
		const result = await fetch(
			"https://api.cloudinary.com/v1_1/demo/image/upload",
			{
				method: "POST",
				body: data,
			}
		);
		return await result.json();
	}
}

export default ImageUploader;
