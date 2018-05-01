/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

type Props = {
  city: string,
  temperature: number
};

export default class Card extends Component<Props> {
  render() {
    const { city, temperature } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.degree}>20°C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  city: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
