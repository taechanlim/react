import moment from "moment"

function currentTime(){
    return moment().format('H:m:s')
}

const div = document.createElement('div')
document.body.appendChild(div)
setInterval(()=>{
    div.innerHTML = currentTime()
},1000)

// npm install moment
// index3.js + moment => ???.js
// index3.html src => ???.js

// npm install -D webpack webpack-cli
// 사용법 :  npx webpack-cli ./src/index3.js