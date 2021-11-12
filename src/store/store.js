import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
import { bitcoinReducer } from '../store/reducer/bitcoin.reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    bitcoinModule : bitcoinReducer,
})
export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))) //Passing the reducer

