# Markdown에서 Vue 사용

Markdown 문서 작성시 Vue 및 JavaScript의 강력한 기능을 활용하십시오!

## Interplation(보간법)

각 마크 다운 파일은 먼저 HTML로 컴파일 된 다음 Vue 구성 요소로 렌더링됩니다. 즉, 텍스트에서 Vue 스타일 보간을 사용할 수 있습니다.

__Input__:

```markdown
{{ 1 + 1 }}
```

__Output__:

```
2
```

## 이스케이핑(코드 컴파일 처리 막기)

텍스트에서 Vue 스타일 보간을 사용하지 않으려면 다음과 같이 코드 울타리 또는 인라인 코드 안에 넣을 수 있습니다.

__Input__:

````markdown
```js
const foo = `{{ safe, this won't be interpolated! }}`
```

And `{{ bar }}` is safe too!
````

__Output__:

```js
const foo = `{{ safe, this won't be interpolated! }}`
```

And `{{ bar }}` is safe too!

## 컴포넌트 사용하기

Docute는`window` 객체에`Vue` 생성자를 노출 시켰으므로, Markdown 문서에서 사용할 수 있도록 전역 구성 요소를 등록하는 데 사용할 수 있습니다.


```js {highlight:['6-13']}
Vue.component('ReverseText', {
  props: ['text'],
  template: `
    <div class="reverse-text">
      {{ reversedText }}
      <v-style>
      .reverse-text {
        border: 1px solid var(--border-color);
        padding: 20px;
        font-weight: bold;
        border-radius: 4px;
      }
      </v-style>
    </div>
  `,
  computed: {
    reversedText() {
      return this.text.split('').reverse().join('')
    }
  }
})
```

Vue 템플릿에서`style` 태그를 직접 사용할 수 없으므로 강조 표시된 부분을 볼 수 있습니다. 여기서는이를 해결하기 위해`v-style` 구성 요소를 제공했습니다. 마찬가지로`v-script` 컴포넌트도 있습니다.

__Input__:

```markdown
<ReverseText text="hello world" />
```

__Output__:

<ReverseText text="hello world" />

## 트레이드-오프

- `@` 약식은 작동하지 않습니다.

표준 HTML 속성은`@`로 시작할 수 없으므로,`v-on` 지시어의`@`단축은 우리가 사용하는 markdown 파서에 의해 유효한 HTML로 인식되지 않을 것입니다. 이 문제를 해결하기 위해 pull 리퀘스트를 매우 환영합니다.
