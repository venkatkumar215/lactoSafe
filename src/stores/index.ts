import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

const store = configureStore({
reducer:{}
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;

