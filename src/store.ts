import { combineReducers,applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';

import { DevicesReducer } from './features/mqttDevicesList/store'

const rootReducer =  combineReducers({
    devices: DevicesReducer,
    })



const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store