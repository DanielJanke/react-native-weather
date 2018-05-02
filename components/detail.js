/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

type Props = {
  temperature: number
};

export default class Detail extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>
        <Image
          source={
            this.props.temperature > 15
              ? require('../assets/sun.jpg')
              : require('../assets/rain.jpg')
          }
          style={styles.backgroundImage}
        />
        <Text style={styles.welcome}>So siehts aus.</Text>
        <TouchableOpacity onPress={this.props.close}>
          <Text>Schließen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  backgroundImage: {
    // flex: 1,
    position: 'absolute'
  }
});
