/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

type Props = {};

export default class Detail extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    console.log(this.props);

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Hier ist das genaue Wetter drin..</Text>
        {/* <TouchableOpacity style={styles.close}>Schließen</TouchableOpacity> */}
        <TouchableOpacity onPress={this.props.close}>
          <Text>Schließen</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  close: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
