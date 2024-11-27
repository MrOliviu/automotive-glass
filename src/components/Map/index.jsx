import React, { useRef } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";
import { WebsiteInformation } from 'tools/data';
import ButtonContact from "components/ButtonContact";
import SendEmailButton from "components/SendEmailButton";
import PhoneInput from 'components/PhoneInput';

function MyComponent(props) {

	const sendEmailButtonRef = useRef();
	const phoneInputRef = useRef();

	function SendEmailOnClick() {
		sendEmailButtonRef.current.SendEmail(phoneInputRef);
	}

	return (
		<CSSModules styles={styles}>
			<div styleName="container">
				<div styleName="map">
				<iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A94651eebac93bd285e5125be1d9e5c9e6af8b42cab4d1652990711dc5b257970&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
					{/* <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Adf6b87be918356dbc44da8151c0fb3c90e84218c7bff4d19fe3d70732cada109&amp;source=constructor" width="500" height="400" frameborder="0"></iframe> */}
					{/* <iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3Adf6b87be918356dbc44da8151c0fb3c90e84218c7bff4d19fe3d70732cada109&amp;source=constructor' frameBorder="0"></iframe> */}
				</div>
				<div styleName="info">
					<div styleName="row">
						<h2 styleName="title">КАК НАС НАЙТИ</h2>
					</div>
					<div styleName="details">
						<div styleName="row">
							<p>{WebsiteInformation.address}</p>
							<a styleName="phone" href={WebsiteInformation.tel}>{WebsiteInformation.phone}</a>
						</div>
						<div styleName="contact">
							<div styleName="row">
								<PhoneInput ref={phoneInputRef}></PhoneInput>
							</div>
							<div styleName="row">
								<SendEmailButton ref={sendEmailButtonRef} onClick={SendEmailOnClick}></SendEmailButton>
							</div>
						</div>
						<div styleName="row">
							<div styleName="icons">
								<ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-whatsapp"></i>
								</ButtonContact>
								<ButtonContact href={WebsiteInformation.telegramLink}>
									<i className="fa-brands fa-telegram"></i>
								</ButtonContact>
								{/* <ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-vk"></i>
								</ButtonContact> */}
								{/* <ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-instagram"></i>
								</ButtonContact> */}
								{/* <ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-youtube"></i>
								</ButtonContact> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</CSSModules>
	);
}

export default MyComponent;
