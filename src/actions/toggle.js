import {TOGGLE} from "../constants/action-types";

export const Toggle = (isOpen) => ({
        type: TOGGLE,
        payload: !isOpen
    });