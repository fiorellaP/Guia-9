import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebTest extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://192.168.0.10/Guia9/ejemplo.html" }}
      />
    );
  }
}

AppRegistry.registerComponent('WebTest', () => WebTest);