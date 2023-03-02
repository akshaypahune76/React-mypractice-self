import { createContext } from "react";

const initialState = {
    userstate:'online',
    userdetails:{
        name:'user1',
        authentication:'true'}
}

const userStateContext = createContext (initialState);


export default userStateContext;