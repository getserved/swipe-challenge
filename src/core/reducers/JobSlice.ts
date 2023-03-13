import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import type { Job } from "../types"
import { BASE_URL } from "../../utils/constants"
import { RootState } from '.'

const NORMAL_ERROR = "There's an error when matching jobs"

interface JobState {
  matchedJobs: Job[],
  selectedJob: Job | undefined,
  isLoading: boolean,
  errors: string | undefined
}

// Init states for Job
const initialState: JobState = {
  matchedJobs: [],
  selectedJob: undefined,
  isLoading: false,
  errors: undefined
};

// CreateAsyncThunk for async function to fetch data
export const fetchJobs = createAsyncThunk("job/match", async (_:void, { getState, rejectWithValue }) => {
  try{
    const state = (getState() as RootState).worker
    if(!state.currentWorkerId) return rejectWithValue("No Workder ID Found") 

    const res = await fetch(
      `${BASE_URL}/worker/${state.currentWorkerId}/matches`,
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

// CreateAsyncThunk for async function to fetch data
export const actionJob = createAsyncThunk("job/action", async (action: string, { getState, rejectWithValue }) => {
  try{
    const state = (getState() as RootState)
    const worker = state.worker
    const job = state.job
    if(!worker.currentWorkerId) return rejectWithValue("No Workder ID Found") 
    if(!job.selectedJob?.jobId) return rejectWithValue("No Job ID Found") 

    const res = await fetch(
      `${BASE_URL}/worker/${worker.currentWorkerId}/job/${job.selectedJob?.jobId}/${action}`,
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


// Create Slice for planets
export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    // reset
    reset: () => initialState,

    // action to set new matchedJobs
    set: (state, action) => {
      state.matchedJobs = action.payload
    },

    // action to select from matched jobs
    select: (state, action) => {
      const jobId = action.payload
  
      if(jobId)
        state.selectedJob = state.matchedJobs.filter(job => job.jobId === jobId)[0]
    }
  },
  // All extra reducers lie in here
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        const data = action.payload
        state.matchedJobs = data
        state.isLoading = false
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        if (action.payload) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
          state.errors = (action.payload as string)
        } else {
          state.errors = action.error.message
        }
        state.isLoading = false
      })
      .addCase(actionJob.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(actionJob.fulfilled, (state, action) => {
        const data = action.payload
        if(state.selectedJob) {
          switch (action.meta.arg) {
            case 'accept':
              state.selectedJob.success = data.success
              break;
            case 'reject':
              state.selectedJob.success = data.success? false: state.selectedJob.success
              break;
          }

          if(!data.success) {
            state.selectedJob.errors = data.message
          } else {
            state.selectedJob.errors = undefined;
          }
        }
        state.isLoading = false
      })
      .addCase(actionJob.rejected, (state, action) => {
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

export const { set, select, reset } = jobSlice.actions

export default jobSlice.reducer