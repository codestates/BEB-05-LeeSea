// redux reducer를 정의하는 파일
import { SET_ACCOUNT } from './actions';
import { initialState } from './initialState';

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return Object.assign({}, state, {
        account: action.payload
      });
    default:
      return state;
  }
};

export default accountReducer;