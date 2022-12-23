import { useReducer } from "react";
export const reducer =(state,action)=>{
    switch(action.type){
        case 'LOGIN-START':
             return {
                user:null,
                isfetching:true,
                error:false
             }
        case 'LOGIN-SUCCUSS':
            console.log('user is logged in ')
             return {
                user:action.payload,
                isfetching:false,
                error:false
             }
        case 'LOGIN-FAILED':
             return {
                user:null,
                isfetching:false,
                error:true
             }
        case 'LOGOUT':
             return {
                user:null,
                isfetching:false,
                error:false
             }
    }
}