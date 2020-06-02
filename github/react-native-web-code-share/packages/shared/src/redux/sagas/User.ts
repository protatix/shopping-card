import {
	put, call, takeEvery, fork
} from 'redux-saga/effects';
import axios from 'axios';
import * as dataActions from '../actions/User';
import { GET_DATA_START } from '../types/actions';


function* getData() {
	try {
		const { data } = yield call( axios.get, 'https://jsonplaceholder.typicode.com/users' );
		yield put( dataActions.getDataFinish( data ) );

	} catch ( error ) {
		yield put( dataActions.getDataRejected( error.message ) );
	}
}

function* getDataSaga() {
	yield takeEvery( GET_DATA_START, getData );
}

const usersSagas = [
    fork(getDataSaga)
]

export default usersSagas;
