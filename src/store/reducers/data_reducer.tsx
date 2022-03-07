import {
  ADDING_PERSON,
  ADDED_PERSON_SUCCESS,
  ADDED_PERSON_FAIL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  adding: false,
  added: false,
  data: {},
  error: null,
};

export default (
  state: {
    adding: boolean;
    added: boolean;
    data: any;
    error: any;
  } = INITIAL_STATE,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case ADDING_PERSON:
      return {...state, adding: payload};
    case ADDED_PERSON_SUCCESS:
      return {...state, adding: false, added: true, data: payload};
    case ADDED_PERSON_SUCCESS:
      return {...state, adding: false, error: payload};

    default:
      return state;
  }
};
