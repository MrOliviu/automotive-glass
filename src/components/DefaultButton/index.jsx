import React, { } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<button styleName="button" onClick={props.onClick}>
				<span styleName="text">{props.text}</span>
			</button>
		</CSSModules>
	);
}

export default MyComponent;