// 컴포넌트 디펜던시 인젝션 10.17
// 컴포넌트 디펜던시 인젝션은 props의 갯수가 많다고 무작정 쓰기 보다는,
// A컴포넌트 안에서 B컴포넌트를 만드는데 B컴포넌트를 만들기 위한 props의 갯수가 많다면 그리고 그 props들이 A에서 쓰이지 않는다면 (그러니깐 단순히 B를 만들기 위해서 A에 모든것을 전달하기 보다는 -> 한 클래스 안에서 다른 클래스를 직접 만든다면, 이건 DI 원칙에서 어긋나겠죠?)
// 그럴때 B를 외부에서 만들고 단순히 B를 A에 전달해 주면 되어요.
// 그럼 이미 만들어진 B를 다른 컴포넌트에서 필요하다면 또 단순히 B만 전달해 주면 되겠죠?
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
