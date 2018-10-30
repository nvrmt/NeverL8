import {Component} from "react";
import {View, Image} from "react-native";
import {Text} from 'react-native-elements';
import React from "react";

import {styles} from './style';
import { Grid, Row, Col } from "react-native-easy-grid";

export default class LaunchScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text h4>Launch Screen</Text>
			</View>
		);
	}
}