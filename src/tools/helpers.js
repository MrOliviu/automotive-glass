export function UpdateClassNames(parentRef, styles) {
	let parentClasses = parentRef.current.className.split(" ");
	for (let i = 0; i < parentClasses.length; i++) {
		let className = parentClasses[i];
		if (!styles[className]) continue;
		parentClasses[i] = styles[className];
	}
	parentRef.current.className = parentClasses.join(" ");
	const elements = parentRef.current.querySelectorAll("*[class]");
	elements.forEach(element => {
		let classes = element.className.split(" ");
		for (let i = 0; i < classes.length; i++) {
			let className = classes[i];
			if (!styles[className]) continue;
			classes[i] = styles[className];
		}
		element.className = classes.join(" ");
	});
}