import { get } from 'lodash-es';

export const getUserData = (state) => {
	return get(state, 'login.userData', {});
};
