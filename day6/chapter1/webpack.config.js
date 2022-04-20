const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    //name: 이 webpack이름 설정
    name:'react-project',
    mode:'development', //개발모드
    devtool:'eval',

    resolve:{
        extensions:['.js','.jsx','.css'] //확장자 설정
    },

    //entry:내가앞으로 번들할 파일들
    entry:{
        app:['./src/index'] //최상단의 파일만 가져오면 그안의 require파일들은 자동으로 따라온다
    },

    module:{
        rules:[{
            test:/\.jsx?/, //(/\.jsx?/ <-정규식으로 js거나jsx일때라는 뜻
            loader:'babel-loader', //babel과webpack을 연결해주는 라이브러리
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['last 2 chrome versions','> 5% in KR'] // google에 browserslist검색 ,> 5% in KR ->한국에서 5%이상점유율가진브라우저
                        },
                        debug:true,
                    }], //옛날브라우저에서도 환경에맞게 실행시켜주는애
                    '@babel/preset-react' //JSX를 사용하기 위해
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
        },{
            test:/\.css$/,
            // use:[{
            //     loader:MiniCssExtractPlugin.loader,
            //     option:{
            //         esModule:false,
            //     }
            // },
            // 'css-loader',
            // ]
            use:[MiniCssExtractPlugin.loader,'css-loader'] //option넣으려면 주석처리부분처럼 작성
        }]
    }, //내보낼때 같이 내보내는것
    

    plugins:[
        new webpackPlugin(),
        new MiniCssExtractPlugin({ filename:'style.css' }) //실질적으로 파일생성해주는역할
    ],

    //output:내보낼 파일의 위치와 파일명 설정.
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath:'/dist',
    },
    devServer:{
        static:{
            directory:path.join(__dirname,'public'),
        },
        compress:true,
        port:3000,
        hot:true,
        historyApiFallback:true, //새로고침
    }
}