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
        }
    }
})

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;