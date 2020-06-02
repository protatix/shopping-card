import { GET_DATA_START, GET_DATA_FINISH, GET_DATA_REJECTED, UserActionTypes } from '../types/actions';

const initialState : object = {
	users: []
};

const userReducer = ( state = initialState, action: UserActionTypes ): any => {
	switch ( action.type ) {
		case GET_DATA_START:
			return {
				...state
			}

		case GET_DATA_FINISH:
			return {
				...state,
				data: action.data
			}
            
		case GET_DATA_REJECTED:
            return {
				...state,
				data: action.error
			}
            
		default:
			return state;
	}

};


export default userReducer;
