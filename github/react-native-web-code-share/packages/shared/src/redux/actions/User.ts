import { GET_DATA_START, GET_DATA_FINISH, GET_DATA_REJECTED, AppActions } from '../types/actions';
import { User } from '../types/User';

export const getDataStart = () => ({
    type: GET_DATA_START
});

export const getDataFinish = (data: User[]): AppActions => ({
    type: GET_DATA_FINISH,
    data
});

export const getDataRejected = (error: string): AppActions => ({
    type: GET_DATA_REJECTED,
    error
});
