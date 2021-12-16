import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: {}
}

const taskSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        addTask(state, { payload }) {

        },
        deleteTask(state, { payload }) {

        },
    }
})

export default taskSlice.reducer