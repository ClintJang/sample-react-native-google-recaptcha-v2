# Sample React Native Google reCaptcha V2

`Google ReCaptcha V2` to `React Native` `localhost` is a sample source to check enough to see.

In this case, I tried to reCaptcha V2 to React Native, and it was simple to sample.

Thank you for using Google reCaptcha for free. 🙇

- [What is recaptcha? wiki Link](https://ko.wikipedia.org/wiki/ReCAPTCHA) 
- [Google reCaptcha V2 Link](https://developers.google.com/recaptcha/docs/display)
- [Google reCaptcha V3 Link](https://developers.google.com/recaptcha/docs/v3) 

# reCaptcha v3
> `reCaptcha v3` has a library of react native.

- Library link : [react-native-recaptcha-v3](https://www.npmjs.com/package/react-native-recaptcha-v3)

#  reCaptcha v2
There seems **to be no library** that allows you to use the library link `reCaptcha v2` directly from react native.

You need to apply it **using webview**.

## Native library
reCaptcha v2 is a library link made to the native level.

- iOS : [ReCaptcha
Swift](https://github.com/fjcaetano/ReCaptcha),
supports swift and rxswift.
- android : The [safetynet](https://developer.android.com/training/safetynet/recaptcha) service is supported. Please refer to the guide document.

## Sampling 
> Simple sampling.<br />
We can test it by issuing a key to localhost as an individual account. <br />

### If first time
- [React-Native getting-started](https://facebook.github.io/react-native/docs/getting-started) : I tested the sample source by implementing it with the `react-native` shell comment on that link. You need to have the package manager installed as required by the guide.
- Then run the install command from the root directory of this sample source.

	``` 
	$ npm install 
	```

- Once you have completed the process, you can run it in two ways.
	1. Run "SampleRecaptchaV2.xcodeproj" in iOS folder and execute it. <br /> or <br />
	2. Execute shell command.
		- step 1
		
		```
		$ react-native start
		```
		- step 2
		
		```
		$ react-native run-ios
		```
		
### Progress
- I tested it with the` react-native` shell command.

- [Key generation link](http://www.google.com/recaptcha/admin) : I selected v2 from the link and typed localhost.
<br/><img width="611" height="460" src="/Image/register_new_site01.png"></img>
- You can use Site Key issued from keys.

### Result 
- The result screen.

| The site key is incorrect | Validate Good Site Key |
|------------------------------------------|:----------:|
| <img width="270" height="480" src="/Image/error_site_key01.jpeg"> | <img width="268" height="480" src="/Image/site_key_good01.gif"> |


- It is the source of `App.js`. (`siteKey: "your site key !!"` Will be corrected.)

```react
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
              html: this.getHTMLStirng(),
              baseUrl: 'http://localhost'
          }}/>
      </View>
    );
  }

  getHTMLStirng(){
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

```

- development environment.

```
$ react-native info
Scanning folders for symlinks in /Users/clintjang/Documents/RNTest/react-native/SampleRecaptchaV2/node_modules (13ms)

  React Native Environment Info:
    System:
      OS: macOS High Sierra 10.13.6
      CPU: x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz
      Memory: 32.00 MB / 16.00 GB
      Shell: 3.2.57 - /bin/bash
    Binaries:
      Node: 10.9.0 - /usr/local/bin/node
      Yarn: 1.9.4 - /usr/local/bin/yarn
      npm: 6.2.0 - /usr/local/bin/npm
    SDKs:
      iOS SDK:
        Platforms: iOS 11.4, macOS 10.13, tvOS 11.4, watchOS 4.3
    IDEs:
      Android Studio: 3.1 AI-173.4907809
      Xcode: 9.4.1/9F2000 - /usr/bin/xcodebuild
    npmPackages:
      react: 16.4.1 => 16.4.1 
      react-native: 0.56.0 => 0.56.0 
    npmGlobalPackages:
      create-react-native-app: 1.0.0
      react-native-cli: 2.0.1
```


Have a nice day. 🙇
