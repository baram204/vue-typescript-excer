# 배포

명심하세요, 단지 어디서나 서비스 할 수있는 정적 HTML 파일 일뿐입니다.

## ZEIT Now <Badge type="success">Recommended</Badge>

[ZEIT Now](https://zeit.co/now)는 Global Serverless Deployment를위한 플랫폼으로, 빌드 프로세스의 유무에 관계없이 정적 웹 사이트를 배포하기에 적합합니다.

`. / docs` 폴더에 문서가 있다고 가정하면, 배포하기 위해 프로젝트에서`now.json`을 간단하게 채울 수 있습니다 :

```json
{
  "version": 2,
  "builds": [
    {
      "src": "docs/**",
      "use": "@now/static"
    }
  ]
}
```

그런 다음 [지금 설치](https://zeit.co/docs/v2/getting-started/installation/)를 클릭하십시오.

그 후, 당신은 당신의 프로젝트에서`now` 명령을 실행할 수 있습니다.

모든 푸시/풀 요청에 자동 배포가 필요한 경우 지금의 [GitHub Integration](https://zeit.co/docs/v2/integrations/now-for-github/)을 확인하십시오.

## Netlify <Badge type="success">Recommended</Badge>

1. [Netlify](https://www.netlify.com/) 계정에 로그인하십시오.
2. [대시 보드](https://app.netlify.com/) 페이지에서 __New site from Git__ 을 클릭하십시오.
3. 문서를 저장할 저장소를 선택하고 __Build Command__ 영역을 공백으로 남겨두고 __Publish directory__ 영역을`index.html`의 디렉토리로 채 웁니다. 예를 들어 `docs`에 채운 경우 `docs/index.html` 여야합니다 .

## GitHub 페이지

GitHub Pages를 사용하는 가장 쉬운 방법은 master 브랜치의 `./docs` 폴더 안에 모든 파일을 채운 다음이 폴더를 GitHub Pages에 사용하는 것입니다 :

<ImageZoom url="https://i.loli.net/2018/06/11/5b1e0da0c173a.png" alt="github pages" :border="true" />

그러나 여전히`gh-pages` 브랜치나`master` 브랜치를 사용하여 문서를 제공 할 수 있습니다. 필요에 따라 다릅니다.
