# Docute 소개

프로젝트를위한 문서 사이트를 만드는 가장 빠른 방법.

## Docute 는 무엇입니까?

Docute는 기본적으로 Markdown 파일을 가져 와서 단일 페이지 응용 프로그램으로 렌더링하는 JavaScript 파일입니다.

그것은 완전히 런타임으로 구동되므로 서버 측 구성 요소가 필요하지 않으므로 빌드 프로세스가 필요 없습니다. HTML 파일과 Markdown 문서를 만들면 웹 사이트가 거의 준비되었습니다!

## 어떻게 작동합니까?

간단히 말해서 : URL은 API입니다.

방문한 URL에 해당하는 markdown 파일을 가져 와서 렌더링합니다.

```
/         => /README.md
/foo      => /foo.md
/foo/     => /foo/README.md
/foo/bar  => /foo/bar.md
```

## 빠른 시작

`. / my-docs` 폴더에 다음 파일들이 있다고 가정 해 봅시다 :

```bash
.
├── README.md
└── index.html
```

`index.html`는 다음과 같습니다 :

```html {highlight:[7,'10-16']}
<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>My Docs</title>
    <link rel="stylesheet" href="https://unpkg.com/docute@4/dist/docute.css">
  </head>
  <body>
    <div id="docute"></div>
    <script src="https://unpkg.com/docute@4/dist/docute.js"></script>
    <script>
      new Docute({
        target: '#docute'
      })
    </script>
  </body>
</html>
```

그런 다음이 폴더를 다음을 사용하여 컴퓨터의 정적 웹 사이트로 제공 할 수 있습니다.

- Node.js :`npm i -g serve && serve .`
- Python :`python -m SimpleHTTPServer`
- Golang : `caddy`
- .. 또는 무엇이든 정적 웹 서버

다음으로 [sidebar](./options.md#sidebar), [nav](./options.md # nav) 또는 다른 [options](./options.md)을 사용하여 웹 사이트를 사용자 정의 할 수 있습니다.

Docute 온라인 또는 [다운로드](https://repl.it/@egoist/docute-starter.zip) 할 수있는 [REPL](https://repl.it/@egoist/docute-starter)이 있습니다. 로컬로 실행합니다.

## 비교

### VuePress / GitBook / Hexo

그들은 모두 정적 인 HTML을 생성하는데, 이는 SEO에 도움이됩니다.

SEO에 관심이 있다면 [presite](https://github.com/egoist/presite)를 사용하여 웹 사이트를 미리 렌더링하는 것이 좋습니다.

### 문서화

[Docsify](https://docsify.js.org/#/)와 Docute는 거의 같지만 UI와 사용법이 다릅니다.

Docute는 Vue, Vue Router 및 Vuex를 사용하기 때문에 Docute(60kB)는 Docisfy(20kB)보다 3 배 더 큰 반면 Docsify는 바닐라 JavaScript를 사용합니다.

## 브라우저 호환성

Docute는 모든 에버그린 브라우저를 지원합니다. IE 지원이 없습니다!
