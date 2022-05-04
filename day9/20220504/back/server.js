/*
    ORM(Object Relational Mapping)
        sequelize

    DBMS - Mysql,Oracle...

    mysql2
    mysql.createPool(접속정보)
    nodejs코드에서 -> mysql 접속

    SQL
    query('select * from board') -> DB로 요청

    ORM은 find() 만 호출하면 select등을 만들어준다.
    개발자 편의, 호환성이 좋다.

*/

// mysql2 , sequelize 설치
// npm install mysql2 sequelize

//DB연결
const {Sequelize,DataTypes} = require('sequelize')

//접속정보 sequelize
//인자값이 4개가 있습니다.
//1.데이터베이스명, 2.데이터베이스 계정명, 3.데이터베이스 패스워드, 4.Object(설정값)
// 4-1 host:localhost , 4-2 dialect:'mysql' , 4-3 
const sequelize = new Sequelize('example','taechan','9688',{
    host:'localhost',
    dialect:'mysql'
})

//사용

async function init(){
    try{
        comment()
        await sequelize.sync()
        //sync({force:true}) 설정을 넣으면 같은 이름의 테이블이있으면 지워버리고 다시 생성하게 한다.
        console.log('접속')

        insert()
        
        //여기에 코드작성하면 sequelize코드를 다 실행할수있음
    }catch(e){
        console.log('실패.')
    }
}

init()

function comment(){
    //model

    //sequelize.define() : create table 같은거
    //1번째 인자값:테이블명은 아닌데 테이블명을 적는다
    //2번째 인자값:객체형태,필드내용
    //3번째 인자값:객체형태,옵션정보 (charset=utf-8 등등)
    const Comment = sequelize.define('comment',{
        subject:{
            type:DataTypes.STRING(50), //varchar
            allowNull:false //not null
        },
        content:{
            type:DataTypes.STRING(100),
            allowNull:false
        }
    },{
        //옵션

    })
    return Comment
}

//insert문
const insert = async () => {
    const Comment = comment()
    Comment.create({subject:'wqewqe',content:'dwqdqwd'})
}


/*
then구문->
sequelize.sync()
.then(data=>{
    console.log('접속됨')
})
.catch(error=>{
    console.log('실패')
})
*/





