import { APP_ACTIONS } from '../actions/types';

const initialState = {
  data: null,
  submiting: false,
}

export default (state = initialState, { type, payload }) => {
  // console.log(payload)
  switch(type) {
    case APP_ACTIONS.GET_EOD_DATA_REQ:
      return {
        ...state,
        submiting: true,
      }
    case APP_ACTIONS.GET_EOD_DATA_RES:
      return {
        ...state,
        submiting: false,
        data: payload,
      }
    default: return state
  }
}
