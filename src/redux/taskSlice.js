import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: nanoid(),
                title: action.payload.task
            }
            state.push(newTask)
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
        updateTask: (state, action) => {
            state.map(item => {
                if (item.id == action.payload.id) item.title = action.payload.title
            })
        }
    }
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;