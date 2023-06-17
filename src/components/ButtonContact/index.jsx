import React, { } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<a href={props.href} target="_blank" styleName="btn">
				{props.children}
			</a>
		</CSSModules>
	);
}

export default MyComponent;