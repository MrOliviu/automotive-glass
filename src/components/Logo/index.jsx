import React, { } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<div styleName="logo">
				<img styleName="image" src={require("resources/images/logo-2.png")} alt="logo image" />
				<p styleName="text">
					АВТОМОБИЛЬНОЕ
					<b> СТЕКЛО</b>
				</p>
			</div>
		</CSSModules>
	);
}

export default MyComponent;
