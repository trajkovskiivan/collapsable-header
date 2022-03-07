import {
  ADDING_PERSON,
  ADDED_PERSON_SUCCESS,
  ADDED_PERSON_FAIL,
} from './actionTypes';

const addPerson = () => async (dispatch: any) => {
  dispatch({type: ADDING_PERSON, payload: true});
};

export {addPerson};
