import {createSlice} from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
	name: 'todos',
	initialState: {
		tasks: [],
		trash: [],
	},
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload)
		},
		backTask: (state, action) => {
			const [removedTrash] = state.trash.splice(action.payload, 1)
			state.tasks.push(removedTrash)
		},
		removeTask: (state, action) => {
			const [removed] = state.tasks.splice(action.payload, 1)
			state.trash.push(removed)
		},
		removeTrash: (state, action) => {
			state.trash.splice(action.payload, 1)
		},
		removeAll: (state, action) => {
			state.trash.splice(action.payload, 1000000)
		}, 
	}
})

export const {addTask, removeTask, removeTrash, backTask, removeAll} = tasksSlice.actions