import { useCallback,useEffect,useState,useMemo } from "react";

//useCallback은 함수를 담을때 사용하고 useMemo는 변수를 담을때 사용(저장)

const Callback = () => {
    const [hi,setHi] = useState(0)
    const [bye,setBye] = useState(0)

    const hiClick  = useCallback(()=>{
        console.log('hello')
        setHi(hi+1)
    },[hi]) //hi가 바뀔때마다 저장

    const byeClick  = useCallback(()=>{
        console.log('hello')
        setBye(hi+1)
    },[bye])

    // 메모리에 넣는다
    // 컴포넌트 많을때 쓸데없는 리랜더링이 많아서 점점 과부하 걸리는데 이를 해결하기위해 사용해야함

    const result = useMemo( () => 10 , [])

    return(
        <>
            {hi} <br />
            {bye} <br />
            <button onClick={hiClick} >하이</button>
            <button onClick={byeClick} >바이</button>
        </>
    )
}

export default Callback