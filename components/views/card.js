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
  View,
  TouchableOpacity
} from 'react-native';

type Props = {
  city: string,
  temperature: number,
  onPress: () => void
};

export default class Card extends Component<Props> {
  render() {
    const { city, temperature, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.degree}>{temperature} °C</Text>
      </TouchableOpacity>
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
