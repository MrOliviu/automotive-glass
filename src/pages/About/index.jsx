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
					<img src={require("resources/images/123.jpg")} alt="background image" />
				</div>
				<div styleName="content">
					<div styleName="row">
						<h1 styleName="title">О НАШЕЙ КОМПАНИИ</h1>
					</div>
					<div styleName="row">
						<ul styleName="description">
							<li><p><b>Автомобильное-стекло.рф</b> предлагает самый надежный и высококачественный ремонт автомобильного стекла в Санкт-Петербурге. Мы гордимся нашим мастерством и обслуживанием клиентов.

								Независимо от того, нужен ли вам эксперт по ремонту стекла или вам нужна замена лобового стекла - мы готовы вам помочь.  Защитите себя, своих пассажиров и компанию, получив надежные услуги по замене и ремонту автостекла от нашей компании.</p>
							</li>
							<li>
								<p>Мы используем высококачественные материалы и стекло для достижения совершенства при каждом ремонте и замене автомобильного стекла, который мы делаем. Наши сотрудники надежны от начала до конца. Отечественные марки машин и иномарки - наша специальность.</p>
							</li>
							<li>
								<p>Мы имеем более чем десятилетний опыт работы на специализированной автомобильной арене. Наши технические специалисты работали почти над каждой маркой и моделью.</p>
							</li>
							<li><p>Готовы ли вы воспользоваться одними из самых надежных услуг по замене лобового стекла и ремонту автомобильного стекла в Санкт-Петербурге? Свяжитесь с нашей командой Автомобильное-стекло.рф сегодня! Вы можете позвонить нам по телефону <a href={WebsiteInformation.whatsapp} target="_blank">{WebsiteInformation.phone}</a>.</p>
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