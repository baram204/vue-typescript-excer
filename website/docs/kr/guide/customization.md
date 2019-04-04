# 사용자 정의

Docute를 Cusotmizing하는 것은 레고 벽돌을 가지고 노는 것만 큼 재미 있습니다.

## Navbar

탐색 바는 사이트 수준 탐색에 사용됩니다. 여기에는 보통 귀하의 홈페이지에 대한 링크와 프로젝트 저장소에 대한 링크가 포함되어 있습니다. 그러나 원하는대로 추가 할 수 있습니다.

```js
new Docute({
  title: 'Docute',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/egoist/docute'
    },
    // 드롭 다운 메뉴
    {
      title: 'Community',
      children: [
        {
          title: 'Spectrum',
          link: 'https://spectrum.chat/your-community'
        },
        {
          title: 'Discord',
          link: 'https://discord.app/your-discord-server'
        }
      ]
    }
  ]
})
```

`title` 옵션은 HTML에서`<title>`태그의 값을 기본값으로 사용하므로 완전히 선택 사항입니다.

어떻게 보이는지이 웹 사이트의 navbar를 확인하십시오.

## 사이드 바

사이드 바는 주로 페이지 간의 탐색에 사용됩니다. 이 페이지에서 볼 수 있듯이 버전 선택기와 언어 선택기를 표시하는데도이 스크립트를 사용합니다.

```js
new Docute({
  sidebar: [
    // A sidebar item, with multiple sub-links
    {
      title: 'Guide', // Optional
      links: [
        {
          title: 'Getting Started',
          link: '/guide/getting-started'
        },
        {
          title: 'Installation',
          link: '/guide/installation'
        }
      ]
    }
  ]
})
```

자세한 내용은 [sidebar](../options.md#sidebar) 옵션 참조를 확인하십시오.

## 레이아웃

Docute는 기본적으로 와이드 스크린 레이아웃을 사용하지만 더 많은 레이아웃을 사용할 수 있습니다.

<docute-select v-model="$store.state.originalConfig.layout" v-slot="{ value }">
  <option value="wide" :selected="value === 'wide'">Wide</option>
  <option value="narrow" :selected="value === 'narrow'">Narrow</option>
  <option value="left" :selected="value === 'left'">Left</option>
</docute-select>

```js {interpolate:true}
new Docute({
  layout: '{{ $store.state.originalConfig.layout }}'
})
```

버전 관리

최신 버전의 'master'브랜치와 이전 버전의 버전 인`v0.1``v0.2` 브랜치가 있다고 가정 해 보겠습니다. 하나의 Docute 웹 사이트를 사용하여 [`overrides`](../options.md#overrides) 및 [`sourcePath`](../options.md#sourcepath) 옵션을 사용하십시오.

```js
new Docute({
  // Configure following paths to load Markdown files from different path
  overrides: {
    '/v0.1/': {
      sourcePath: 'https://raw.githubusercontent.com/user/repo/v0.1'
    },
    '/v0.2/': {
      sourcePath: 'https://raw.githubusercontent.com/user/repo/v0.2'
    }
  },
  // 버전 선택기를 추가하기 위해`versions` 옵션을 사용하십시오
  // 사이드 바에서
  versions: {
    'v1 (Latest)': {
      link: '/'
    },
    'v0.2': {
      link: '/v0.2/'
    },
    'v0.1': {
      link: '/v0.1/'
    }
  }
})
```

## 사용자 정의 글꼴

웹 사이트에 맞춤 글꼴을 적용하는 것은 매우 쉽습니다. HTML 파일에 '<style>'태그를 추가하여 [Google Fonts](https://fonts.google.com/)를 사용할 수 있습니다.

```html
<style>
  /* Google 글꼴에서 원하는 글꼴 가져 오기 */
  @import url('https://fonts.googleapis.com/css?family=Lato');

  /* 본문에 글꼴 적용 (기본 글꼴을 덮어 쓰기) */
  body {
    font-family: Lato, sans-serif;
  }
</style>
```

<button v-on:click="insertCustomFontsCSS">Click me</button> 을 클릭하여이 웹 사이트의 사용자 정의 글꼴을 토글합니다.

기본적으로 새로운 Docute 웹 사이트는 시스템 기본 글꼴을 사용합니다.

## 사용자 정의 스타일

[`cssVariables`](../options.md#cssvariables) 옵션을 사용하여 사이트 스타일을 사용자 정의 할 수 있습니다 :

```js
new Docute({
  cssVariables: {
    sidebarWidth: '300px'
  }
})

// 또는 현재 테마를 얻기 위해 함수를 사용한다.
new Docute({
  cssVariables(theme) {
    return theme === 'dark' ? {} : {}
  }
})
```

<code>{{$ store.getters.config.theme}}</code> 테마에서 사용되는`cssVariables` :

<ul>
<li v-for="(value, key) in $store.getters.cssVariables" :key="key">
<strong>{{key}}</strong>: <color-box :color="value" v-if="/(Color|Background)/.test(key)" />
<code>{{value}}</code>
</li>
</ul>

이러한 속성은 camelCase에 정의되어 있지만 kebab-case를 사용하여 CSS에서 참조해야합니다.

```css
.Sidebar {
  width: var(--sidebar-width);
}
```
