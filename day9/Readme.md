# Redux middleware

- redux Thunk
- redux Saga

# web_server
-

- Comment
- Counter

- 20220504
    - front
        - Store.js
    - back
        - 간단히 만들기

## front

npm init -y
npm install redux

mkdir reducers
cd reducers , index.js파일 생성

### redux
    applyMiddleware: [Function: applyMiddleware], -> 미들웨어 넣을때 사용
    bindActionCreators: [Function: bindActionCreators],
    combineReducers: [Function: combineReducers], -> reducer합치려고
    compose: [Function: compose], -> 미들웨어 넣을때 사용
    createStore: [Function: createStore], -> 상태,dispatch등등
    legacy_createStore: [Function: createStore]


- 미들웨어
 thunk
     10줄짜리,간단하고 설정쉽고 사용도 쉽지만 잘못짜면 터진다.
 saga
     설정도 귀찮고 사용도 귀찮지만 실수가 적어진다


## SAGA

npm install redux-saga

```
    CANCEL: [Getter],
    SAGA_LOCATION: [Getter],
    buffers: [Getter],
    detach: [Getter],
    END: [Getter],
    channel: [Getter],
    eventChannel: [Getter],
    isEnd: [Getter],
    multicastChannel: [Getter],
    runSaga: [Getter],
    stdChannel: [Getter],
    default: [Function: sagaMiddlewareFactory]

    - redux-saga/effects:
    {
        actionChannel: [Getter],
        all: ,
        apply: [Getter],
        call: ,
        cancel: [Getter],
        cancelled: [Getter],
        cps: [Getter],
        delay: [Getter],
        effectTypes: [Getter],
        flush: [Getter],
        fork: ,
        getContext: [Getter],
        join: [Getter],
        put: ,
        putResolve: [Getter],
        race: [Getter],
        select: [Getter],
        setContext: [Getter],
        spawn: [Getter],
        take: ,
        takeMaybe: [Getter],
        debounce: [Getter],
        retry: [Getter],
        takeEvery: ,
        takeLatest: ,
        takeLeading: ,
        throttle: 
    }
    [Getter]없는것:자주 사용.
```


## back
- mysql2 , sequelize 설치
npm install mysql2 sequelize