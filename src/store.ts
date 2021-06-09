import { combineReducers,applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';

import { TopicsReducer } from './features/topics/store'

const rootReducer =  combineReducers({
    topics: TopicsReducer,
    })



const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store