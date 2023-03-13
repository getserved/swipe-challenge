import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { Worker } from "../types"
import { BASE_URL } from "../../utils/constants"
import { RootState } from '.'

const NORMAL_ERROR = "There's an error when fetching worker"

interface WorkerState {
  currentWorkerId: string | undefined,
  worker: Worker | undefined,
  isLoading: boolean,
  errors: string | undefined
}

// Init states for Sliders
const initialState: WorkerState = {
  currentWorkerId: "7f90df6e-b832-44e2-b624-3143d428001f", 
  worker: undefined,
  isLoading: true,
  errors: undefined
};

// CreateAsyncThunk for async function to fetch data
export const fetchWorker = createAsyncThunk("worker/fetch", async (_:void, { getState, rejectWithValue }) => {
  try{
    const state = (getState() as RootState).worker

    if(!state.currentWorkerId) return rejectWithValue("No Workder ID Found") 
    
    const res = await fetch(
      `${BASE_URL}/worker/${state.currentWorkerId}/profile`,
      {
        method: "GET"
      }
    )
    const data = await res.json();
    
    if(res.status >= 400 && res.status < 600) {
      return rejectWithValue(data.errormessage || NORMAL_ERROR)
    }
    
    return data
  // error handling for exceptions
  } catch (e: any) {
    return rejectWithValue(e.message || NORMAL_ERROR)
  }
   
})

// Create Slice for worker
export const workerSlice = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    // reset
    reset: () => initialState,

    // action to set new vehicles
    set: (state, action) => {
      state.worker = action.payload
    }
  },
  // All extra reducers lie in here
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorker.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchWorker.fulfilled, (state, action) => {
        const data = action.payload
        state.worker = data
        state.currentWorkerId = state.worker?.workerId
        state.isLoading = false
      })
      .addCase(fetchWorker.rejected, (state, action) => {
        if (action.payload) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
          state.errors = (action.payload as string)
        } else {
          state.errors = action.error.message
        }
        state.isLoading = false
      })
  }
})

export const { set, reset } = workerSlice.actions

export default workerSlice.reducer