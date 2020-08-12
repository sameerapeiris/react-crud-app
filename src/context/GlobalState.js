import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState ={
    users: [
        {id: 1 , name: 'sameera'},
        {id: 2 , name: 'danushka'},
        {id: 3 , name: 'peiris'}
    ]
}
// Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value ={{
            users: state.users
        }}>
    {children}
        </GlobalContext.Provider>
    )

}