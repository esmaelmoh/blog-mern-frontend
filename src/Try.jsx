import { useContext, useReducer } from "react";

import React from 'react'
import { Context, UserContext } from "./context/context";

const initialState = {
    name:'esmael',
    age:20,
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
            return  {...state,
                name: 'mubarek'
            }
           
    }
}
const Try = () => {
    const [state, dispatch]= useReducer(reducer,initialState)
    const {user} = useContext(Context)
    console.log(user)
  return (
    <div>
        <h1>{state.name}</h1>
        <h1>{state.age}</h1>
        <button onClick={()=>dispatch({type:'CHANGE_NAME'})}>Change name</button>
    </div>
  )
}

export default Try