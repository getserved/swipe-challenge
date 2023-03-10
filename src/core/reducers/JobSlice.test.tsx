import store, {setupStore, RootState} from './index'
import { set, reset, fetchJobs, actionJob, select } from "./JobSlice"

const worker = {
  currentWorkerId: "7f90df6e-b832-44e2-b624-3143d428001f",
  worker: {
    address: {
      formattedAddress: "1 Downing St, Chicago, IL 60654, USA",
      zoneId: "America/Chicago"
    },
    email: "jim.rose@gmail.com",
    firstName: "Jim",
    lastName: "Rose",
    maxJobDistance: 20,
    phoneNumber: "5096290220",
    workerId: "7f90df6e-b832-44e2-b624-3143d428001f"
  },
  isLoading: false,
  errors: undefined
}

const job = {
  matchedJobs: [],
  selectedJob: undefined,
  isLoading: false,
  errors: undefined
}

export const initState: RootState = {
    worker,
    job
  }

describe('redux init state tests', () => {
  const state = store.getState().job
  test('Should initially set worker to undefined', () => {
    expect(state.matchedJobs).toEqual([])
  })

  test('Should initially set selectedJob to undefined', () => {
    expect(state.selectedJob).toEqual(undefined)
  })

  test('Should initially set isLoading to be false', () => {
    expect(state.isLoading).toEqual(false)
  })

  test('Should initially set isLoading to be undefined', () => {
    expect(state.errors).toEqual(undefined)
  })
})

describe('redux dispatch tests', () => {
  test('Should set new matchedJobs ', () => {
    const matchedJobs = initState.job.matchedJobs
    store.dispatch(set(matchedJobs))
    const state = store.getState().job
    expect(state.matchedJobs).toEqual(matchedJobs)
  })

  test('Should reset to initStates', () => {
    const state = store.getState().job
    const newMatchedJob = {}
    store.dispatch(set([newMatchedJob]))
    setTimeout(() => {
      expect(state.matchedJobs).toEqual([newMatchedJob])
    },500)

    store.dispatch(reset())
    
    setTimeout(() => {
      expect(state.matchedJobs).toEqual(initState.job)
    },500)
  })

  test('Should select a job in matchedJobs', async () => {
    const state = store.getState().job
    const mockJobId = '5775d8e18a488e6c5bb08c13'
    
    await store.dispatch(fetchJobs)
    await store.dispatch(select(mockJobId))
    setTimeout(() => {
      expect(state.selectedJob?.jobId).toEqual(mockJobId)
    },500)

    store.dispatch(reset())
    
    setTimeout(() => {
      expect(state.matchedJobs).toEqual(initState.job)
    },500)
  })

  test('Should fetch matched Jobs have two jobs', async () => {
    await store.dispatch(fetchJobs)
    
    const state = store.getState().job
    setTimeout(() => {
      expect(state.matchedJobs.length).toEqual(2)
    },500)
  })

  test('Should fetch action with accept', async () => {
    const state = store.getState().job
    const mockJobId = '5775d8e18a488e6c5bb08c13'
    
    await store.dispatch(fetchJobs)
    await store.dispatch(select(mockJobId))
    await store.dispatch(actionJob('accept'))

    setTimeout(() => {
      expect(state.selectedJob?.success).toEqual(true)
    },500)
  })

  test('Should fetch action with reject', async () => {
    const state = store.getState().job
    const mockJobId = '5775d8e18a488e6c5bb08c13'
    
    await store.dispatch(fetchJobs)
    await store.dispatch(select(mockJobId))
    await store.dispatch(actionJob('reject'))

    setTimeout(() => {
      expect(state.selectedJob?.success).toEqual(false)
    },500)
  })
})