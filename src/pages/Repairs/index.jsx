import React, { useRef } from 'react';
import styles from "./index.module.css";
import CSSModules from 'CSSModules';
import PhoneInput from "components/PhoneInput";
import SendEmailButton from "components/SendEmailButton";
import { WebsiteInformation } from 'tools/data';
import ButtonContact from "components/ButtonContact";
import Map from "components/Map";

export default function MyComponent(props) {

	const sendEmailButtonRef = useRef();
	const phoneInputRef = useRef();

	function SendEmailOnClick() {
		sendEmailButtonRef.current.SendEmail(phoneInputRef);
	}

	return (
		<CSSModules styles={styles}>
			<main styleName="main">
				<div styleName="content">
					<div styleName="row">
						<h1 styleName="title">Ремонт сколов и трещин на лобовом стекле</h1>
					</div>
					<div styleName="row contact-row">
						<div styleName="contact">
							<PhoneInput ref={phoneInputRef}></PhoneInput>
							<SendEmailButton ref={sendEmailButtonRef} onClick={SendEmailOnClick}></SendEmailButton>
						</div>
						<div styleName="socials">
							<ButtonContact href={WebsiteInformation.whatsapp}>
								<i className="fa-brands fa-whatsapp"></i>
							</ButtonContact>
							<ButtonContact href={WebsiteInformation.telegramLink}>
								<i className="fa-brands fa-telegram"></i>
							</ButtonContact>
						</div>
					</div>
					<div styleName="row">
						<div styleName="info">
							<p>При своевременном обращении в нашу компанию , на ремонт скола или трещины на лобовом стекле, у вас сохраняется оригинальное автостекло, а сам ремонт лобового стекла в несколько раз дешевле его полной замены. Ремонт стекла длится не более одного часа. Трещины и  сколы на лобовых стекол мы можем устранить в самые короткие сроки. А также предоставляем постгарантийное обслуживание.</p>
						</div>
					</div>
				</div>
			</main>
			<section styleName="section">
				<div styleName="content">
					<div styleName="row">
						<h2 styleName="title">Цены на ремонт сколов и трещин автостекла</h2>
					</div>
					<div styleName="table">
						<table>
							<tbody>
								<tr>
									<th>Тип ремонта</th>
									<th>Стоимость, руб.</th>
								</tr>
								<tr>
									<td>Скол</td>
									<td>от {WebsiteInformation.prices.fixChip} рублей</td>
								</tr>
								<tr>
									<td>Заливка трещин</td>
									<td>{WebsiteInformation.prices.fixCrack} рублей / см</td>
								</tr>
								<tr>
									<td>Остановка трещин</td>
									<td>от {WebsiteInformation.prices.stopCrack} рублей</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
			<section styleName="section">
				<div styleName="content">
					<div styleName="row">
						<h2 styleName="title">Скол</h2>
					</div>
					<div styleName="row">
						<p>Скол — серьезный дефект, в результате которого пробивается внешний слой стекла. Может иметь различные формы (вихревидный, «бычий глаз», «звездочка» и др.), требует срочного ремонта стекла автомобиля.</p>
					</div>
					<div styleName="row">
						<p>Основная опасность заключается в том, что скол ослабляет стекло и в любой момент может стать источником развития трещин, идущих радиально от скола сразу в нескольких направлениях. При это лобовое стекло может стать совершенно непригодным к дальнейшей эксплуатации вследствие резкого уменьшения обзорности.
							Риск развития трещин из скола особенно увеличивается при эксплуатации автомобиля на неровном дорожном покрытии и при резком перепаде температур.</p>
					</div>
					<div styleName="row">
						<h2 styleName="title">Процесс ремонта скола</h2>
					</div>
					<div styleName="row">
						<ul styleName="process-list">
							<li>
								<p>В месте повреждения сверлят технологическое отверстие для остановки распространения разрыва.</p>
							</li>
							<li>
								<p>Зачищают  место повреждения.</p>
							</li>
							<li>
								<p>Заполняют пустоту скола специальным прозрачным полимером с помощью инжектора.</p>
							</li>
							<li>
								<p>Прогревают полимер для лучшего заполнения всех микропустот.</p>
							</li>
							<li>
								<p>Облучают полимер ультрафиолетом для застывания.</p>
							</li>
							<li>
								<p>Шлифуют и полируют место ремонта.</p>
							</li>
							<li>
								<p>Покрывают его защитным составом.</p>
							</li>
						</ul>
						<p styleName="contact">
							Вы можете всегда связатся с нами по номеру телефона!
							<br />
							<a href={WebsiteInformation.tel}>{WebsiteInformation.phone}</a>
							<div styleName="socials">
								<ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-whatsapp"></i>
								</ButtonContact>
								<ButtonContact href={WebsiteInformation.telegramLink}>
									<i className="fa-brands fa-telegram"></i>
								</ButtonContact>
							</div>
						</p>
					</div>
				</div>
			</section>
			<section styleName="section">
				<div styleName="content">
					<div styleName="row">
						<h2 styleName="title">Трещина</h2>
					</div>
					<div styleName="row">
						<p>Основная неприятность появившейся трещины в том , что уменьшает обзорность. Вызвано это тем, что свет преломляется на границе стекло воздух(внутри трещины) – стекло. Пока трещина небольшая – обзорность ограничена не сильно и трещина не мешает управлять автомобилем, но тут же подстерегает вторая опасность – трещина в любой момент может увеличиться. Или хуже того – разделиться на несколько направлений.</p>
					</div>
					<div styleName="row">
						<p>Разветвлённая трещина – существенно менее ремонтопригодна, чем не большая, это очевидно. К тому же наличие большой трещины на лобовом стекле может помешать успешному прохождению технического осмотра в ГИБДД.</p>
					</div>
					<div styleName="row">
						<h2 styleName="title">Процесс ремонта трещин</h2>
					</div>
					<div styleName="row">
						<ul styleName="process-list">
							<li>
								<p>На окончании трещины просверливается отверстие для снятия напряжения и остановки распространения трещины.</p>
							</li>
							<li>
								<p>Повреждение очищается от пыли, грязи и осколков.</p>
							</li>
							<li>
								<p>Далее трещина заполняется полимером, который после этого прогревается и кристаллизуется ультрафиолетом.</p>
							</li>
							<li>
								<p>Поверхность отремонтированного повреждения полируется, покрывается защитным слоем.</p>
							</li>
						</ul>
						<p styleName="contact">
							Вы можете всегда связатся с нами по номеру телефона!
							<br />
							<a href={WebsiteInformation.tel}>{WebsiteInformation.phone}</a>
							<div styleName="socials">
								<ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-whatsapp"></i>
								</ButtonContact>
								<ButtonContact href={WebsiteInformation.telegramLink}>
									<i className="fa-brands fa-telegram"></i>
								</ButtonContact>
							</div>
						</p>
					</div>
				</div>
			</section>
			<section styleName="section">
				<div styleName="content">
					<div styleName="row">
						<h2 styleName="title">При появлении скола, или трещины, необходимо!</h2>
					</div>
					<div styleName="row">
						<ul styleName="process-list">
							<li>
								<p>Сразу же после повреждения автостекла участок необходимо заклеить прозрачным скотчем.</p>
							</li>
							<li>
								<p>Выполнять ремонт нужно только у опытных мастеров. Они используют качественные средства, которые без проблем полимеризуются и маскируют сколы, трещины.</p>
							</li>
							<li>
								<p>Ни в коем случае нельзя проводить эту процедуру самостоятельно. Отсутствие навыков и умений может привести к неприятным последствиям.</p>
							</li>
							<li>
								<p>При появлении трещины необходимо сразу же выключить опцию обдува стекол теплым воздухом. Резкий перепад температуры может привести к ее расползанию.</p>
							</li>
							<li>
								<p>Во избежание вибраций настоятельно рекомендуется снизить скорость транспортного средства.</p>
							</li>
							<li>
								<p>Помнить, что стоимость ремонта автостекол зависит от размеров образовавшихся сколов и трещин.</p>
							</li>
						</ul>
						<p styleName="contact">
							Вы можете всегда связатся с нами по номеру телефона!
							<br />
							<a href={WebsiteInformation.tel}>{WebsiteInformation.phone}</a>
							<div styleName="socials">
								<ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-whatsapp"></i>
								</ButtonContact>
								<ButtonContact href={WebsiteInformation.telegramLink}>
									<i className="fa-brands fa-telegram"></i>
								</ButtonContact>
							</div>
						</p>
					</div>
				</div>
			</section>
			<section styleName="section">
				<div styleName="content">
					<div styleName="row">
						<h2 styleName="title">Причины появления трещин на лобовом стекле</h2>
					</div>
					<div styleName="row">
						<ul styleName="list">
							<li>
								<p>Механические. Попадание камней и других предметов, птиц, града, веток (в    случае стоянки под деревьями). Также нельзя исключать действий хулиганов.</p>
							</li>
							<li>
								<p>Термические, связанные с резким перепадом температур. Например, включение обогрева на полную мощность зимой или резкое охлаждение от кондиционера летом.</p>
							</li>
							<li>
								<p>Производственный брак. Как правило, проявляется через некоторое время после покупки автомобиля. Без видимых причин лобовое стекло может лопнуть, но с гарантийной заменой в дилерском центре могут возникнуть сложности. Об этом расскажем ниже.</p>
							</li>
							<li>
								<p>Нарушение геометрии кузова после ДТП. Некачественный ремонт кузова становится причиной трещин на лобовом при наезде на небольшую ямку или кочку, парковке на бордюре и т.д.</p>
							</li>
							<li>
								<p>Стекло низкого качества или некачественная замена. Устанавливать стекло на автомобиль лучше в специализированных сервисах, где работают опытные специалисты, есть необходимое оборудование и качественные материалы.</p>
							</li>
						</ul>
						<p styleName="contact">
							Вы можете всегда связатся с нами по номеру телефона!
							<br />
							<a href={WebsiteInformation.tel}>{WebsiteInformation.phone}</a>
							<div styleName="socials">
								<ButtonContact href={WebsiteInformation.whatsapp}>
									<i className="fa-brands fa-whatsapp"></i>
								</ButtonContact>
								<ButtonContact href={WebsiteInformation.telegramLink}>
									<i className="fa-brands fa-telegram"></i>
								</ButtonContact>
							</div>
						</p>
					</div>
				</div>
			</section>
			<section styleName="section recommend">
				<div styleName="content">
					<div div styleName="row">
						<h2 styleName="title">Рекомендуем в течение первых 24 часов после ремонта лобового стекла:</h2>
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
			<div styleName="section">
				<div styleName="content">
					<Map></Map>
				</div>
			</div>
		</CSSModules >
	);
}
