import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'


export const store = configureStore({
  reducer: { cnt: counterSlice.reducer }
})

export type AppDispatch = typeof store.dispatch
export type RootState =  ReturnType<typeof store.getState>
