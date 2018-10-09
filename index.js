import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';
import reducer from './src/store/reducers/places';

const store = configureStore();
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('rncourse', () => RNRedux);