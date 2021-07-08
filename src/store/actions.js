import {
    SET_MOBILE
} from './constants';
import {store} from './index';

export const setMobile = (value) => {
    store.dispatch({
        type: SET_MOBILE,
        value
    });
};
