import React, { useEffect, Fragment, useRef, useState } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";
import BotMessage from "components/BotMessage";
import BotClientMessage from "components/BotClientMessage";
import { Conversation } from 'tools/botConversation';

function MyComponent(props) {

	const [isActive, setActive] = useState(false);
	const [refresh, setRefresh] = useState(0);
	const valueHistory = useRef([]);
	const conversationRef = useRef();
	const firstTimeOpen = useRef(true);

	useEffect(() => {
		conversationRef.current.scroll(0, conversationRef.current.scrollHeight);
	});

	function toggleContent() {
		firstTimeOpen.current = false;
		if (isActive) {
			valueHistory.current = [];
			firstTimeOpen.current = true;
		}
		setActive(!isActive);
	}

	function closeContent() {
		firstTimeOpen.current = true;
		valueHistory.current = [];
		firstTimeOpen.current = true;
		setActive(false);
	}

	function contentClass() {
		if (isActive) return "active";
		else return "";
	}

	function updateValueHistory(value) {
		valueHistory.current.push(value);
		setRefresh(refresh + 1);
	}

	return (
		<CSSModules styles={styles}>
			<div styleName="bot">
				<button styleName="icon" className="default" onClick={toggleContent}>
					<i className="fa-solid fa-message-bot"></i>
				</button>

				<div styleName={`content ${contentClass()}`}>
					<div styleName="inner">
						<div styleName="header">
							<p>Чат Бот</p>
							<button styleName='close-btn' className='default' onClick={closeContent}>
								<i className="fa-regular fa-xmark"></i>
							</button>
						</div>
						<div styleName="conversation" ref={conversationRef}>
							{firstTimeOpen.current ? null : <BotMessage message="Здравствуйте, чем я могу Вам помочь?" onSelect={updateValueHistory} options={["Автостекла", "Автостекла.Установка", "Полировка", "Бронирование", "Тонировка"]}></BotMessage>}
							{valueHistory.current.map((value, i) => {
								return (
									<Fragment key={i}>
										<BotClientMessage message={Conversation[value].client}></BotClientMessage>
										<BotMessage onSelect={updateValueHistory} message={Conversation[value].message} options={Conversation[value].options}></BotMessage>
									</Fragment>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</CSSModules>
	);
}

export default MyComponent;