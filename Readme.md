# Sample React Native Google reCaptcha V2

`Google reCaptcha V2`를 `React Native`에 `localhost`로 적용해서 확인해 보기위한 정도의 Sample Source 입니다.

여기서는 `reCaptcha V2`에 문제점을 확인하고 간단하게 셈플링을 했습니다.

무료로 이용하는 reCaptcha 감사합니다. 🙇‍

- [recaptcha 란 무엇인가요? wiki link](https://ko.wikipedia.org/wiki/ReCAPTCHA) 
- [Google reCaptcha V2 Link](https://developers.google.com/recaptcha/docs/display)
- [Google reCaptcha V3 Link](https://developers.google.com/recaptcha/docs/v3) 

(한국어로 된 RN 자료가 많아지길 희망합니다.)

# reCaptcha v3
> `reCaptcha v3`는 react native에서 바로 사용하게 해주는 라이브러리가 있습니다. 

- 라이브러리 링크 : [react-native-recaptcha-v3](https://www.npmjs.com/package/react-native-recaptcha-v3)

#  reCaptcha v2
`reCaptcha v2`를 react native에서 바로 사용하게 해주는 라이브러리는 없는 것으로 보여집니다.

webview로 래핑을 해서 사용해야 됩니다.

## 네이티브 라이브러리
reCaptcha v2를 native level로 만들어진 라이브러리 링크 입니다.

- iOS : [ReCaptcha
Swift](https://github.com/fjcaetano/ReCaptcha
Swift) 로 되어있으며 swift와 rxswift 를 지원합니다.
	- 사진 선택할때와 아닐때를 보여줍니다. (이건 저희가 컨트롤이 안되네요.)

## 샘플링
> 간단한 셈플링입니다. 실제라면 웹 도메인 사이트를 정상적으로 설정하고, 거기에 따른 회사 계정으로 발급된 키를 가지고 해야되겠지만...<br />
우리는 localhost로 개인 계정으로 키 발급 받아서 테스트 해보면 됩니다. 

- `CRNA` 로 하지않고, `react-native` `쉘 커맨드`로 테스트 하였습니다.

- [키발급 링크](http://www.google.com/recaptcha/admin) : 링크에서 v2를 선택하고 localhost를 선택하였습니다.
<br/><img width="611" height="460" src="/Image/register_new_site01.png"></img>
- keys에서 발급된 Site Key를 이용하시면됩니다.
- 결과 화면입니다.

.. 정리중.

- `App.js`의 소스입니다.

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
      siteKey:"6Lft1mwUAAAAALqM9TrElz2kYoiy5CRdH_lSocVg"
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

- 궁금하진 않겠지만.. 개발환경 입니다. 

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


개발하시느라 고생 많으십니다.
즐거운 하루 되세요 :)