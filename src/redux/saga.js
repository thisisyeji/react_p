import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getFlickr, getMembers, getYoutube } from './api';
import * as types from './actionType';

//Flickr saga
// 컴포넌트에서 받은 인수값을 api.js에 있는 axios함수에 연결해서 호출하는 함수
export function* returnFlickr(action) {
	try {
		const response = yield call(getFlickr, action.Opt);
		yield put({
			type: types.FLICKR.success,
			payload: response.data.photos.photo,
		});
	} catch (err) {
		yield put({ type: types.FLICKR.err, payload: err });
	}
}
export function* callFlickr() {
	yield takeLatest(types.FLICKR.start, returnFlickr);
}

//Members saga
export function* returnMembers() {
	try {
		const response = yield call(getMembers);
		yield put({ type: types.MEMBERS.success, payload: response.data.members });
	} catch (err) {
		yield put({ type: types.MEMBERS.err, payload: err });
	}
}
export function* callMembers() {
	yield takeLatest(types.MEMBERS.start, returnMembers);
}

//Youtube saga
export function* returnYoutube() {
	try {
		const response = yield call(getYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.err, payload: err });
	}
}
export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

//store.js에 의해서 reducer에 적용될 rootSaga함수 생성
export default function* rootSaga() {
	yield all([fork(callFlickr), fork(callMembers), fork(callYoutube)]);
}
