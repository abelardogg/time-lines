import {combineReducers, createStore} from 'redux';
import undoable from './reducers/undoable';
import timeLineReducer from './reducers/timeLine';

const initialState = {};
const undoableTimeLine = undoable(timeLineReducer);
export const rootReducers = combineReducers({
    undoableTimeLine
});

export function configureStore(initialState = {}){
    const store = createStore(rootReducers, initialState);
    return store;
}

export const store = configureStore(initialState); 

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

//unsubscribe()
