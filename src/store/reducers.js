import {
    SET_MOBILE,
} from './constants';

const initialState = {
    isMobile: false
};


const reducer = (state, action) => {
    switch(action.type) {
        case SET_MOBILE:
            return {...state, isMobile: action.value};
    }
    return state;
};

export {reducer, initialState};
