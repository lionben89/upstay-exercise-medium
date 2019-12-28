import React from 'react';
import ReactDOM from 'react-dom';
import Root from '@ups/components/root';
import { getRootElement } from '@ups/utils/dom';
import '@ups/index.scss';
import { init } from './init.js';

init().then(() => {
	ReactDOM.render(<Root />, getRootElement());

	if (module.hot) {
		module.hot.accept();
	}
});
