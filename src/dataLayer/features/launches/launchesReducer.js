import { createReducer } from '@reduxjs/toolkit';
import { setIsFetchingLaunches, setLaunchesData, setLaunchesErrorData } from './launchesAction';

const initialState = { isFetchingData: false, launches: [], errorData: {} };

export default createReducer(initialState, (builder) => {
	builder.addCase(setIsFetchingLaunches, (state, action) => {
		state.isFetchingData = action.payload;
	});
	builder.addCase(setLaunchesData, (state, action) => {
		state.launches = action.payload;
	});
	builder.addCase(setLaunchesErrorData, (state, action) => {
		state.errorData = action.payload;
	});
});
