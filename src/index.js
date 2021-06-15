import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
// import reportWebVitals from './reportWebVitals';
import CardRepository from "./service/card_repository";

const authService = new AuthService();
// 최상위 전달자 index라서 여기서 이미지를 전달한다
const imageUploader = new ImageUploader();
// FileInput
// 여기서 변수로 component 자체를 만들어 다른 컴포넌트로 전달 (여기서는 필요한 곳이 card_add_form and card_edit_form 으로 전달해줬다)
// 만든 componenet에서 서비스를 추가하거나  할때 여기에서만 변경해주면 다른 전달하는곳에는 수정할 필요가 없어 심플하다
// imageUploader={imageUploader}는 확정적으로 쓰이기 때문에 prop은 injection해놓는다 .
// component prop은 대문자로 시작
const FileInput = memo((props) => (
	<ImageFileInput {...props} imageUploader={imageUploader} />
));

const cardRepository = new CardRepository();

ReactDOM.render(
	<React.StrictMode>
		<App
			authService={authService}
			FileInput={FileInput}
			cardRepository={cardRepository}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
