# 옵션

`Docute` 생성자가 사용하는 옵션.

```js
new Docute(options)
```

## 대상

- 타입 :`string`
- 기본값 :`docute`

찾을 대상 요소의 ID입니다. (예. `app` 또는`#app`)

## 제목

- 타입 :`string`
- 기본값 :`document.title`

웹 사이트 제목.

## nav

- 타입 :`Array <NavItem>`

navbar에 표시 할 탐색 항목의 배열입니다.

```ts
interface NavItem {
  title: string
  link?: string
  //`link` 대신`links`를 사용하여 드롭 다운을 표시합니다.
  links?: Array<NavItemLink>
}

interface NavItemLink {
  title: string
  link: string
}
```

## 사이드바

- 타입 :`Array <SidebarItem>``(store: Vuex.Store) => Arrat<SidebarItem>`

사이드 바에 표시 할 탐색 항목의 배열입니다.

```ts
interface SidebarItem {
  title?: string
  links: Array<SidebarItemLink>
}

interface SidebarItemLink {
  title: string
  link: string
  /* Whether to show TOC, true by default */
  toc?: boolean
}
```

## 소스 경로

- 타입 :`string`
- 기본값 :`./ '`

markdown 파일을 가져 오는 원본 경로는 기본적으로`index.html`이 채워진(populated) 경로에서 로드합니다.

`https://some-website/path/to/markdown/files`과 같은 완전한 URL이 될 수도 있습니다. 그러면 다른 도메인에서 파일을 로드 할 수 있습니다.

## 라우트(경로)

- 타입: `Routes`

Docute가 특정 파일을 가져 오거나 특정 내용을 경로로 사용하게 하려면 이 옵션을 사용하십시오.

```ts
interface Routes {
  [path: string]: RouteData
}

interface RouteData {
  / * 내용 h1 헤더의 기본값 * /
  title?: string
  / *`content`와`file` 중 하나가 필요합니다 * /
  content?: string
  / * 응답은`content`로 사용될 것입니다 * /
  file?: string
  / * 내용을 마크 다운으로 구문 분석합니다. 기본적으로 true입니다. * /
  markdown?: boolean
  [k: string]?: any
}
```

## 컴포넌트 믹스인

- 타입 :`Array <Object>`

기본적으로 모든 마크 다운 구성 요소에 적용되는 [Vue mixins](https://vuejs.org/v2/api/#mixins)의 배열입니다.

## 코드구문강조

- 타입 :`Array <string>`

강조 표시 할 언어 이름의 배열입니다. 지원되는 모든 언어 이름 ([prism-`접두어 제외)은 [Prism.js] (https://unpkg.com/prismjs/components/)에서 확인하십시오.

예 :`highlight : [ 'typescript', 'go', 'graphql']`.

## editLinkBase

- 타입 :`string`

*edit link*의 URL에 대한 기본 경로입니다.

예 : Markdown 파일을 GitHub 저장소의 master 브랜치에있는`docs` 폴더에 저장하면 다음과 같아야합니다 :

```
https://github.com/USER/REPO/blob/master/docs
```

## editLinkText

- 타입 :`string`
- 기본값 : `'Edit this page'`

*edit link* 텍스트.

## 테마

- 타입 :`string`
- 기본값 :`default`
- 값 :`default` `dark`

사이트 테마.

## 다크테마 토글러

- 타입 :`boolean`
- 기본값 :`undefined`


어두운 테마를 켜고 끌 수있는 토글러를 표시합니다.

## 레이아웃

- 타입 :`string`
- 기본값 :`wide`
- 값 :`wide` `narrow` `left`

사이트 레이아웃.

## 버전

- 타입 :`버전`

Docute를 지정하면 사이드 바에 버전 선택기가 표시됩니다.

```ts
interface Versions {
  // 'v1`과 같은 버전 번호.
  [version: string]: {
   //이 버전의 문서에 대한 링크
    link: string
  }
}
```

## css 변수

- 타입 : `object` `(theme: string) => object`

CSS 변수를 재정의하십시오.

## 재정의(오버라이드)

- 타입 : `{[path: string]: LocaleOptions}`

```ts
interface LocaleOptions extends Options {
  language: string
}
```

## 라우터

- 타입: `ConstructionOptions`

`route`를 제외한 모든 라우트 라우터의 [구성 옵션](https://router.vuejs.org/api/#router-construction-options)은 여기에서 허용됩니다.

예를 들어, URL 에서 [해시 제거](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations) 위해 `router: {mode: 'history '}`로 설정할 수 있습니다 .

## banner / footer

- 타입: `string` `VueComponent`

배너와 꼬리말을 표시합니다. 문자열은`<div class = "docute-banner">` 또는`<div class = "docute-footer">`안에 감싸여 Vue 템플릿으로 사용됩니다.

예 :

```js
new Docute({
  banner: `Please <a href="https://donate.com/link">
  donate</a> <ExternalLinkIcon /> to support this project!`
})
```

Vue 컴포넌트를 사용할 수도 있습니다:

```js
new Docute({
  banner: {
    template: `
    <div class="docute-banner">
      Please <a href="https://donate.com/link">
      donate</a> <ExternalLinkIcon /> to support this project!
    </div>
    `
  }
})
```

## fetchOptions

- 타입: `object`

 [`window.fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) 옵션.
