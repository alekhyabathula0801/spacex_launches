import { get } from 'lodash-es';

export const getUsersList = (state) => {
	return get(state, 'users.usersList', []);
};
