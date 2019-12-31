/* eslint-disable react/prop-types */
import React from 'react';
import '../app.scss';

const UuidFilterComp = props => {
	return (
		<input
			className="uuid-filter"
			type="text"
			placeholder="Filter reservations by uuid"
			value={props.uuidFilter}
			onChange={event => {
				let text = event.target && event.target.value;
				props.filterByUuid(text);
			}}
		></input>
	);
};

export default UuidFilterComp;
