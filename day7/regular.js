const re = /world/  
const source = 'Hello world Hello world'
const result = re.test(source)    //source에 re값이 있나 확인
console.log(result) //true 반환

const result2 = source.replace(/world/g,'hihi') //world라는 글자를 hihi로 바꿈 (g를 붙여야 replaceAll효과)
console.log(result2)