const initialState = {
    number:0
}

const Up = "Counter/Up"
const Down = "Counter/Down"

export const up = () => (
    {type:Up}
)
export const down = () => (
    {type:Down}
)

const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case Up:
            return{
                ...state,
                number:state.number+1
            }

        case Down:
            return{
                ...state,
                number:state.number-1
            }
        
        default:
            return state
    }
    
}

export default rootReducer