# 내장 된 구성 요소

Docute에는 Vue 구성 요소가 내장되어 있습니다.

## `<ImageZoom>`

특정 이미지를 표시하려면 중간 스타일 확대 / 축소 효과를 사용하십시오.

| Prop   | Type      | Default | Description              |
| ------ | --------- | ------- | ------------------------ |
| url    | `string`  | N/A     | URL to image             |
| alt    | `string`  | N/A     | Placeholder text         |
| border | `boolean` | `false` | Show border around image |
| width  | `string`  | N/A     | Image width              |

<br>

예시:

```markdown
<ImageZoom 
  url="https://i.loli.net/2018/09/24/5ba8e878850e9.png" 
  :border="true" 
  width="300"
/>
```

<ImageZoom url="https://i.loli.net/2018/09/24/5ba8e878850e9.png" :border="true" width="300"/>

## `<Badge>`

작은 강조와 라벨링 구성 요소.

| Prop     | Type                                                                 | Default | Description             |
| -------- | -------------------------------------------------------------------- | ------- | ----------------------- |
| type     | <code>'tip' &#x7C; 'success' &#x7C; 'warning' &#x7C; 'danger'</code> | N/A     | Badge type              |
| color    | `string`                                                             | N/A     | Custom background color |
| children | `string`                                                             | N/A     | Badge text              |

<br>

예시:

```markdown
- Feature 1 <Badge>Badge</Badge>
- Feature 2 <Badge type="tip">Tip</Badge>
- Feature 3 <Badge type="success">Success</Badge>
- Feature 4 <Badge type="warning">Warning</Badge>
- Feature 5 <Badge type="danger">Danger</Badge>
- Feature 6 <Badge color="magenta">Custom Color</Badge>
```

- Feature 1 <Badge>Badge</Badge>
- Feature 2 <Badge type="tip">Tip</Badge>
- Feature 3 <Badge type="success">Success</Badge>
- Feature 4 <Badge type="warning">Warning</Badge>
- Feature 5 <Badge type="danger">Danger</Badge>
- Feature 6 <Badge color="magenta">Custom Color</Badge>

## `<Note>`

색이 칠해진 노트 블록, 귀하의 페이지의 일부를 강조합니다.

| Prop     | Type                                                                 | Default             | Description                                       |
| -------- | -------------------------------------------------------------------- | ------------------- | ------------------------------------------------- |
| type     | <code>'tip' &#x7C; 'warning' &#x7C; 'danger' &#x7C; 'success'</code> | N/A                 | Note type                                         |
| label    | `string` `boolean`                                                   | The value of `type` | Custom note label text, use `false` to hide label |
| children | `string`                                                             | N/A                 | Note content                                      |

<br>

예시:

```markdown
<Note>

This is a note that details something important.<br>
[A link to helpful information.](https://docute.org)

</Note>

<!-- Tip Note -->
<Note type="tip">

This is a tip for something that is possible.

</Note>

<!-- Warning Note -->
<Note type="warning">

This is a warning for something very important.

</Note>

<!-- Danger Note -->
<Note type="danger">

This is a danger for something to take action for.

</Note>
```

<Note>

This is a note that details something important.<br>
[A link to helpful information.](https://docute.org)

</Note>

<!-- Tip Note -->
<Note type="tip">

This is a tip for something that is possible.

</Note>

<!-- Warning Note -->
<Note type="warning">

This is a warning for something very important.

</Note>

<!-- Danger Note -->
<Note type="danger">

This is a danger for something to take action for.

</Note>

## `<Gist>`

Markdown 문서에 [GitHub Gist](https://gist.github.com/)를 삽입하십시오.

| Prop | Type     | Default | Description |
| ---- | -------- | ------- | ----------- |
| id   | `string` | N/A     | Gist ID     |

예시:

```markdown
<Gist id="71b8002ecd62a68fa7d7ee52011b2c7c" />
```

<Gist id="71b8002ecd62a68fa7d7ee52011b2c7c" />

## `<docute-select>`

커스터마이즈 된`<select>`컴포넌트 :

<!-- prettier-ignore -->
````vue
<docute-select :value="favoriteFruit" v-on:change="handleChange">
  <option value="apple" :selected="favoriteFruit === 'apple'">Apple</option>
  <option value="banana" :selected="favoriteFruit === 'banana'">Banana</option>
  <option value="watermelon" :selected="favoriteFruit === 'watermelon'">Watermelon</option>
</docute-select>

Your favorite fruit: {{ favoriteFruit }}

```js {mixin: true}
module.exports = { 
  data() { 
    return { 
      favoriteFruit: 'banana' 
    }
  }, 
  methods: {
    handleChange(value) { 
      this.favoriteFruit = value
    } 
  }
}
```
````

<docute-select v-on:change="handleChange" :value="favoriteFruit">
  <option value="apple" :selected="favoriteFruit === 'apple'">Apple</option>
  <option value="banana" :selected="favoriteFruit === 'banana'">Banana</option>
  <option value="watermelon" :selected="favoriteFruit === 'watermelon'">Watermelon</option>
</docute-select>

Your favorite fruit: {{ favoriteFruit }}

```js {mixin: true}
{
  data() {
    return {
      favoriteFruit: 'banana'
    }
  },
  methods: {
    handleChange(value) {
      this.favoriteFruit = value
    }
  }
}
```

##`<v-style>``<v-script>`

`<style>`과`<script>`태그를 사용하기위한 해킹.

일반적으로 Markdown에서 <style>과 <script> 태그를 이들 구성 요소로 자동 변환하기 때문에 직접 사용할 필요가 없습니다.
