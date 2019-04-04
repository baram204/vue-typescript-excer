# 번들과 함께 사용

Docute를 사용하기 위해 번들러를 사용할 필요는 없지만 원하는 경우 할 수 있습니다!

먼저 Docute를 프로젝트에 종속물로 설치해야합니다.

```bash
yarn add docute --dev
```

그런 다음 선택한 bundler와 함께 사용법은 아래를 참조하십시오.

## 웹팩(Webpack)

엔트리 파일에서 :

```js
import Docute from 'docute'

new Docute({
  target: '#app',
  // Other options
})
```

HTML 파일을 생성하려면 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)을 사용해야 할 수도 있습니다.

[Vue CLI](https://cli.vuejs.org) 또는 [Poi](https://poi.js.org)를 사용하고 계시다면 더 이상 빌드 구성이 필요하지 않습니다.

## 파-슬(Parcel)

[TODO] [PR WELCOME]
