import { useDispatch } from "react-redux";
import { AppDispatch } from "../../core/reducers"
import { fetchJobs, select, actionJob } from "../../core/reducers/JobSlice"

export default function useUser() {
  const dispatch = useDispatch<AppDispatch>();

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
