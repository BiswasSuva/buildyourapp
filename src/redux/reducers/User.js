import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { getUser } from "../../api/authapi";

export const fetchuser = createAsyncThunk("user/fetchuser",async()=>{
  
       const response = await getUser()
       if(response&&response.data){
        return response.data
       }
       return null;
    
})
export const userSlice = createSlice({
    name:"user",
    initialState:{
        loading:false,
        loginStatus:false,
        userData:null,
        path:"/modules"
    },
    reducers:{
        setUserdata:(state,action)=>{
            state.loginStatus=true
            state.userData=action.payload
        },
        removeUserdata:(state,action)=>{
            state.loginStatus=false
            state.userData=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchuser.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchuser.fulfilled,(state,action)=>{
            state.loading=false
            state.loginStatus=action.payload?true:false
            state.userData=action.payload
        })
        builder.addCase(fetchuser.rejected,state=>{
            state.loading = false
            state.userData=null
            state.loginStatus=false
        })
    }


})
export const {setUserdata,removeUserdata} = userSlice.actions

export default userSlice.reducer

