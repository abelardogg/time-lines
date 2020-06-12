import {combineReducers, createStore} from 'redux';
import undoable from './reducers/undoable';
import timeLineReducer from './reducers/timeline';

const initialState = {};
const undoableTimeline = undoable(timeLineReducer);
export const rootReducers = combineReducers({
    undoableTimeline
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
