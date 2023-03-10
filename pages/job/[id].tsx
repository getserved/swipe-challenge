import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import JobRoute from "../../src/routes/JobRoute";
import store from "../../src/core/reducers";
import Layout from '../../src/ui/components/Layout/Layout'

import useJob from "../../src/ui/hooks/useJob"

export default function Job() {

    const router = useRouter();
    const { id: jobId } = router.query;

  return (
      <Provider store={store}>
        <Layout>
          <JobRoute jobId={jobId?.toString()}/>
        </Layout>
      </Provider>
  );
}