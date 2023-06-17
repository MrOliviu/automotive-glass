import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styles from "./index.module.css";
import CSSModules from 'CSSModules';
import emailjs from '@emailjs/browser';
import { WebsiteInformation } from 'tools/data';

export default forwardRef((props, ref) => {

	const [isLoading, setLoading] = useState(false);

	const buttonRef = useRef();

	const lastPhoneSent = useRef("");

	useImperativeHandle(ref, () => ({
		buttonRef,
		SendEmail,
	}));

	function IsValid(phone) {
		if (phone.replace(/\D/g, '').length != 11) {
			alert("Ваш телефон недействителен!");
			return false;
		}
		return true;
	}

	async function SendEmail(phoneInputRef) {
		const phone = phoneInputRef.current.value;
		if (isLoading) return;
		if (!IsValid(phone)) return;
		setLoading(true);
		let publicKey = "SAyshQvRR-8sJQpwv";
		let serviceID = "service_hsg8aqg";
		let templateID = "template_9zhc18g";
		// let publicKey = "JGf-ywOo0_rBrfRiT";
		// let serviceID = "service_nsxe8qb";
		// let templateID = "template_4erq0ck";
		var templateParams = {
			phone,
		};
		try {
			let response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
			if (response.status == 200) {
				phoneInputRef.current.ClearInput();
				Message("Спасибо! Мы скоро свяжемся с вами.");
			} else {
				phoneInputRef.current.ClearInput();
				Message("Произошла ошибка. Пожалуйста свяжитесь с нами по номеру телефона: " + WebsiteInformation.phone);
			}
		} catch (error) {
			phoneInputRef.current.ClearInput();
			Message("Произошла ошибка. Пожалуйста свяжитесь с нами по номеру телефона: " + WebsiteInformation.phone);
		}
	}

	function Message(message) {
		setLoading(false);
		setTimeout(() => {
			alert(message);
		}, 100);
	}

	return (
		<CSSModules styles={styles}>
			<button ref={buttonRef} onClick={props.onClick} styleName="button" className='default'>
				{!isLoading ?
					<p styleName="text">Оставить заявку</p>
					:
					<svg styleName="spinner" width="35px" height="35px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
						<circle styleName="path" fill="none" strokeWidth="3" strokeLinecap="round" cx="18" cy="18" r="15"></circle>
					</svg>
				}
			</button>
		</CSSModules>
	);
});