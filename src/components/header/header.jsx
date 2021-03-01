import React from "react";
import style from "./header.module.css";

const Header = (
	{ onLogout } // props에 login이 되었다면 logout 콜백할수를 받아온다
) => (
	<header className={style.header}>
		{onLogout && (
			<button className={style.logout} onClick={onLogout}>
				Logout
			</button>
		)}
		<img
			className={style.logo}
			src={process.env.PUBLIC_URL + "/images/logo.png"}
			alt="logo"
		/>

		<h1 className={style.title}>Business Card Maker</h1>
	</header>
);

export default Header;
