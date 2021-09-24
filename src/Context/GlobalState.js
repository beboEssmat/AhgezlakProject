import React, {createContext, useReducer, useEffect} from "react";
import axios from 'axios';

import AppReducer from './AppReducer'

const initialState ={
    goverments: []
   
};
 

export const GlobalContext =createContext(initialState);
  

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    //Actions
    useEffect(() => {
        axios.get(`http://localhost:8000/api/governorate`).then( (res) => {
            dispatch({
                type:"GET_GOVERMENT",
                paylode:res.data
            })
        })
     },[])


    const removeUser = (id) => {
        axios.get(`http://localhost:8000/api/governorateDestroy/${id}`)
      
        dispatch({
            type:"REMOVE_GOVERMENT",
            paylode:id
        })
    }

    const addUser = (user) => {
        axios.post(`http://localhost:8000/api/governorate`,user)
        dispatch({
            type:"ADD_GOVERMENT",
            paylode:user
        })
    }

    const editUser = (user) => {
         axios.post(`http://localhost:8000/api/governorateUpdate`, user)

        // console.log(user.id)
        dispatch({
            type:"EDIT_GOVERMENT",
            paylode:user
        })
    }


    return (
        <GlobalContext.Provider value={{
            goverments:state.goverments,
             removeUser,
             addUser, 
             editUser
             }}>
            {children}
        </GlobalContext.Provider>
    )
}