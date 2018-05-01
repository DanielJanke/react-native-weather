import { Navigation } from 'react-native-navigation';

import Overview from '../components/overview';
import Detail from '../components/detail';
import Settings from '../components/settings';

export function registerScreens() {
  Navigation.registerComponent('example.Overview', () => Overview);
  Navigation.registerComponent('example.Detail', () => Detail);
  Navigation.registerComponent('example.Settings', () => Settings);
}
