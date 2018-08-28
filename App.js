/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {WebView, Dimensions, StyleSheet, View} from 'react-native';

// I do not want to see the log now!!
// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      siteKey:"your site key!!"
   };
 }

  render() {
    return (
      <View style={styles.container}>
        <WebView 
          javaScriptEnabled={true} 
          mixedContentMode={'always'} 
          scalesPageToFit={true}
          style={{
            width: Dimensions.get('window').width-20,
            // height: 500,
            marginTop:40
          }} 
          source={{
              html: this.getContent(),
              baseUrl: 'http://localhost'
          }}/>
      </View>
    );
  }

  getContent(){
    var originalForm = '<!DOCTYPE html><html><head>'
                        + '<script src="https://www.google.com/recaptcha/api.js">'
                        + '</script></head><body>'
                        + '<div class="g-recaptcha" data-sitekey="[MySiteKey]"></div>'
                        + '</body></html>'
    let replaceForm =  originalForm
        .replace("[MySiteKey]", this.state.siteKey); 

    return replaceForm; 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
