import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/root';
import rootSaga from './sagas/root';


export default function configureStore() {


	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(sagaMiddleware)
		)
	);

	sagaMiddleware.run(rootSaga);


	return store;
}
