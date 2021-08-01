import {FETCH_ALL_UESRS} from './Type'

export const getAllPosts = () => {
  return (dispatch) => {
    //   fetch placeholder data from jsonplaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) =>
        //dispatch response to the store
        dispatch({
          type: FETCH_ALL_UESRS,
          payload: result
        })
      );
  };
};
