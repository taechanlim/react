import React,{useState,createContext,useContext,useMemo} from 'react'


export const Global = createContext() // createContext를 사용하면 Global이라는 컴포넌트가 된다.

const D = () => {

    const {name,setName} = useContext(Global)  //useContext로 Global만 가져오면 어디서든 props처럼 가져올수있다.

    return(
        <>
            hello Component!
            이름: {name}
            <button onClick={()=>{setName('tctctc')}}>이름바꾸기</button>
        </>
    )
}

const C = ({name}) => {
    return(
        <>
            <D name={name} />
        </>
    )
}

const B = ({name}) => {
    return(
        <>
            <C name={name} />
        </>
    )
}

const A = ({name}) => {
    return(
        <>
            <B name={name} />
        </>
    )
}



const Context = () => {
    const [name,setName] = useState('chan')

    // const obj = {
    //     name:name,
    //     setName:setName
    // }

    const obj = useMemo( ()=>{
        return {
            name,
            setName
        }
    }, [name] )
    

    return(
        <>
            <Global.Provider value={obj}>
                <A name={name} />
            </Global.Provider>  {/* 전역 상태로 만드는것 */}
        </>
    )
}

export default Context