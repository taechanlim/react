import React,{useState,useEffect} from 'react'

const Effect = () => {
    const [count,setCount] = useState(0)

    //useEffect
        //class component일때는 아래 3개를 따로써야하는데 useEffect는 다 포함한다.
        //componentDidMount
        //componentDidUpdate
        //componentWillUnmout
    //인자값 총 2개
    /*
        1.callback 함수 (필수값)
        2.deps -> array (선택사항) 
        //state나 props값을 넣으면 그 값의 변화가 감지되면 1번인자의 콜백함수를 계속 실행
        //ComponentDidUpdate역할
    */
    useEffect( ()=>{
        document.title = '타이틀 바꾸는거'
        return ()=>{
            // console.log('나 종료됨')
        }//ComponentDidMount
    },[count] )

    /*
        프론트  로그인 기능 예제 만들어보기
    */
    return( 
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ ()=>{ setCount(count+1) } }>
                Click me
            </button>
        </div>
    )
}

export default Effect
