import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ LOGIN ]';

const ACTIONS = {
	setUserData: `${MODULE_PREFIX} setUserData`,
};
//actions
export const setUserData = createAction(ACTIONS.setUserData);
