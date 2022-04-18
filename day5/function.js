//고차함수

//선언 , 호출

function aa(){
    console.log('hello world!')
} //선언

aa() //호출

const 더하기 = (a,b) => a+b
const 함수 = (callback,a,b) => callback(a,b)
//선언

함수(더하기,a,b)
//호출

function handleClick(){
    console.log('hello world!')
}

const btn = document.querySelector('#btn')

btn.addEventListener('click',handleClick)


function 돌아라(value){
    function init(){
        console.log(value)
    }
    return init
}

setTimeout(돌아라('hihi'),1000)