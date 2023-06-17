import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";

const MyComponent = forwardRef((props, ref) => {

	const dropdownRef = useRef();
	const [isActive, setActive] = useState(false);
	const [value, setValue] = useState(props.defaultValue ? props.defaultValue : "");
	const [options, setOptions] = useState(props.options ? props.options : ["-"]);

	useImperativeHandle(ref, () => ({
		value,
		element: dropdownRef,
		setOptions,
		setValue
	}));

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setActive(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	function toggleDropdown() {
		setActive(!isActive);
	}

	function selectOption(option) {
		setValue(option);
		if (props.onChange) props.onChange(option);
		setActive(false);
	}

	return (
		<CSSModules styles={styles}>
			<div ref={dropdownRef} styleName={`dropdown ${isActive ? "active" : ""}`} >
				<button styleName="select" onClick={toggleDropdown}>
					<p styleName="value">{value}</p>
					<i className="fa-sharp fa-solid fa-caret-down"></i>
				</button>
				<div styleName="options">
					<ul>
						{options.map((option, i) => <li key={i} styleName={`${value == option ? "active" : ""}`} onClick={() => { selectOption(option) }}>{option}</li>)}
					</ul>
				</div>
			</div>

		</CSSModules>
	);
});

export default MyComponent;