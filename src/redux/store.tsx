import {combineReducers, configureStore} from '@reduxjs/toolkit';

const initialState:any = {
    isLogedIn:false
}

const loginReducer: any = (state = initialState, action: any ) => {
    if(action.type === "LOGIN"){
        state.isLogedIn = action.payload
    }
   return state
}

const rootReducer:any = combineReducers({
    loginReducer:loginReducer
})

const store = () => configureStore ({
    reducer:{
        loginReducer:loginReducer
    }

})

export default store;