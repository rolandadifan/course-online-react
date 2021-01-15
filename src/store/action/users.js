import {POPULATE_PROFILE} from 'constan/types/users';

export const populateProfile = (profile = {}) => ({
    type: POPULATE_PROFILE,
    payload: profile,
})