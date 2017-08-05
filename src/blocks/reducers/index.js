import { createStore, combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter.js';
import { reducer as formReducer } from 'redux-form';
import navigation from './navigation.js';

const rootReducer = combineReducers({
	form: formReducer,
	visibilityFilter,
	navigation
});


export default rootReducer;