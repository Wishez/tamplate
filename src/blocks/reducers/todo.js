// import * as todoTests from './../tests/TodoTests.sjs';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const todo = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) return state;

			return {
				...state, 
				completed: !state.completed
			}
		case 'REMOVE_TODO':
			return [
				...state.slice(0, action.id),
				...state.slice(action.id + 1)
			];
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		case 'REMOVE_TODO':
			return todo(state, action);
		default:
			return state;
	}	
};

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default: 
			return state;
	}
};

import { combineReducers } from 'redux';


const todosApp =  combineReducers(
	todos,
	visibilityFilter 
);

import { createStore } from 'redux';

const store = createStore(todosApp);


console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispathccing ADD_TODO.');;
store.dispatch({
	type: 'ADD_TODO',
	id: 0,
	text: 'Learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispathccing ADD_TODO.');;
store.dispatch({
	type: 'ADD_TODO',
	id: 1,
	text: 'Change State'
});

console.log('Dispathccing ADD_TODO.');;
store.dispatch({
	type: 'ADD_TODO',
	id: 2,
	text: 'Remove Second Todo'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispathccing REMOVE_TODO.');;
store.dispatch({
	type: 'REMOVE_TODO',
	id: 1
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispathccing TOGGLE_TODO.');;
store.dispatch({
	type: 'TOGGLE_TODO',
	id: 2
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');


console.log('Dispathccing SET_VISIBILITY_FILTER.');;
store.dispatch({
	type: 'SET_VISIBILITY_FILTER',
	filter: 'SHOW_COMPLETED'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');



const testRemoveTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Test Add Todo',
			completed: true
		}
	];

	const action = {
		type: 'REMOVE_TODO',
		id: 1
	};
	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);
}

const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Test Add Todo',
			completed: true
		},
		{
			id: 2,
			text: 'Test Toggle Todo',
			completed: false
		}
	];	

	const action = {
		type: 'TOGGLE_TODO',
		id: 1	
	};

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Test Add Todo',
			completed: true
		},
		{
			id: 2,
			text: 'Test Toggle Todo',
			completed: true
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		todos(stateBefore, action)
	).toEqual(sateAfter);

};

const testAddTodo = () => {
	const stateBefore = [];
	const action = {
		type: 'ADD_TODO',
		id: 0,
		text: 'Learn Redux'
	};

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);
};

testAddTodo();

console.log('Todo Tests were completed!');
export default todo;