// redux reducer를 정의하는 파일
import { SET_ACCOUNT, SET_TOKEN_METADATA } from './actions';
import { initialState } from './initialState';

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return Object.assign({}, state, {
        account: action.payload
      });
    default:
      return state;
  }
};

export const tokenMetadataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN_METADATA:
      return Object.assign({}, state, {
        tokenMetadata: action.payload
      });
    default:
      return state;
  }
};
