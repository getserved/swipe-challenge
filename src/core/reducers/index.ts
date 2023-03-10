import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import WorkerSlice from './WorkerSlice';
import JobSlice from './JobSlice';

const store = configureStore({
  reducer: {
    worker: WorkerSlice,
    job: JobSlice,
  },
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: {
      worker: WorkerSlice,
      job: JobSlice,
    },
    preloadedState
  })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof setupStore>

export default store;