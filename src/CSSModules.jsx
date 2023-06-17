import React, { Fragment, useMemo, useCallback } from 'react';

export default function CSSModules(props) {
	const memoizedStyles = useMemo(() => props.styles, [props.styles]);

	const replaceChild = useCallback((child) => {
		if (!child.props.styleName) return child;

		const styleNames = child.props.styleName.split(/\s+/);
		const classNamesSet = new Set(child.props.className?.split(/\s+/) || []);

		for (let i = 0; i < styleNames.length; i++) {
			const styleName = styleNames[i];
			const name = memoizedStyles[styleName];
			if (name != undefined) classNamesSet.add(name);
		}

		const classNames = classNamesSet.size > 0 ? Array.from(classNamesSet).join(" ") : null;

		return React.cloneElement(child, { className: classNames, styleName: null });
	}, [memoizedStyles]);

	function modifyChildren(children) {
		if (children == null) return null;

		const childArray = React.Children.toArray(children);

		const modifiedChildren = childArray.map((child) => {
			if (!React.isValidElement(child)) return child;

			if (child.props.children) {
				child = React.cloneElement(child, {
					children: modifyChildren(child.props.children),
				});
			}

			if (!child.props.styleName) return child;

			return replaceChild(child);
		});

		return modifiedChildren;
	}

	const memoizedChildren = useMemo(() => modifyChildren(props.children), [modifyChildren, props.children]);

	return (
		<Fragment>
			{memoizedChildren?.map(child => (
				<Fragment key={child.props.styleName || child.key}>{child}</Fragment>
			))}
		</Fragment>
	);
}
