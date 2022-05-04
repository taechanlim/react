function* gen(){
    console.log(1)
    yield
    console.log(2)
    yield
    console.log(3)
    yield
}

const a = gen()
console.log(a)

a.next()
console.log(a)

//yield에서 실행이 멈춘다 next를 사용해서 다음으로 넘겨주는 방법.

function* gen2(){
    while(true){
        yield '무한'
    }
}
const aa = gen2()
aa.next()
console.log(aa)

function* middle(){
    console.log('나이제 이함수를 바라볼거야')
    while(true){
        const action = yield
        if(action.type === 'abc'){
            console.log('하이 abc')
        }
    }
}
const ccc = middle()
ccc.next('sad')

function* gen3(){
    let a = yield;
    console.log(a)
    yield 2
    yield 3
    yield 4
    return 5
}
const dd = gen3()
dd.next()