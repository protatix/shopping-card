import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../redux/types/actions';
import * as dataActions from '../redux/actions/User';
import { User } from '../redux/types/User';


interface Props {
	actions: {
		getDataStart: () => void;
	},
	users: User[]
}
class Home extends Component<Props>{
	componentDidMount() {
		const { actions } = this.props;
		actions.getDataStart();
	}

	public render() {
		const { users } = this.props;
		return (
			<View
			>
				<ScrollView>
				<View style={styles.main}>
					{users && users.map(item => {
						return (
							<View style={styles.container} key={item.id}>
								<Text style={styles.title}> {item.id} </Text>
								<Text style={styles.title}> {item.name} </Text>
								<Text style={styles.title}> {item.email} </Text>
							</View>
						)
					})}
				</View>
				</ScrollView>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	main: {
		display: "flex",
		alignItems: "center",
		padding: 10
	},
	container: {
		padding: 20,
		backgroundColor: "#eaeaea",
		width: "100%",
	  },
	  title: {
		marginTop: 8,
		paddingVertical: 5,
		borderWidth: 4,
		borderColor: "#20232a",
		borderRadius: 6,
		backgroundColor: "#61dafb",
		color: "#20232a",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
	  }
});

const mapStateToProps = (state: AppState) => ({
	users: state.users.data
});

const mapDispatchToProps = (dispatch: any) => ({
	actions: bindActionCreators(dataActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
