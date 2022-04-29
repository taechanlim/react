# Setting
npx create-react-app [디렉토리명]
 > 다 받아지면

cd [디렉토리명]
npm run start

npx create-react-app [디렉토리명]
webpack,babel,react,react-dom ....등등 설치됩니다.

# Function Component
- hook 

```javascript
-클래스 컴포넌트 :
class App extends React.Component{

}
-함수형 컴포넌트 :
function App(){

}
const App = () => {

}
//함수형컴포넌트
//상태를 만들수없었다,생명주기를 할수없었다.
//이것을 만들수있게 해주는것이 Hooks 라는 함수모음이다. (use)
//useState , useReducer , useContext , useCallback , useMemo , useEffect 등등
//use함수는 기본적으로 함수형컴포넌트에서만 작동한다.
```

```javascript
function a(){
    console.log('hello world')
}
a()

function A(){
    return <div>hello world</div>
}
<A />

//class문법 : 객체를 만듬
class App extends React.Component{
    render(){
        return(
            <span>
                hello world
                <button className="btn">버튼1</button>
                <button className="btn">버튼2</button>
            </span>
        )
    }
}
//JSX는 Javascript이다

{
    type:'span',
    props:{
        classNama:'color',
        children:[
            'hello world',
            {
                type:'button',
                props:{
                    className:'btn'
                },
                type:'button',
                props:{
                    className:'btn'
                }
            }
            ]
    }
}
```

# 커스텀 훅
# class 컴포넌트하면서 힘들었던점 this 등등 안해도된다.

디렉토리 구성.
- src
    - Components
        - State
            - State.jsx(useState)
        - effect
            - effect.jsx(useEffect)
        - form
            - join
        - context
        - reducer
        - callback
        - memo


# 댓글 구현

- Comment 컴포넌트 (전역상태)
    CommentLayout
        CommentForm
        CommentList

* 구성 
- Comment
    - api
        CommentAPI : http://localhost:3001
    - Store
        Context.jsx
        Reducer.jsx

    Comment.jsx
    CommentLayout.jsx
    CommentForm.jsx
    CommentList.jsx

# 기본세팅
    create-react-app
    Context 에 대해서 먼저 작업 시작해야함.
    

