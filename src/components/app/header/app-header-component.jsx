/* eslint-disable react/prop-types */
import React from 'react';
import UuidFilterCont from './uuid-filter-container.js';
import CurrencySelectorCont from './currency-selector-container';
import '../app.scss';

const AppHeaderComp = props => {
	let responsiveClass = 'app-header-large';
	if (props.size === 'Small') {
		responsiveClass = 'app-header-small';
	}
	return (
		<div className={`app-header ${responsiveClass}`}>
			<UuidFilterCont />
			<CurrencySelectorCont />
		</div>
	);
};

export default AppHeaderComp;
