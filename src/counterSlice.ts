import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {store} from './store';


interface Num {
    status: string
    value: number
    error: string | null
  }
  
  const initialState: Num = {
    status: 'idle',
    value: 0,
    error: null
  }
  
  const sleep = () => new Promise((resolve) => {
    setTimeout(() => resolve(''), 3000)
  })

  
 export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      incremented: state => { state.value += 1 },
      decremented: state => { state.value -= 1 },
      idle: state => { state.status = 'idle' },
      loading: state => { state.status = 'loading' },
      finished: state => { state.status = 'finished' },
      failed: (state, data) => { 
        state.status = 'failed'
        state.error = data.payload
     }
    },
    extraReducers: builder => {
      builder
        .addCase(sleep3secIncOneThunk.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(sleep3secIncOneThunk.fulfilled, (state, action) => {
          // state.value = state.value + 1;
          state.status = 'finished'
        }).addCase(sleep3secIncOneThunk.rejected, (state) => {
          state.status = 'failed';
        });
    }
  })
  
  export const sleep3secIncOneThunk = createAsyncThunk(
    'counter/sleep3sec',
    async () => {
      await sleep();
      store.dispatch(counterSlice.actions.incremented())
    }
  )