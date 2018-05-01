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
  ScrollView,
  TextInput
} from 'react-native';

import Card from './views/card';

type Props = {};

export default class Overview extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      cities: ['Berlin', 'Tokio', 'Amsterdam', 'London', 'Paris', 'Kreuzberg'],
      newCity: ''
    };
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  _handleNewCity = city => {
    this.setState({ newCity: city });
  };

  _handleSubmitNewCity = () => {
    let cities = this.state.cities;
    cities.push(this.state.newCity);
    this.setState({ cities, newCity: '' });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Wetter</Text>
        <TextInput
          returnKeyType={'search'}
          style={styles.textInput}
          value={this.state.newCity}
          placeholder="Füge eine neue Stadt hinzu"
          onChangeText={text => {
            this._handleNewCity(text);
          }}
          onSubmitEditing={this._handleSubmitNewCity}
        />
        {this.state.cities.map(city => {
          return <Card city={city} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  textInput: {
    paddingHorizontal: 20,
    paddingBottom: 32
  },
  welcome: {
    fontSize: 50,
    marginTop: 50,
    marginBottom: 16,
    fontWeight: 'bold',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
