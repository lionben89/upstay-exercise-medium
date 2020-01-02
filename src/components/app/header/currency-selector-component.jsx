/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-styled-select';
import '../app.scss';

const CurrencySelectorComp = props => {
	const label = 'Change currency:';
	return (
		<div className="currency-selector-container">
			<div className="label">{label}</div>
			<Select
				className="currency-selector"
				value={props.selectedCurrency.value}
				placeholder={props.selectedCurrency.value}
				onChange={props.changeCurrency}
				options={props.currencyOptions}
			/>
		</div>
	);
};

export default CurrencySelectorComp;
