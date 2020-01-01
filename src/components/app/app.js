import ReservationsListCont from './reservations/reservations-list-container';
import React, { useEffect, useState } from 'react';
import AppTitleComp from './app-title-component.jsx';
import AppHeaderComp from './header/app-header-component.jsx';
import './app.scss';

const defaultWidth = 576;

const App = () => {
	const [size, setSize] = useState(
		document.documentElement.clientWidth < defaultWidth ? 'Small' : 'Large'
	);
	useEffect(() => {
		const onResize = event => {
			let width = event.target.innerWidth;
			if (width < defaultWidth && size === 'Large') {
				setSize('Small');
				console.log('Small');
			} else {
				if (width >= defaultWidth && size === 'Small') {
					setSize('Large');
					console.log('Large');
				}
			}
		};
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	});
	return (
		<div className="app-container">
			<AppTitleComp size={size} />
			<AppHeaderComp size={size} />
			<ReservationsListCont size={size} />
		</div>
	);
};

export default App;
