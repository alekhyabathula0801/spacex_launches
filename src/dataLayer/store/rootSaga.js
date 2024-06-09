import launchesSaga from '../features/launches/launchesSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([
		launchesSaga(),
	]);
}
