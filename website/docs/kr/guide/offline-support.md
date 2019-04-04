# 오프라인 지원

[서비스 작업자](https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers)가 제공하는 파일 캐싱 및 검색을 통해 웹 사이트의 성능을 향상시킵니다.

먼저 docs 루트 디렉토리에`sw.js` 파일을 만듭니다 :

```js
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
)

const ALLOWED_HOSTS = [
  // 마크 다운 파일을로드 할 도메인
  location.host,
  // docute를로드 할 도메인
  'unpkg.com'
]

const matchCb = ({ url, event }) => {
  return event.request.method === 'GET' && ALLOWED_HOSTS.includes(url.host)
}

workbox.routing.registerRoute(
  matchCb,
  workbox.strategies.networkFirst()
)
```

<sup>_[Workbox](https://developers.google.com/web/tools/workbox/)는 우수 사례 모음을 작성하고 서비스 직원과 협력 할 때 개발자가 작성하는 상용구를 제거하는 라이브러리입니다._</sup>

그런 다음이 서비스 작업자를`index.html`에 등록하십시오 :


```html {highlight:['16-18']}
<!DOCTYPE >
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>My Docs</title>
    <link rel="stylesheet" href="https://unpkg.com/docute@4/dist/docute.css" />
  </head>
  <body>
    <div id="docute"></div>
    <script src="https://unpkg.com/docute@4/dist/docute.js"></script>
    <script>
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
      }

      new Docute({
        target: '#docute'
      })
    </script>
  </body>
</html>
```

__🥳 이제 귀하의 웹 사이트는 오프라인 상태가됩니다 .__

만약 이 서비스 작업자가 더 이상 필요하지 않으면`sw.js`의 내용을 다음 코드로 대체하여 비활성화하십시오.:

```js
self.addEventListener('install', e => {
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  self.registration
    .unregister()
    .then(() => {
      return self.clients.matchAll()
    })
    .then(clients => {
      clients.forEach(client => client.navigate(client.url))
    })
})
```
