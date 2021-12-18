/**
 * @format
 */

import {AppRegistry, LogBox, I18nManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

LogBox.ignoreLogs(['Remote debugger'])
LogBox.ignoreAllLogs(true)

AppRegistry.registerComponent(appName, () => App);
