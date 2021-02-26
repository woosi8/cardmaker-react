import React from "react";
import style from "./header.module.css";

const Header = (
	{ onLogout } //
) => (
	<header className={style.header}>
		{onLogout && (
			<button className={style.header} onClick={onLogout}>
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
