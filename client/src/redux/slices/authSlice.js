import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSignin: localStorage.getItem("isSignin") || false,
    role: localStorage.getItem("role") || '',
    data:localStorage.getItem("data") || {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{

    }
})

export default authSlice.reducer