import React, { useEffect } from 'react';
import styles from "./index.module.css";
import Map from "components/Map";
import { WebsiteInformation } from 'tools/data';
import CSSModules from 'CSSModules';
import { useLocation } from 'react-router-dom';
import ButtonContact from "components/ButtonContact";
import { Link } from 'react-router-dom';

export default function MyComponent(props) {

	const location = useLocation();

	useEffect(() => {
		const hash = window.location.hash.substring(1);
		if (!hash) return;
		const anchor = document.querySelector(`#${decodeURIComponent(hash)}`);
		if (!anchor) return;
		anchor.scrollIntoView({ behavior: 'smooth' })
	}, [location]);

	return (
		<CSSModules styles={styles}>
			<main className={styles.main}>
				<div className={styles.content}>
					<div className={styles.row}>
						<ul className={styles.services}>
							<li>
								<div className={styles.img}>
									<img src={require("resources/images/window.png")} alt="img" />
								</div>
								<h2>АВТОСТЕКЛА</h2>
								<a href="#выездной-сервис">Выездной сервис</a>
								<a href="#австостекла-замена">Замена и установка автостекла</a>
								{/* <a href="#австостекла-ремонт">Ремонт сколов и трещин</a> */}
								<Link to="/repairs">Ремонт сколов и трещин</Link>
							</li>
							<li>
								<div className={styles.img}>
									<img src={require("resources/images/polish.png")} alt="img" />
								</div>
								<h2>ПОЛИРОВКА</h2>
								<a href="#полировка">Полировка фар</a>
								<a href="#полировка">Полировка стекла</a>
								<a href="#полировка">Полировка кузова</a>
							</li>
							<li>
								<div className={styles.img}>
									<img src={require("resources/images/bron.png")} alt="img" />
								</div>
								<h2>БРОНИРОВАНИЕ</h2>
								<a href="#бронирование">Бронирование фар</a>
							</li>
							<li>
								<div className={styles.img}>
									<img src={require("resources/images/tint.png")} alt="img" />
								</div>
								<h2>ТОНИРОВКА</h2>
								<a href="#тонировка">Тонирование автостёкол</a>
							</li>
						</ul>
					</div>
				</div>
			</main>
			<section className={`${styles.section} ${styles.prices}`} id="выездной-сервис">
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>ВЫЕЗДНОЙ СЕРВИС</h2>
					</div>
					<div className={styles.row}>
						<div className={styles.info2}>
							<p styleName="text-title">Ваше безопасное путешествие - наша забота!</p>
							<p>Безопасность на дороге - наша главная цель! Наш выездной сервис по ремонту автостекол готов приехать к Вам в любое время и в любом месте. Быстро, качественно и надежно исправим любые повреждения на стекле Вашего автомобиля. Не ждите, свяжитесь с нами уже сегодня!</p>
							<p className={styles.contact}>
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
				</div>
			</section>
			<section className={`${styles.section} ${styles.prices}`} id="австостекла-замена">
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>ЗАМЕНА И УСТАНОВКА АВТОСТЕКЛА</h2>
					</div>
					<div className={styles.row}>
						<div className={styles.info}>
							<p>Было разбито лобовое стекло? Не откладывайте ремонт на потом! Наша компания предлагает профессиональную замену и установку автомобильных стекол любых марок и моделей.</p>
							<p>Наша команда опытных мастеров быстро и качественно заменит стекло, используя только оригинальные запчасти и передовые технологии. Мы также предоставляем услуги по установке новых стекол на ваш автомобиль - в том числе лобовых, боковых и задних стекол.</p>
							<p>Мы гарантируем высокое качество работы и надежность нашей продукции, чтобы вы могли быть уверены в безопасности и комфорте во время езды. Обратитесь к нам для быстрого и профессионального ремонта и замены автомобильных стекол!</p>
							<p className={styles.contact}>
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
						<div className={styles.table}>
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
									<tr>
										<td>Замена заднего стекла</td>
										<td>{WebsiteInformation.prices.changeBackWindow} рублей</td>
									</tr>
									<tr>
										<td>Замена бокового стекла</td>
										<td>{WebsiteInformation.prices.changeSideWindow} рублей</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.prices}`} id="австостекла-ремонт">
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>РЕМОНТ СКОЛОВ И ТРЕЩИН</h2>
					</div>
					<div className={styles.row}>
						<div className={styles.info}>
							<p>Незначительные сколы и трещины на автомобильных стеклах могут стать причиной серьезных проблем, поэтому наша компания предлагает профессиональный ремонт поврежденных стекол, который быстро и эффективно восстановит прочность вашего автомобильного стекла.</p>
							<p>Мы используем специальное оборудование для устранения сколов и трещин, что обеспечит максимальную безопасность и надежность водителя и пассажиров. Наша команда экспертов готова оказать качественные услуги по ремонту стекол любых марок и моделей, чтобы вы могли быть уверены в надежности и безопасности своего автомобиля, ведь мы используем  высококачественные материалы для восстановления целостности стекла. Наши полимеры это не дешевая китайская продукция, а товар от мировых производителей.</p>
							<p>Обратитесь к нам, и мы гарантируем быстрое и профессиональное восстановление поврежденных автомобильных стекол.</p>
							<p className={styles.contact}>
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

						<div className={styles.table}>
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
				</div>
			</section>
			<section className={`${styles.section} ${styles.prices}`} id="полировка">
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>ПОЛИРОВКА</h2>
					</div>
					<div className={styles.row}>
						<div className={styles.info}>
							<p>Хотите, чтобы ваш автомобиль сиял как новый? Попробуйте нашу услугу полировки автостекол!</p>
							<p>Мы используем только высококачественные материалы и профессиональное оборудование для того, чтобы достичь идеального блеска на всех стеклах вашего автомобиля. Наша команда опытных специалистов быстро и эффективно уберет царапины, следы от насекомых и другие загрязнения с поверхности стекол, что значительно улучшит видимость во время вождения.</p>
							<p>Забудьте о тусклых и мутных стеклах - доверьте нам свой автомобиль, и вы не пожалеете!</p>
							<p className={styles.contact}>
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
						<div className={styles.table}>
							<table>
								<tbody>
									<tr>
										<th>Полировка</th>
										<th>Стоимость, руб.</th>
									</tr>
									<tr>
										<td>Фары</td>
										<td>от {WebsiteInformation.prices.polishHeadlights} рублей</td>
									</tr>
									<tr>
										<td>Стекла</td>
										<td>от {WebsiteInformation.prices.polishWindow} рублей</td>
									</tr>
									<tr>
										<td>Кузова</td>
										<td>от {WebsiteInformation.prices.polishBody} рублей</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.prices}`} id="бронирование">
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>БРОНИРОВАНИЕ</h2>
					</div>
					<div className={styles.row}>
						<div className={styles.info}>
							<p>Хотите обеспечить максимальную защиту фар и стекол своего автомобиля? Наша компания предлагает услуги по бронированию фар и стекол, которые защитят их от царапин, сколов, и других повреждений.</p>
							<p>Наши высококачественные материалы обеспечат долговечную защиту вашего автомобиля от внешних воздействий, сохраняя его идеальный внешний вид на протяжении длительного времени.</p>
							<p>Обратитесь к нам, и мы поможем сохранить ваш автомобиль в идеальном состоянии!</p>
							<p className={styles.contact}>
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
						<div className={styles.table}>
							<table>
								<tbody>
									<tr>
										<th>Бронирование</th>
										<th>Стоимость, руб.</th>
									</tr>
									<tr>
										<td>Фар</td>
										<td>от {WebsiteInformation.prices.foilHeadlights} рублей</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.prices}`} id="тонировка">
				<div className={styles.content}>
					<div className={styles.row}>
						<h2 className={styles.title}>ТОНИРОВКА</h2>
					</div>
					<div className={styles.row}>
						<div className={styles.info}>
							<p>Мы предлагаем услугу тонировки автомобильных стекол, которая поможет вашему автомобилю выглядеть более стильно и оригинально, а также обеспечит защиту от яркого солнечного света и посторонних глаз.</p>
							<p>Наш ассортимент включает различные варианты тонировочных пленок с разной степенью затемнения, позволяя выбрать оптимальное решение в соответствии с вашими предпочтениями.</p>
							<p>Установка пленки производится нашей опытной командой профессионалов быстро и качественно, что гарантирует максимальный комфорт и удовлетворение от использования услуги. Присоединяйтесь к нам и придайте своему автомобилю неповторимый облик!</p>
							<p className={styles.contact}>
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
						<div className={styles.table}>
							<table>
								<tbody>
									<tr>
										<th>Тонировка</th>
										<th>Стоимость, руб.</th>
									</tr>
									<tr>
										<td>Лобовое стекло</td>
										<td>от {WebsiteInformation.prices.tintWindshield} рублей</td>
									</tr>
									<tr>
										<td>Передние боковые стекла</td>
										<td>от {WebsiteInformation.prices.tintFrontSides} рублей</td>
									</tr>
									<tr>
										<td>Без передних боковых и без лобового</td>
										<td>от {WebsiteInformation.prices.tintBackSidesAndBack} рублей</td>
									</tr>
									<tr>
										<td>Без лобового стекла</td>
										<td>от {WebsiteInformation.prices.TintNoWindshield} рублей</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.content}>
					<Map></Map>
				</div>
			</section>
		</CSSModules>
	);
}