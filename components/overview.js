/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

import Card from './views/card';

type Props = {};

export default class Overview extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Wetter</Text>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 50,
    marginTop: 50,
    marginBottom: 30,
    fontWeight: 'bold',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
