# 국제화

Docute는 URL 기반 API를 사용하기 때문에 다국어 지원을 추가하는 것이 매우 쉽습니다.

```
docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
```

위의 폴더 구조를 사용하면 사용자는 URL/zh/를 통해 문서의 *중국어* 버전을 방문 할 수 있습니다.

그런 다음`overrides` 옵션을 사용하여 UI에서 사용되는 텍스트를 지역화 할 수 있습니다 :

```js
new Docute({
  sidebar: [
    {
      links: [
        { title: 'Guide', link: '/guide' }
      ]
    }
  ],
  overrides: {
    '/': {
      language: 'English' // 사이드 바의 언어 드롭 다운 메뉴에서 사용됩니다.
    },
    '/zh/': {
      language: 'Chinese',
      // 기본 사이드 바 재정의
      sidebar: [
        {
          links: [
            { title: '指南', link: '/zh/guide' }
          ]
        }
      ]
    }
  }
})
```
