# 마크 다운 기능

문서는 읽기 쉽고 쓰기 쉬워야합니다.

## 문서 형식

문서는 Markdown 형식으로 표현됩니다.

```
# 제목

내용은 여기에 ...
```

내부적으로 우리는 Markdown을 구문 분석하기 위해 매우 빠른 [marked](https://marked.js.org)를 사용하므로 거의 모든 [GitHub Flavored Markdown] (https://github.github.com/gfm/) 기능이 지원됩니다 .

무엇인지 확실하지 않으면 [Markdown](https://daringfireball.net/projects/markdown/)에 대한 소개를 확인하십시오.

## 링크

### 내부 링크

내부 링크는 SPA 스타일 탐색을 위해`<router-link>`로 변환됩니다.

__Input__:

```markdown
- [Home](/) <!-- 사용자를 홈페이지로 이동 -->
- [Use Vue in Markdown](/guide/use-vue-in-markdown) <!-- 다른 페이지로 사용자 보내기 -->
- [Check out the `title` option](../options.md#title) <!-- 마크 다운 타일에 대한 상대적 링크조차도 -->
```

__Output__:

- [Home](/) <!-- 사용자를 홈페이지로 이동 -->
- [Use Vue in Markdown](/guide/use-vue-in-markdown) <!-- 다른 페이지로 사용자 보내기 -->
- [Check out the `title` option](../options.md#title) <!-- 마크 다운 타일에 대한 상대적 링크조차도 -->


### 외부 링크

외부 링크는 HTML 속성`target = "_ blank"rel = "noopener noreferrer"`를 자동으로 가져옵니다. 예를 들면 다음과 같습니다.

__Input__:

```markdown
- [Docute website](https://docute.org)
- [Docute repo](https://github.com/egoist/docute)
```

__Output__:

- [Docute website](https://docute.org)
- [Docute repo](https://github.com/egoist/docute)

## 작업 목록

__Input__:

```markdown
- [ ] Rule the web
- [x] Conquer the world
- [ ] Learn Docute
```

__Output__:

- [ ] Rule the web
- [x] Conquer the world
- [ ] Learn Docute

## 코드 하이라이팅
   
코드 울타리는 [Prism.js](https://prismjs.com/), 예제 코드를 사용하여 강조 표시됩니다.

```js
// 함수가 계속 호출되는 한 함수가 반환하지 않는 함수를 반환합니다.
// 트리거됩니다. 이 함수는 호출이 중지 된 후에 호출됩니다.
// N 밀리 초. `immediate`가 전달되면, 함수를
// 후행 대신 선행 가장자리.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
```

기본적으로 지원되는 언어 :

<ul>
  <li v-for="lang in builtinLanguages" :key="lang">
    {{ lang }}
  </li>
</ul>

[highlight](/options#highlight) 옵션을 사용하여 더 많은 언어를 추가 할 수 있습니다.

## 코드 울타리 옵션

코드 울타리 언어 옆에서 JS 객체를 사용하여 옵션을 지정할 수 있습니다:

````markdown
```js {highlightLines: [2]}
function foo() {
  console.log('foo')
}
```
````

사용 가능한 옵션 :

- `highlightLines`: [코드 펜스의 라인 하이라이팅](#line-highlighting-in-code-fences)
- `mixin`: [Vue Mixin 추가하기](#adding-vue-mixin)

## 코드 펜스의 라인 하이라이트

__Input:__

````markdown
```js {highlight:[3,'5-7',12]}
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```
````

__Output:__

```js {highlight:[3,'5-7',12]}
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

## Vue Mixin 추가하기

Markdown 구성 요소에 Vue mixin 추가 :

````markdown
<button v-on:click="count++">{{ count }}</button> 사람들은 Docute를 좋아합니다.

```js {mixin:true}
{
  data() {
    return {
      count: 1000
    }
  }
}
```
````

<button v-on:click="count++">{{ count }}</button> 사람들은 Docute를 좋아합니다.

```js {mixin:true}
{
  data() {
    return {
      count: 1000
    }
  }
}
```

## Mermaid 사용

[Mermaid](https://mermaidjs.github.io/)는 일반 텍스트로 차트를 작성하는 방법이며 간단한 도우 풋 플러그인을 사용하여 인어 지원을 추가 할 수 있습니다. :

```html
<script src="https://unpkg.com/docute@4/dist/docute.js"></script>
<!-- Load mermaid -->
<script src="https://unpkg.com/mermaid@8.0.0-rc.8/dist/mermaid.min.js"></script>
<!-- Load the mermaid plugin -->
<script src="https://unpkg.com/docute-mermaid@1/dist/index.min.js"></script>

<!-- Use the plugin -->
<script>
new Docute({
  // ...
  plugins: [
    docuteMermaid()
  ]
})
</script>
```

## Markdown 내부에서 HTML

다음과 같이 Markdown에 HTML을 작성할 수 있습니다. :

```markdown
__FAQ__:

<details><summary>삶의 의미는 무엇인가</summary>

어떤 사람들은 이것이 __42__ 라고 말하고, 어떤 사람들은 아직 알려지지 않았다고 말합니다..
</details>
```

__FAQ__:

<details><summary>삶의 의미는 무엇인가</summary>

어떤 사람들은 이것이 __42__ 라고 말하고, 어떤 사람들은 아직 알려지지 않았다고 말합니다.
</details>

<br>

<Note>사실 Markdown에서도 Vue 지시어와 Vue 구성 요소를 사용할 수도 있습니다. 자세한 내용은 [여기](./use-vue-in-markdown.md).</Note>
