/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';
import '../app.scss';

// eslint-disable-next-line no-unused-vars
const CurrencySelectorComp = props => {
	const label = 'Change currency:';
	return (
		<div className="currency-selector-container">
			<div className="label">{label}</div>
			<Select
				className="currency-selector"
				value={props.selectedCurrency}
				onChange={props.changeCurrency}
				options={props.currencyOptions}
			/>
		</div>
	);
};

export default CurrencySelectorComp;
