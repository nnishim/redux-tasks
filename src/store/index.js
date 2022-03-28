import {configureStore} from '@reduxjs/toolkit'
import { tasksSlice } from './reducers/task.reducer'

export const store = configureStore({
	reducer: {
		tasks: tasksSlice.reducer
	}
})