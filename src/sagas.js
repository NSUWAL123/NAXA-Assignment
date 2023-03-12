import {takeEvery, call, put} from 'redux-saga/effects';
import { GET_SERVICES, GET_SERVICES_FETCHED } from './actions';

function getService() {
    return fetch('https://admin.naxa.com.np/api/services').then(response => response.json());
}

function* workGetServices() {
    const services = yield call(getService);
    yield put({type: GET_SERVICES_FETCHED, services})
}

function* mySaga() {
    yield takeEvery(GET_SERVICES, workGetServices);
}

export default mySaga;