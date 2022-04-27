const defaultValue = {
    userid:'2332',
    password:'1233'
}
//위 객체를 아래로 변환하기
// input:{
//     userid:{
//         value:defaultValue.userid,
//         onChange
//     },
//     password:{
//         value:defaultValue.password,
//         onChange
//     }
// }

//1.defaultValue -> key값만 가져오기, Object.keys() 사용.


//console.log(Object.keys(defaultValue))

//input 객체에 userid={} 넣기
const input = {}
const keys = Object.keys(defaultValue)
for(let i=0; i<keys.length; i++){
    //console.log(keys[i])

    //input['userid'] = {} -> 이렇게하면 userid={} 이형태가 나온다
    input[keys[i]] = {
        value:defaultValue[keys[i]]
    }
    //console.log(input) // ->  { userid: { value: '2332' }, password: { value: '1233' } }

    
}


    //멋있게 짜려면 reduce라는 배열함수 사용
    //Array.reduce()
    //매개변수 2개 -> 1.콜백 ,2.초기값(배열,객체 등등)
    //콜백안의 매개변수 1-1.이전값,1-2.현재값
const result = keys.reduce((acc,v)=>{
    // console.log(acc,v)
    acc[v] = {value:defaultValue[v]}
    return acc
},{})
console.log(result) // -> { userid: { value: '2332' }, password: { value: '1233' } }

//DB에서 이런 데이터가 왔다고 가정하고->
const posts = [
    {id: 1, category: "frontend", title: "All About That Sass"},
    {id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips"},
    {id: 3, category: "frontend", title: "Sanitizing HTML: Going antibactirial on XSS attacks"}
]


const posts2 =  []

const data = posts.reduce( (acc,post)=> [...acc,Object.values(post)], [Object.keys(posts[0])])
console.log(data)



