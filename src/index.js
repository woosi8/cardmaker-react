import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
// import reportWebVitals from './reportWebVitals';

const authService = new AuthService();
// 최상위 전달자 index라서 여기서 이미지를 전달한다
const imageUploader = new ImageUploader();
// component 자체를 만들어 다른 컴포넌트로 전달
// 만든 componenet에서 서비스를 추가하거나  할때 여기에서만 변경해주면 다른 전달하는곳에는 수정할 필요가 없어 심플하다
//component prop은 대문자로 전달
// ImageFileInput props으로 전달해주는 이유 : ImageFileInput에 onclick이라던지 다양한 props을 전달할수 있다.
// 사용자가 FileInput을 사용할때 원하는 proprs를 전달해서 ImageFileInput {...props} 전달해주기 때문에 확장성이 좋다
// imageUploader={imageUploader}는 필수적이 prop은 injection해놓는다 .
// component prop은 대문자로 시작
const FileInput = (props) => (
	<ImageFileInput {...props} imageUploader={imageUploader} />
);
ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} FileInput={FileInput} />
	</React.StrictMode>,
	document.getElementById("root")
);
