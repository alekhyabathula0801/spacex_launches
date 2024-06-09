import { isEmpty, uniqBy } from "lodash-es";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetch_launches_list } from "../../../api/launches";
import {
  fetchLaunches,
  setIsFetchingLaunches,
  setLaunchesData,
  setLaunchesErrorData,
  setLaunchYearOptions,
} from "./launchesAction";

export default function* twofaSaga() {
  yield takeLatest(fetchLaunches.toString(), handleFetchLaunches);
}

function* handleFetchLaunches({ payload }) {
  const { params = {} } = payload || {};
  let apiParams = {};
  if (!isEmpty(params.launchYear)) {
    apiParams.launch_year = params.launchYear;
  }
  if (typeof params.launchStatus === "boolean") {
    apiParams.launch_success = params.launchStatus;
  }
  const isDefaultFetch = isEmpty(apiParams);
  yield put(setIsFetchingLaunches(true));
  yield put(setLaunchesErrorData({}));
  try {
    const response = yield call(fetch_launches_list, apiParams);
    yield put(setLaunchesData(response));
    if (isDefaultFetch) {
      const years = uniqBy(response, "launch_year").map(
        (data) => data.launch_year
      );
      yield put(setLaunchYearOptions(years));
    }
  } catch (error) {
    yield put(
      setLaunchesErrorData({ isFetchFailed: true, message: error.message })
    );
  } finally {
    yield put(setIsFetchingLaunches(false));
  }
}
