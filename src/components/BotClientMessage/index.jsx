import React, { } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<div styleName="container">
				<div styleName="icon">
					<i className="fa-solid fa-user"></i>
				</div>
				<div styleName="message">
					<p>{props.message}</p>
				</div>
			</div>
		</CSSModules>
	);
};

export default MyComponent;