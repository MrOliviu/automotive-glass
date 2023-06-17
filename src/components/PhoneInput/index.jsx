import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styles from "./index.module.css";
import CSSModules from 'CSSModules';

export default forwardRef((props, ref) => {

	const inputRef = useRef();

	const [value, setValue] = useState("");

	useImperativeHandle(ref, () => ({
		input: inputRef.current,
		value,
		ClearInput
	}));

	function UpdateValue(e) {
		const inputValue = e.target.value;
		e.target.value = inputValue.replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{3})(\d{2})(\d{2}).*/, '($1) $2-$3-$4');
		setValue("+7 " + e.target.value);
	}

	function ClearInput() {
		inputRef.current.value = "";
		setValue("");
	}

	return (
		<CSSModules styles={styles}>
			<div styleName="container">
				<div styleName="code">+7</div>
				<input ref={inputRef} onInput={UpdateValue} styleName="input" type="tel" placeholder="Ваш номер телефона" />
			</div>
		</CSSModules>
	);
});