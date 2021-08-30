import {getType} from 'typesafe-actions';
import {Reducer}from 'redux';
import {
    LoadingState,
    State,
} from '../features/types';
import * as actions from './actions';

const initialState: State = {
    loading: {state: LoadingState.IDLE},
};

export const FeatureReducer: Reducer<State> = (state = initialState, action) => {
    switch (action.type) {
        case getType(actions.init.request):
            return {...state, loading: {state: LoadingState.REQUEST}}

        case getType(actions.init.success):
            return {...state, loading: {state: LoadingState.SUCCESS}}

        case getType(actions.init.failure):
            return {...state, loading: {state: LoadingState.FAILURE, info: action.payload}}

        default:
            return state;
    }
};
