import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './main/Main';

ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>,
	document.getElementById('app')
);
