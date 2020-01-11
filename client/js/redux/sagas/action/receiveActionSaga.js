import actionCreator from "../../actions/actionCreator";
import * as types from "../../actions/actionTypes";
import { eventChannel } from "redux-saga";
import { take, put, call } from "redux-saga/effects";

const onReceive = (message) => actionCreator(types.MESSAGE_RECEIVE)(message);
const onFail = (error) => actionCreator(types.NOTIFICATION_ERROR)(error);

const waitNewMessages = (api) => {
    return eventChannel(emitter => {
        api.subscribeToMessage(message => {
            emitter(message);
        });

        return () => {
            //unsubscribe function
        };
    });
};
//probably there is another (better) way to do it
//separate entity that dispatch actions to store from callbacks
export const reveiveMessageSaga = (api) => {
    return function* reveiveMessage() {
        const chan = yield call(waitNewMessages, api);

        try {
            while (true) {
                let message = yield take(chan);
                yield put(onReceive(message));
            }
        } catch (e) {
            yield put(onFail(e));
        }
    };
};