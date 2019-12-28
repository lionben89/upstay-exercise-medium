/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';

const ReservationComp = props => {
	return (
		<div>
			<Card className="reservation-card-container">
				<Card.Header>
					{props.reservation.price}
					{props.reservation.currency}
				</Card.Header>
				<Card.Body>
					<Card.Title>Special title treatment</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional content.
					</Card.Text>
				</Card.Body>
				<Card.Footer>2 days ago</Card.Footer>
			</Card>
		</div>
	);
};
export default ReservationComp;
