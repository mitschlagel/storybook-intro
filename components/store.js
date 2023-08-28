// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'


const defaultTasks = [
    { id: 1, title: 'Task 1', state: 'TASK_INBOX' },
    { id: 2, title: 'Task 2', state: 'TASK_INBOX' },
    { id: 3, title: 'Task 3', state: 'TASK_INBOX' },
    { id: 4, title: 'Task 4', state: 'TASK_INBOX' },
];

const TaskBoxData= {
    tasks: defaultTasks,
    status: 'idle',
    error: null
};

const TasksSlice = createSlice({
    name: 'taskbok',
    initialState: TaskBoxData,
    reducers: {
        updateTaskState: (state, action) => {
            const {id, newTaskState } = action.payload;
            const task = state.tasks.findIndex((task) => task.id === id);
            if (task >= 0) {
                state.tasks[task].state = newTaskState;
            }
        },
    },
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer,
    },
});

export default store;