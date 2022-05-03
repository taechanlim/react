const initialState = {
    mainCd:[ 
        {  
            idx:0,
            name:'board',
            subCate:[
                {
                    idx:0,
                    name:'notice'
                },
                {
                    idx:1,
                    name:'freeboard'
                },
            ]
        }
    ]
}

const ADD = 'CATEGORY/ADD'

const SUBCATE_ADD = (payload) => ({
    type:ADD,
    payload
})


const category = (state=initialState,action) =>{
    switch(action.type){
        case ADD:
            return{
                ...state,
                mainCd:[{
                    ...state.mainCd[0],
                    subCate:[...state.mainCd[0].subCate,action.payload]
                }]
            }
        default:
            return state
    }
}



module.exports = {category,SUBCATE_ADD}