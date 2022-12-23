import { createContext, useEffect, useReducer } from "react";
import {reducer} from './reducer'
export const Context = createContext()

const initialState = {
            user: JSON.parse(localStorage.getItem("user")) || null,
            isFetching: false,
            error: false,
        }

export const UserContext = ({children})=>{

    const [state, dispatch]= useReducer(reducer,initialState)
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user])

    return(<Context.Provider
                    value= {
                        {user:state.user,
                        isfetching:state.isfetching,
                        error: state.error,
                        dispatch}
                    }>
                    {children}
           </Context.Provider>)
}
