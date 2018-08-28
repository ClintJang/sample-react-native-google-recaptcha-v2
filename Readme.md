# Sample React Native Google reCaptcha V2

Google reCaptcha V2를 React Native에 localhost로 적용해서 확인해 보기위한 정도의 Sample Source 입니다.

여기서는 reCaptcha V2에 문제점을 확인하고 간단하게 셈플링을 했습니다.

무료로 이용하는 reCaptcha 감사합니다. 🙇‍

- [recaptcha 란 무엇인가요? wiki link](https://ko.wikipedia.org/wiki/ReCAPTCHA) 
- [Google reCaptcha V2 Link](https://developers.google.com/recaptcha/docs/display)
- [Google reCaptcha V3 Link](https://developers.google.com/recaptcha/docs/v3) 

# reCaptcha v3
> reCaptcha v3는 react native에서 바로 사용하게 해주는 라이브러리가 있습니다. 

- 라이브러리 링크 : [react-native-recaptcha-v3](https://www.npmjs.com/package/react-native-recaptcha-v3)

#  reCaptcha v2
reCaptcha v2를 react native에서 바로 사용하게 해주는 라이브러리는 없는 것으로 보여집니다.

webview로 래핑을 해서 사용해야 됩니다.

## 네이티브 라이브러리
reCaptcha v2를 native level로 만들어진 라이브러리 링크 입니다.

- iOS : [ReCaptcha
Swift](https://github.com/fjcaetano/ReCaptcha
Swift) 로 되어있으며 swift와 rxswift 를 지원합니다.
	- 사진 선택할때와 아닐때를 보여줍니다. (이건 저희가 컨트롤이 안되네요.)

## 샘플링