import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./state/cartSlice";
import loginSlice from "./state/loginSlice";
import theme from './theme/themeSlice'

const store = configureStore({
    reducer:{
        cart: cartSlice,
        theme,
        login: loginSlice
        
    }
})

export default store