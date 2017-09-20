import { combineReducers } from 'redux';
import { cards } from './cards';
import { modals } from './modals';

const rootReducer = combineReducers({
    cards,
    modals
});

export default rootReducer