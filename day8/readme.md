- History.pushState() 
url은 변경시키되 요청없이 사용할수 있게 하는 매서드

# React-Router_DOM

```
npm install react-router-dom
```

Context API 처럼
Router도 최상위에 올려놓고 시작해야함.
App 컴포넌트 안에서 끝나야한다.

BrowserRouter - 최상위 컴포넌트
Link - A 태그 대신 써야할 컴포넌트
Routes - 컴포넌트를 보여주게할 영역을 감싸는 컴포넌트
Route - URI에 맞는 컴포넌트를 찾아주는 컴포넌트

src
    components - 공통적으로 들어갈 컴포넌트 (공통컴포넌트 모음)
    hook - 훅에 관련된 내용을 넣는 컴포넌트
    pages - 실제 화면에 출력할 컴포넌트를 넣는 디렉토리
        comment
            index.jsx
            list.jsx
            ...
            ...
    reducers - reducer 모음
    store - Context와 같다. 전역상태를 만들어주는 디렉토리


Router 눈으로 확인하고싶다!


CSS
    styled-components

```
npm install styled-components
```


redux === Context API

```
npm install redux react-redux 
npm install redux-devtools-extension
```
useReducer,useDispatch도 내장되어 있다.
