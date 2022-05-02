// import { createContext } from 'react'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'


// const Store = createContext() //Component <Store.provider>
const store = createStore(rootReducer,composeWithDevTools()) //Component X

const Store = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Store

