import React, { } from 'react';
import CSSModules from 'CSSModules';
import styles from "./index.module.css";
import Logo from "components/Logo";
import { WebsiteInformation } from 'tools/data';
import { Link } from 'react-router-dom';

function MyComponent(props) {

	return (
		<CSSModules styles={styles}>
			<footer styleName="footer">
				<div styleName="content">
					<div styleName="main">
						<div styleName="field">
							<Logo></Logo>
							<p styleName="description">
								<Link to="/#австостекла-продажа">Продажа</Link>|
								<Link to="/services#австостекла-замена">Замена</Link>|
								{/* <Link to="/services#австостекла-ремонт">Ремонт</Link> */}
								<Link to="/repairs">Ремонт</Link>
							</p>
						</div>
						<div></div>
						<div styleName="field">
							<div styleName="item">
								<i className="fa-sharp fa-solid fa-location-dot"></i>
								<a href={WebsiteInformation.yandexMapLink} target='_blank'>{WebsiteInformation.address}</a>
							</div>
							<div styleName="item">
								<i className="fa-sharp fa-solid fa-phone"></i>
								<a href={WebsiteInformation.whatsapp} target="_blank">{WebsiteInformation.phone}</a>
							</div>
							<div styleName="item">
								<i className="fa-regular fa-timer"></i>
								<p>{WebsiteInformation.workTime}</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</CSSModules>
	);
}

export default MyComponent;