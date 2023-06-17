import React, { useRef } from 'react';
import CSSModules from 'CSSModules';
import { Link } from 'react-router-dom';
import styles from "./index.module.css";

function MyComponent(props) {

	const imgList = ["benson", "fuyao", "guardian", "nordglass", "pilkington", "sekurit", "xyg", "shatterprufe", "agc", "bor", "lemson", "kmk", "sat", "spektr"];

	const contentRef = useRef();
	const innerRef = useRef();
	let cellRef = useRef();

	function ToRight() {
		contentRef.current.scroll({ left: contentRef.current.scrollLeft + cellRef.current.offsetWidth, top: 0, behavior: "smooth" });
	}

	function ToLeft() {
		contentRef.current.scroll({ left: contentRef.current.scrollLeft - cellRef.current.offsetWidth, top: 0, behavior: "smooth" });
	}

	return (
		<CSSModules styles={styles}>
			<div styleName="gallery">
				<div styleName="arrowLeft">
					<button onClick={ToLeft} styleName="arrow">
						<i className="fa-solid fa-angle-left"></i>
					</button>
				</div>
				<div styleName="content" ref={contentRef}>
					<div styleName="inner" ref={innerRef}>
						{imgList.map(img =>
							<Link key={img} to={`/manufacturers/${img}`}>
								<div styleName="cell" ref={cellRef}>
									<img src={require(`resources/images/manufacturers/${img}.png`)} alt={img} />
								</div>
							</Link>
						)}
					</div>
				</div>
				<div styleName="arrowRight">
					<button onClick={ToRight} styleName="arrow">
						<i className="fa-solid fa-angle-right"></i>
					</button>
				</div>
			</div>
		</CSSModules>
	);
}

export default MyComponent;