import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from "components/Dropdown";
import DefaultButton from "components/DefaultButton";
import { WebsiteInformation } from 'tools/data';
import ManufacturersGallery from "components/ManufacturersGallery";
import styles from "./index.module.css";
import Map from "components/Map";
import CSSModules from 'CSSModules';
import { useLocation } from 'react-router-dom';

export default function MyComponent(props) {

	const location = useLocation();

	useEffect(() => {
		const hash = window.location.hash.substring(1);
		if (!hash) return;
		const anchor = document.querySelector(`#${decodeURIComponent(hash)}`);
		if (!anchor) return;
		anchor.scrollIntoView({ behavior: 'smooth' })
	}, [location]);

	const carDropdownRef = useRef();
	const carModelDropdownRef = useRef();

	const navigate = useNavigate();

	function getCarsOnly() {
		const list = [];
		WebsiteInformation.cars.forEach(info => {
			list.push(info.car);
		});
		return list;
	}

	function getCarModels(car) {
		let models = WebsiteInformation.cars.find(info => info.car == car).models;
		console.log(models);
		return models;
	}

	function updateCarModels(option) {
		let models = [];
		getCarModels(option).forEach(model => {
			models.push(model.model);
		});
		carModelDropdownRef.current.setOptions(models);
		carModelDropdownRef.current.setValue("Выберите модель");
	}

	function replaceString(str) {
		str = str.replaceAll(" ", "-");
		str = str.replaceAll("(", "");
		str = str.replaceAll(")", "");
		str = str.replaceAll("/", "-");
		str = str.replace(/-+/g, '-');
		return str;
	}

	function goToCarPage() {
		if (carDropdownRef.current.value == "Выберите марку") {
			alert("Сначало выберите марку.");
			return;
		}
		if (carModelDropdownRef.current.value == "Выберите Марку" || carModelDropdownRef.current.value == "Выберите модель") {
			alert("Сначало выберите модель машины.");
			return;
		}
		let car = carDropdownRef.current.value.toLowerCase();
		car = replaceString(car);
		let model = carModelDropdownRef.current.value.toLowerCase();
		model = replaceString(model);
		const params = { car: carDropdownRef.current.value, model: carModelDropdownRef.current.value };
		localStorage.setItem("carPageParameters", JSON.stringify(params));
		navigate(`/cars/${car}/${model}`);
	}

	return (
		<CSSModules styles={styles}>
			<main className={styles.main}>
				<div className={styles.content}>
					<div className={styles.menu}>
						<div className={styles.row}>
							<h1 className={styles.title}>Быстрый подбор стекла для вашего автомобиля</h1>
						</div>
						<div className={styles.row}>
							<Dropdown ref={carDropdownRef} onChange={updateCarModels} defaultValue="Выберите марку" options={getCarsOnly()}></Dropdown>
							<Dropdown ref={carModelDropdownRef} defaultValue="Выберите модель" options={["Выберите Марку"]}></Dropdown>
						</div>
						<div className={styles.row}>
							<DefaultButton text="Подобрать стекло" onClick={goToCarPage}></DefaultButton>
							<div className={styles.info}>
								<i className="fa-solid fa-check"></i>
								<p>Установка за 2 часа</p>
							</div>
							<div className={styles.info}>
								<i className="fa-solid fa-check"></i>
								<p>Все стекла в наличии</p>
							</div>
						</div>
					</div>
					<div className={styles.background}>
						<img src={require("resources/images/MainPageAudi.png")} alt="background car" />
					</div>
				</div>
			</main>
			<section className={styles.section}>
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>ПРОИЗВОДИТЕЛИ АВТОСТЕКОЛ</h2>
					</div>
					<div className={styles.row}>
						<ManufacturersGallery></ManufacturersGallery>
					</div>
				</div>
			</section>
			<section className={`${styles.qualities} ${styles.section}`}>
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>ЗАМЕНА АВТОСТЕКОЛ</h2>
					</div>
					<div className={styles.row}>
						<div className={styles.inner}>
							<div className={styles.image}>
								<img src={require("resources/images/117.png")} alt="image" />
							</div>
							<ul className={styles.list}>
								<li>
									<div className={styles.icon}>
										<i className="fa-solid fa-users"></i>
									</div>
									<div>
										<h3 className={styles.title}>СПЕЦИАЛИСТЫ ВЫСОКОГО КЛАССА</h3>
										<p className={styles.description}>Уже более 10 лет специалисты Автомобильное-стекло.рф осуществляют ремонт сколов и трещин различной сложности для клиентов из Санкт-Петербурга.
										</p>
									</div>
								</li>
								<li>
									<div className={styles.icon}>
										<i className="fa-regular fa-hourglass-half"></i>
									</div>
									<div>
										<h3 className={styles.title}>БЫСТРО И КАЧЕСТВЕННО</h3>
										<p className={styles.description}>Мы используем одночасовые клей для безопасного вождения (SDAT), что означает, что ваш автомобиль считается безопасным для вождения через час после замены лобового стекла.
										</p>
									</div>
								</li>
								<li>
									<div className={styles.icon}>
										<i className="fa-solid fa-thumbs-up"></i>
									</div>
									<div>
										<h3 className={styles.title}>ГАРАНТИЯ НА ВСЕ ВИДЫ РАБОТ</h3>
										<p className={styles.description}>
											Даем Вам живую гарантию на установку автостекла на 2 года! Установленное стекло не потечет, не заскрипит, не вывалится! Гарантируем!
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.map}`}>
				<div className={styles.content}>
					<Map></Map>
				</div>
			</section>
			<section className={`${styles.section} ${styles.reviews}`}>
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>ОТЗЫВЫ</h2>
					</div>
					<div className={styles.row}>
						<ul className={styles.list}>
							<div className={styles.innerList}>
								<li className={styles.review}>
									<div className={styles.icon}>
										<img src={require("resources/images/andrei.png")} alt="andrei photo" />
									</div>
									<p className={styles.text}>Очень хороший сервис по ремонту трещин и замене стёкол. Приемлемые цены. Качество работы на высоте
										Большое спасибо мастеру Евгению. Всё объяснил, подсказал, как будет лучше и оперативно выполнил работу.
										Езжу с новым классным лобовым стеклом👌</p>
									<h6 className={styles.name}>Андрей</h6>
								</li>
								<li className={styles.review}>
									<div className={styles.icon}>
										<img src={require("resources/images/ekaterina.png")} alt="ekaterina photo" />
									</div>
									<p className={styles.text}>Дали подробную консультацию по замене автостекла. Очень приятно удивили цены, можно смело утверждать, что они самые дешевые. Сервис обслуживания на высшем уровне. Я осталась очень довольна!</p>
									<h6 className={styles.name}>Екатерина</h6>
								</li>
								<li className={styles.review}>
									<div className={styles.icon}>
										<img src={require("resources/images/pavel.png")} alt="pavel photo" />
									</div>
									<p className={styles.text}>Отличные ребята! Влад и Евгений настоящие профессионалы своего дела. Работают не только со стеклами, но и с клиентом. Встретили дружелюбно и подробно обо всем рассказали. Дали правильные консультации. Работу выполнили по заявленному времени и за разумные деньги. Рекомендую от всей души!</p>
									<h6 className={styles.name}>Павел</h6>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</section>
		</CSSModules>
	);
}