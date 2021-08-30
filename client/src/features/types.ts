export interface State {
    loading: Loading;
    tasks?: string[];
}

export enum LoadingState {
    IDLE = 'IDLE',
    REQUEST = 'REQUEST',
    SUCCESS = 'DONE',
    FAILURE = 'FAILURE',
}

export interface Loading {
    state: LoadingState;
    info?: string;
}
