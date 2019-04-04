# 플러그인

플러그인은 본질적으로 순수한 객체입니다.

```js
const showAuthor = {
  // 플러그인 이름
  name: 'showAuthor',
  // 핵심 기능 확장
  extend(api) {
    api.processMarkdown(text => {
      return text.replace(/{author}/g, '> Written by EGOIST')
    })
  }
}

new Docute({
  // ...
  plugins: [
    showAuthor
  ]
})
```

예:

```markdown
# Page Title

{author}
```

<ImageZoom :border="true" url="https://i.loli.net/2018/09/28/5bae278dd9c03.png" />

---

플러그인의 옵션을 허용하려면 팩토리 함수를 사용할 수 있습니다.

```js
const myPlugin = opts => {
  return {
    name: 'my-plugin',
    extend(api) {
      //`opts`와`api`로 무언가를하십시오.
    }
  }
}

new Docute({
  plugins: [
    myPlugin({ foo: true })
  ]
})
```

---

플러그인 개발 방법에 대한 자세한 내용은 [Plugin API](/plugin-api)를 확인하십시오.

관리자와 사용자가 Docute 플러그인 목록을 보려면 [https://github.com/egoist/docute-plugins](https://github.com/egoist/docute-plugins)를 확인하십시오.
