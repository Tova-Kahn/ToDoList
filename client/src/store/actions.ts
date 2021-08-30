import {createAsyncAction} from 'typesafe-actions';

export const init = createAsyncAction(
    'ROOT/INIT_REQUEST',
    'ROOT/INIT_SUCCESS',
    'ROOT/INIT_FAILURE',
)<void, void, string>();
