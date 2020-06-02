import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';
// import HomeScreen from './screens/Home';
import HomeScreen from '@monorepo/shared/src/screens/Home'

const history = createHistory();

class App extends Component<App> {
	render() {
		return (
			<Router history={history}>
				<div>
					<Route exact path='/' component={HomeScreen} />
				</div>
			</Router>
		);
	}
}

export default App;
