# webpack



nodejs
npm 패키지를 쉽게 설치 가능하다.

react
react-dom
babel

 ```
 npm init -y
 npm install react react-dom
 npm install -D webpack webpack-cli
 ```

 >webpack.config.js파일 생성

 디렉토리 생성
 >mkdir src , dist

 template > index.html 생성
 *기본적인 html 내용과 div , script 부분 작성*

 src디렉토리 안에서 index.jsx 생성

 webpack , babel 연결해주는 라이브러리
 옛날 브라우저에서도 구동할수있게 코드를 바꿔주는 바벨이 필요,
 JSX를 사용할수있는 바벨이 필요합니다


 **webpack , babel 연결해주는 라이브러리**
 ```
 npm install -D babel-loader
 ```

**옛날 브라우저에서도 구동할수있게 코드를 바꿔주는 바벨**
 ```
 npm install -D @babel/preset-env
 ```

 **JSX를 사용할수있는 바벨**
 ```
 npm install @babel/preset-react
 ```

 ```
 npm install -D babel-loader @babel/preset-env @babel/preset-react
 ```


# devServer
1. 웹서버를 구축을 해준다.
src폴더안에서 코드가 수정됨을 감지하면 서버를 재시작해주고 bundle을 다시 만들어줍니다.
(개발할때만 사용)

```
npm install -D webpack-dev-server
```

2. 플러그인
```
npm install -D @pmmmwh/react-refresh-webpack-plugin
npm install -D react-refresh

```