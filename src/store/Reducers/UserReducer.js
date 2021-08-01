import { FETCH_ALL_UESRS } from '../Actions/Type'

const initialState = {
  users: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_UESRS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
