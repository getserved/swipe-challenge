import { useDispatch } from "react-redux";
import { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from "../../core/reducers"
import { fetchJobs, select, actionJob } from "../../core/reducers/JobSlice"
import { useAppSelector } from ".";

export default function useUser() {
  const dispatch = useDispatch<AppDispatch>();

  const {errors} = useAppSelector(state => state.job)

  return {
    // fetch jobs by action
    fetchJobs: () => {
      dispatch(fetchJobs())
    },

    // select job by jobId
    select: (jobId: string) => {
      dispatch(select(jobId))
    },

    // handle accept action
    accept: async () => {
      dispatch(actionJob('accept'))
    },

    // handle reject action
    reject: async () => {
      dispatch(actionJob('reject'))
    }
  }
}
