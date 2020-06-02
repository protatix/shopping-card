import { User } from './User';
import rootReducer from '../reducers/root';

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_FINISH = "GET_DATA_FINISH";
export const GET_DATA_REJECTED = "GET_DATA_REJECTED";

export interface StartUserAction {
    type: typeof GET_DATA_START
}

export interface FinishUserAction {
    type: typeof GET_DATA_FINISH,
    data: User[]
}

export interface RejectedUserAction {
    type: typeof GET_DATA_REJECTED,
    error: string
}

export type UserActionTypes = StartUserAction | FinishUserAction | RejectedUserAction;
export type AppActions = UserActionTypes;
export type AppState = ReturnType<typeof rootReducer>;