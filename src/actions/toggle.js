import {TOGGLE} from "../constants/action-types";

export const Toggle = (isOpen) => {
    return {
        type: TOGGLE,
        payload: !isOpen
    }
};