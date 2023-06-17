import React, { useEffect, useState } from 'react';
import CSSModules from 'CSSModules';
import { Conversation } from 'tools/botConversation';
import { WebsiteInformation } from 'tools/data';
import styles from "./index.module.css";

function MyComponent(props) {

	const [value, setValue] = useState("");
	const [isWriting, setIsWriting] = useState(true);

	useEffect(() => {
		if (isWriting == true) {
			setTimeout(() => {
				setIsWriting(false);
			}, 1000);
		}
	});

	function updateValue(option) {
		props.onSelect(option);
		setValue(option);
	}

	return (
		<CSSModules styles={styles}>
			{isWriting ?
				<div styleName="container">
					<div styleName="messageContainer">
						<div styleName="icon">
							<i className="fa-solid fa-message-bot"></i>
						</div>
						<div styleName="message">
							<div styleName="writing">
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div> :
				<div styleName="container">
					<div styleName="messageContainer">
						<div styleName="icon">
							<i className="fa-solid fa-message-bot"></i>
						</div>
						<div styleName="message">
							<p styleName="pmessage">{props.message}</p>
							{!props.options || props.options.length == 0 ?
								<p styleName="contact">
									Свяжитесь с нами для более подробней информации.
									<br />
									<a href={WebsiteInformation.whatsapp} target="_blank">{WebsiteInformation.phone}</a>
									<br />
									<div styleName="links">
										<a styleName="link" target='_blank' href={WebsiteInformation.whatsapp}>
											<i className="fa-brands fa-whatsapp"></i>
										</a>
										<a styleName="link" target='_blank' href={WebsiteInformation.telegramLink}>
											<i className="fa-brands fa-telegram"></i>
										</a>
									</div>
								</p> : null}
						</div>
					</div>
					{props.options || props.options.length != 0 ?
						<div styleName="options">
							{props.options.map(option =>
								<button key={option} onClick={() => { updateValue(option) }} styleName="option" className="default">
									{Conversation[option].value}
								</button>)}
						</div> : null
					}
				</div>
			}
		</CSSModules>
	);
};

export default MyComponent;