import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';

const store = createStore();

export default function setupApp( App: any ) {

	class Root extends Component {
		render() {
			return (
				<Provider store={store}>
					<React.Fragment>
						<App />
					</React.Fragment>
				</Provider>
			);
		}
	}

	return Root;
}
