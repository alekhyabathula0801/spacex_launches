import { fetch_launches_list } from "../../../api/launches";
import {
  fetchLaunches,
  setIsFetchingLaunches,
  setLaunchesData,
  setLaunchesErrorData,
} from "./launchesAction";
import { call, put, takeLatest } from "redux-saga/effects";

export default function* twofaSaga() {
  yield takeLatest(fetchLaunches.toString(), handleFetchLaunches);
}

function* handleFetchLaunches({ payload }) {
  const { params = {} } = payload || {};
  yield put(setIsFetchingLaunches(true));
  yield put(setLaunchesErrorData({}));
  try {
    const response = yield call(fetch_launches_list, params);
    yield put(setLaunchesData(response));
  } catch (error) {
    yield put(
      setLaunchesErrorData({ isFetchFailed: true, message: error.message })
    );
  } finally {
    yield put(setIsFetchingLaunches(false));
  }
}
