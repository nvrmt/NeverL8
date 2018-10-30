import {Component} from "react";
import {Text, View} from "react-native";
import React from "react";

import {styles} from './style';

export default class HomeScreen extends Component {
	render() {
		return (
			<View>
				<View style={{ margin: 15 }}>
					<Text>Home Screen</Text>
				</View>
			</View>
		);
	}
}