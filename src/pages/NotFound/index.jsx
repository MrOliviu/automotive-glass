import React, { } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<div styleName='container'>
				<img src={require("resources/images/404-image.jpg")} alt="404 image" />
			</div>
		</CSSModules>
	);
}

export default MyComponent;