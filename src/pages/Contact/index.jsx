import React, { } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";
import Map from "components/Map";
import { WebsiteInformation } from 'tools/data';

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<main styleName="main">
				<div styleName="background">
					<img src={require("resources/images/222.png")} alt="background image" />
				</div>
				<div styleName="content">
					<div styleName="row">
						<h1 styleName="title">КОНТАКТЫ</h1>
					</div>
					<div styleName="row">
						<ul styleName="description">
							<li><p>Добро пожаловать в наш установочный центр в <b>г.Санкт-Петербург</b>.</p>
							</li>
							<li><p>Кировский район <b>{WebsiteInformation.address}</b></p>
							</li>
							<li><p>Связатся с нами <a href={WebsiteInformation.whatsapp} target="_blank">{WebsiteInformation.phone}</a></p>
							</li>
							<li><p>Режим работы: <b>{WebsiteInformation.workTime}</b></p>
							</li>
						</ul>
					</div>
				</div>
			</main>
			<section styleName="section">
				<div styleName="content">
					<Map></Map>
				</div>
			</section>
		</CSSModules>
	);
}

export default MyComponent;