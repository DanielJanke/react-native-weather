import { AppRegistry } from 'react-native';
import App from './App';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Übersicht',
      screen: 'example.Overview', // this is a registered name for a screen
      // icon: require('../img/one.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Einstellungen',
      screen: 'example.Settings',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});
