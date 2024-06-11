import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ USERS ]';

const ACTIONS = {
	updateUsersList: `${MODULE_PREFIX} updateUsersList`,
};
//actions
export const updateUsersList = createAction(ACTIONS.updateUsersList);
