import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './redux/Reducers/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
