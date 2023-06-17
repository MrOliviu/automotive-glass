import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from "./index.module.css";
import Map from "components/Map";
import CSSModules from 'CSSModules';
import SendEmailButton from "components/SendEmailButton";
import PhoneInput from 'components/PhoneInput';
import { WebsiteInformation } from 'tools/data';

export default function MyComponent(props) {

	const navigate = useNavigate();

	let { car, model } = useParams();
	let [params, setParams] = useState({ car: null, model: null });

	function getCarAndModel() {
		const items = JSON.parse(localStorage.getItem("carPageParameters"));
		return items;
	}

	function replaceString(str) {
		str = str.replaceAll(" ", "-");
		str = str.replaceAll("(", "");
		str = str.replaceAll(")", "");
		str = str.replaceAll("/", "-");
		str = str.replace(/-+/g, '-');
		return str.toLowerCase();
	}

	useEffect(() => {
		const params = getCarAndModel();
		if (!params) navigate(`/`);
		else if ((replaceString(params.car) != car) || (replaceString(params.model) != model)) navigate(`/`);
		else setParams({ car: params.car, model: params.model });
	}, []);

	const sendEmailButtonRef = useRef();
	const phoneInputRef = useRef();

	function SendEmailOnClick() {
		sendEmailButtonRef.current.SendEmail(phoneInputRef);
	}

	function getModelList() {
		const params = getCarAndModel();
		if (!params) return;
		const car = WebsiteInformation.cars.find(item => item.car == params.car);
		const models = car.models.find(model => model.model == params.model);
		return models.modelList
	}

	function displayImage() {
		let html;
		try {
			html = (<div styleName="img">
				<img src={require(`resources/images/cars/${car}/${model}.png`)} alt={`${model} image`} />
			</div>);
		} catch (error) {
			try {
				html = (<div styleName="img small">
					<img src={require(`resources/images/carLogos/${car}.png`)} alt={`${car} logo`} />
				</div>)
			} catch (e) {
				html = "";
			}
		}
		return html;
	}

	return (
		<CSSModules styles={styles}>
			<main styleName="main">
				<div styleName="content">
					<div styleName="row">
						<div styleName="row">
							<h1 styleName="title">ЗАМЕНА ЛОБОВОГО СТЕКЛА <b>{params.car} {params.model}</b> В СПБ</h1>
						</div>
						<div styleName="row">
							<div styleName="info">
								<div>
									<i className="fa-solid fa-check"></i>
									<p>Все стекла в наличии</p>
								</div>
								<div>
									<i className="fa-solid fa-check"></i>
									<p>Установка за 2 часа</p>
								</div>
							</div>
						</div>
						<div styleName="other">
							<div styleName="model-list">
								<h2 styleName="title">

									{displayImage()}
									МОДЕЛЬНЫЙ РЯД <b>{params.car} {params.model}</b></h2>
								<ul styleName="list">
									{getModelList()?.map(item => <li styleName="item"><p>{params.car} {item}</p></li>)}
								</ul>
							</div>
							<div styleName="contact-inner">
								<div styleName="btn">
									<PhoneInput ref={phoneInputRef}></PhoneInput>
								</div>
								<div styleName="btn">
									<SendEmailButton ref={sendEmailButtonRef} onClick={SendEmailOnClick}></SendEmailButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<section styleName="section price">
				<div styleName="content">
					<div styleName="row">
						<h2 styleName="title">СТОИМОСТЬ ВЕТРОВОГО СТЕКЛА</h2>
					</div>
					<div styleName="row">
						<div styleName="table">
							<table>
								<tbody>
									<tr>
										<th>Класс стекла</th>
										<th>Стоимость, руб.</th>
									</tr>
									<tr>
										<td>Стандарт</td>
										<td>От {WebsiteInformation.prices.standard} рублей</td>
									</tr>
									<tr>
										<td>Бизнес</td>
										<td>От {WebsiteInformation.prices.business} рублей</td>
									</tr>
									<tr>
										<td>Премиум</td>
										<td>От {WebsiteInformation.prices.premium} рублей</td>
									</tr>
									<tr>
										<td>Замена лобового стекла</td>
										<td>{WebsiteInformation.prices.changeWindshield} рублей</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<section styleName="section listSection">
				<div styleName="content">
					<div styleName="row">
						<h2 styleName="title">СТОИМОСТЬ ЛОБОВОГО СТЕКЛА ЗАВИСИТ ОТ:</h2>
					</div>
					<div styleName="row">
						<ul>
							<li>
								<p>Производителя стекла (Pilkington, Saint-Gobain Sekurit, FYG, AGC, Guardian, Benson, XYG, KMK)</p>
							</li>
							<li>
								<p>Дополнительных опций (датчик дождя, датчик света, полный обогрев стекла, обогрев зоны дворников)</p>
							</li>
							<li>
								<p>Наличия солнцезащитной полосы</p>
							</li>
							<li>
								<p>Типа кузова (купе, седан, хэтчбек, универсал)</p>
							</li>
							<li>
								<p>Года выпуска модели</p>
							</li>
						</ul>
					</div>
				</div>
			</section >
			<section styleName="section listSection">
				<div styleName="content">
					<div div styleName="row">
						<h2 styleName="title">ПРОЦЕСС УСТАНОВКИ ЛОБОВОГО СТЕКЛА</h2>
					</div>
					<div styleName="row">
						<ul>
							<li>
								<p>Благодаря профессионализму персонала  сохраняется целостность лакокрасочного покрытия кузова, внутренних элементов отделки салона и оборудования приборной панели.</p>
							</li>
							<li>
								<p>Правильная подготовка поверхности, предшествующая замене автостекла, включает удаление старого клея, грязи, жидкости, обработку праймером.</p>
							</li>
							<li>
								<p>Для демонтажа старого и установки нового стекла используется профессиональное оборудование и инструменты, обеспечивающие высокую точность выполнения работ.</p>
							</li>
							<li>
								<p>Применение полиуретанового клея с быстрой полимеризацией дает возможность пользоваться автомобилем уже через час.</p>
							</li>
							<li>
								<p>Соблюдение технологии замены автостекла гарантирует непрерывность клеевого шва и герметичность соединения.</p>
							</li>
						</ul>
					</div>
					<div styleName="row">
						<h3 styleName="info">Весь процесс установки лобового стекла занимает от 1,5 до 2 часов</h3>
					</div>
				</div >
			</section >
			<section styleName="section recommend">
				<div styleName="content">
					<div div styleName="row">
						<h2 styleName="title">Рекомендуем в течение первых 24 часов после замены лобового стекла:</h2>
					</div>
					<div styleName="row">
						<div styleName="items">
							<div styleName="item">
								<div styleName="img">
									<img src={require("resources/images/lift.png")} alt="lift" />
								</div>
								<p>Не использовать подъёмник</p>
							</div>
							<div styleName="item">
								<div styleName="img">
									<img src={require("resources/images/rain.png")} alt="rain" />
								</div>
								<p>Не мыть ваш автомобиль</p>
							</div>
							<div styleName="item">
								<div styleName="img">
									<img src={require("resources/images/speed.png")} alt="speed" />
								</div>
								<p>Ограничить скорость передвижения</p>
							</div>
							<div styleName="item">
								<div styleName="img">
									<img src={require("resources/images/tape.png")} alt="tape" />
								</div>
								<p>Не снимать спец.скотч</p>
							</div>
						</div>
					</div>
				</div >
			</section >
			<section styleName="section">
				<div styleName="content">
					<Map />
				</div>
			</section>
		</CSSModules>
	);
}