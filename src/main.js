import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import View from './components/dumb/View';

reactDom.render(
	<Provider store={store}>
		<View>Welcome to the scaffold! (We have fun and games)</View>
	</Provider>,
	document.querySelector('main'),
);
