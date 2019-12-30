/* eslint-disable react/prop-types */
import React from 'react';
import '../app.scss';

const UuidFilterComp = props => {
	return (
		<div className="uuid-filter">
			<input
				type="text"
				placeholder="Filter reservations by uuid"
				value={props.uuidFilter}
				onChange={event => {
					let text = event.target && event.target.value;
					props.filterByUuid(text);
				}}
			></input>
		</div>
	);
};

export default UuidFilterComp;
