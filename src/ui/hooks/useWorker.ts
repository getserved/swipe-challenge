import { useDispatch } from "react-redux";
import { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from "../../core/reducers"
import { fetchWorker } from "../../core/reducers/WorkerSlice"

export default function useUser() {
  const dispatch = useDispatch<AppDispatch>();

  return {
    // Fetch Worker by action
    fetchWorker: () => {
      dispatch(fetchWorker())
    }
  }
}
