import {Component} from "react";
import {View, Image} from "react-native";
import {Text} from 'react-native-elements';
import React from "react";

import {styles} from './style';
import {Grid, Row, Col} from "react-native-easy-grid";
import {StartupRedux} from "../../redux/StartupRedux";
import connect from "react-redux/es/connect/connect";

class MapScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text h4>Map Screen</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, null)(MapScreen);