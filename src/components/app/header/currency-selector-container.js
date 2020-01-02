/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import CurrencySelectorComp from './currency-selector-component.jsx';
import { getCurrencyExchangeAndChangeCurrency } from '../../../actions/reservations-actions.js';

const mapStateToProps = (state, ownProps) => {
	//change object to array to meet selector props
	let currencyOptions =
		state.reservationsReducer.convertionData &&
		Object.keys(state.reservationsReducer.convertionData);
	currencyOptions = currencyOptions && currencyOptions.map(c => ({ value: c, label: c }));
	return {
		selectedCurrency: {
			value: state.reservationsReducer.selectedCurrency,
			label: state.reservationsReducer.selectedCurrency
		},
		currencyOptions
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeCurrency: currency => {
			dispatch(getCurrencyExchangeAndChangeCurrency(currency));
		}
	};
};

const CurrencySelectorCont = connect(mapStateToProps, mapDispatchToProps)(CurrencySelectorComp);
export default CurrencySelectorCont;
