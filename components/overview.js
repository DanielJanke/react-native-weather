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
      cities: [
        { city: 'Berlin', temperature: 1 },
        { city: 'Bangkok', temperature: 1 },
        { city: 'München', temperature: 1 },
        { city: 'Reykjavík', temperature: 1 }
      ],
      newCity: ''
    };
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  componentDidMount() {
    this.state.cities.forEach((city, i) => {
      this._fetchTemperatures(city.city).then(response => {
        console.log('temp: ', city.city, response, i);
        let cities = this.state.cities;
        cities[i] = {
          city: city.city,
          temperature: response.query.results.channel.item.condition.temp
        };
        this.setState({ cities });
      });
    });
  }

  _handleNewCity = city => {
    this.setState({ newCity: city });
  };

  _handleSubmitNewCity = () => {
    let cities = this.state.cities;
    let newCity = this.state.newCity;

    this._fetchTemperatures(newCity).then(value => {
      this.setState({
        cities: [
          ...cities,
          {
            city: newCity,
            temperature: value.query.results.channel.item.condition.temp
          }
        ],
        newCity: ''
      });
    });
  };

  _handlePress = temperature => {
    this.props.navigator.showModal({
      screen: 'example.Detail', // unique ID registered with Navigation.registerScreen
      title: 'Detail', // title of the screen as appears in the nav bar (optional)
      passProps: {
        close: this._onPressClose,
        temperature
      }, // simple serializable object that will pass as props to the modal (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
  };

  _fetchTemperatures = async city => {
    query = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="c"`;
    let baseUrl = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    let response = await fetch(baseUrl).then(response => {
      return response;
    });

    let json = await response.json();
    console.log(json);

    return json;
  };

  _onPressClose = () => {
    this.props.navigator.dismissAllModals({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });
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
          return (
            <Card
              onPress={() => {
                this._handlePress(city.temperature);
              }}
              city={city.city}
              temperature={city.temperature}
            />
          );
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
