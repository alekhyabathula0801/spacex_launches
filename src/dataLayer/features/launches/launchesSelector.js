import { get } from 'lodash-es';

export const getIsFetchingLaunches = (state) => {
	return get(state, 'launches.isFetchingData', {});
};

export const getLaunchesData = (state) => {
	return get(state, 'launches.launches', false);
};

export const getLaunchesErrorData = (state) => {
	return get(state, 'launches.errorData', 0);
};
