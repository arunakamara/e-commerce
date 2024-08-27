import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './components/CartSlice';
import categorySelectedReducer from './components/categorySelectedSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        categorySelected: categorySelectedReducer
    }
})

export default store;