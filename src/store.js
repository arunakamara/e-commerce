import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './components/CartSlice';
import searchQueryReducer from './components/searchQuerySlice';
import categorySelectedReducer from './components/categorySelectedSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        categorySelected: categorySelectedReducer,
        searchedQuery: searchQueryReducer,
        
    }
})

export default store;