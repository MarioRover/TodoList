import { createSlice } from "@reduxjs/toolkit";
import { createTaskAction, updateTaskAction } from "./taskActions";

const initialState = {
    list: {}
}

const taskSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        deleteTask(state, { payload }) {

        },
    },
    extraReducers: (builder) => {
        builder.addCase(createTaskAction.fulfilled, (state, {payload}) => {
            state.list[payload.id] = payload
        }),
        builder.addCase(updateTaskAction.fulfilled, (state, {payload}) => {
            state.list[payload.id] = payload
        })
    }
})

export const { createTask } = taskSlice.actions
export default taskSlice.reducer