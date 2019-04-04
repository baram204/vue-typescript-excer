# 플러그인 API

플러그인 속성 :

- `name`: `string` 플러그인 이름.
- `extend(api: PluginAPI)`: 핵심 기능 확장.

## api.processMarkdown(fn)

- `fn`: `(text: string) => string | Promise<string>`

마크다운 처리.

## api.processHTML(fn)

- `fn`: `(html: string) => string | Promise <string>`

HTML 처리.

## api.extendMarkedRenderer(fn)

- `fn`: `(renderer: marked.Renderer) => void`

`fn`을 사용하여 우리가 사용하는 [표시된 렌더러](https://marked.js.org/#/USING_PRO.md#renderer)를 수정할 수 있습니다.

## api.extendMarkdownComponent(fn)

- `fn`: `(Component: VueComponentOptions) => void`

이 후크를 사용하여 컴파일 된 마크 다운 구성 요소 수정을 사용할 수 있습니다.

## api.onContentUpdated(fn)

- `fn`: `(vm: Vue) => void`

`fn`은 페이지 내용이 업데이트 될 때 호출됩니다.

## api.registerComponent(position, component)

- `position`: `string`
- `component`: `VueComponent`

특정 위치에 구성 요소 등록 :

- `sidebar:start`: 사이드 바 시작입니다.
- `sidebar:end`: 사이드 바의 끝.
- `content:start`: 페이지 내용의 시작.
- `content:end`: 페이지 콘텐츠의 끝.
- `header-right:start`: 사이트 헤더에서 오른쪽 탐색 시작.
- `header-right:end`: 사이트 헤더의 오른쪽 탐색 끝입니다.

## api.router

기본적으로 [Vue Router](https://router.vuejs.org/api/#router-instance-properties) 인스턴스입니다.

## api.store

기본적으로 [Vuex](https://vuex.vuejs.org/api/#vuex-store-instance-properties) 인스턴스입니다.
