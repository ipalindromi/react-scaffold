import React from 'react';
import reactDom from 'react-dom';

import View from './components/dumb/View';

reactDom.render(
	<View>Welcome to the scaffold! (We have fun and games)</View>,
	document.querySelector('main'),
);
