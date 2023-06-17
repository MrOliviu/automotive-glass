import React, { } from 'react';
import styles from "./index.module.css";
import Logo from "components/Logo";
import { Link } from 'react-router-dom';
import { WebsiteInformation } from 'tools/data';
import CSSModules from 'CSSModules';

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<header styleName="header">
				<div styleName="content">
					<div styleName="left">
						<Logo></Logo>
						<div styleName="description">
							<p>
								<Link to="/#австостекла-продажа">Продажа</Link>|
								<Link to="/services#австостекла-замена">Замена</Link>|
								<Link to="/repairs">Ремонт</Link>
							</p>
							{/* <p>Продажа | Замена | Ремонт</p> */}
						</div>
					</div>
					<div styleName="right">
						<div styleName="item">
							<i className="fa-sharp fa-solid fa-location-dot"></i>
							<a href={WebsiteInformation.yandexMapLink} target='_blank'>{WebsiteInformation.address}</a>
						</div>
						<div styleName="item">
							<i className="fa-sharp fa-solid fa-phone"></i>
							<a href={WebsiteInformation.tel}>{WebsiteInformation.phone}</a>
						</div>
						<div styleName="item">
							<i className="fa-regular fa-timer"></i>
							<span>{WebsiteInformation.workTime}</span>
						</div>
					</div>
				</div>
			</header>
			<nav styleName="links">
				<ul>
					<li><Link to="/">ГЛАВНАЯ</Link></li>
					<li><Link to="/services">УСЛУГИ</Link></li>
					<li><Link to="/about">О НАС</Link></li>
					<li><Link to="/contact">КОНТАКТЫ</Link></li>
				</ul>
			</nav>
		</CSSModules>
	);
}

export default MyComponent;