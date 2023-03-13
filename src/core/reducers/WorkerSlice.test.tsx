import store, { RootState } from './index'
import { set, reset, fetchWorker } from "./WorkerSlice"

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
  errors: ""

}

export const initState: RootState = {
    worker,
    job
  }

describe('redux init state tests', () => {
  const state = store.getState().worker
  test('Should initially set worker to undefined', () => {
    expect(state.worker).toEqual(undefined)
  })

  test('Should initially set currentWorkerId to "7f90df6e-b832-44e2-b624-3143d428001f"', () => {
    expect(state.currentWorkerId).toEqual("7f90df6e-b832-44e2-b624-3143d428001f")
  })

  test('Should initially set isLoading to be true', () => {
    expect(state.isLoading).toEqual(true)
  })

  test('Should initially set isLoading to be undefined', () => {
    expect(state.errors).toEqual(undefined)
  })
})

describe('redux dispatch tests', () => {
  test('Should set new Worker ', () => {
    const worker = initState.worker.worker
    store.dispatch(set(worker))
    const state = store.getState().worker
    expect(state.worker).toEqual(worker)
  })

  test('Should reset to initStates', () => {
    const newWorker = {
      currentWorkerId: "7f90df6e-b832-44e2-b624-3143d428002f",
      worker: {
        address: {
          formattedAddress: "2 Downing St, Chicago, IL 60654, USA",
          zoneId: "America/New York"
        },
        email: "jone.rose@gmail.com",
        firstName: "Jone",
        lastName: "Flower",
        maxJobDistance: 30,
        phoneNumber: "5096290221",
        workerId: "7f90df6e-b832-44e2-b624-3143d428002f"
      },
      isLoading: false,
      errors: undefined
    }
    store.dispatch(set([newWorker]))
    setTimeout(() => {
      expect(state.worker).toEqual([newWorker])
    },500)

    store.dispatch(reset())
    const state = store.getState().worker
    setTimeout(() => {
      expect(state.worker).toEqual(initState.worker)
    },500)
  })

  test('Should fetch profile for the workerId', async () => {
    await store.dispatch(fetchWorker)
    
    const state = store.getState().worker
    setTimeout(() => {
      expect(state.worker).toEqual(initState.worker)
    },500)
  })
})