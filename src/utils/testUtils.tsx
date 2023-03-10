import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { setupStore } from '../core/reducers'
import type { AppStore, RootState } from '../core/reducers'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

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

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState ={
      worker,
      job
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}