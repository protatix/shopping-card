import React, { Component } from 'react';
import SharedHome from '@monorepo/shared/src/screens/Home';

export default class Home extends Component {
	static navigationOptions = {
		title: 'Anasayfa',
	};


	render() {
		return (
			<SharedHome />
		);
	}
}
