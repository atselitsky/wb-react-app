import * as actionTypes from './actionTypes';

export function wsRequest(){
  const action:WebsocketAction  = {
    type: actionTypes.WS_REQUEST
  }
  return action
}
export function wsConnSuccess(){
  const action:WebsocketAction  = {
    type: actionTypes.WS_REQUEST,
    status: true
  }
  return action
}
export function wsConnError(error:Error){
  const action:WebsocketAction  = {
    type: actionTypes.WS_ERROR,
    status: error
  }
  return action
}


export function addArticle(article: IMqttChannel) {
  const action: ChannelAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  return dispatchAction(action)
}

export function removeArticle(article: IMqttChannel) {
  const action: ChannelAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }
  return dispatchAction(action)
}

export function dispatchAction(action: ChannelAction) {
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}


// const { WS_BASE } = constants;
// const { CONNECT_WS_REQUEST, CONNECT_WS_SUCCESS, CONNECT_WS_ERROR } = actionTypes;

// export const connectWebsocketRequest = (): object => {
//   return {
//     type: CONNECT_WS_REQUEST
//   }
// }

// export const connectWebsocketSuccess = (payload: any): object => {
//   return {
//     type: CONNECT_WS_SUCCESS,
//     payload,
//   }
// }

// export const connectWebsocketError = (error: Error): object => {
//   return {
//     type: CONNECT_WS_ERROR,
//     error,
//   }
// }

// export const connectWebsocket = () => {
//   return async (dispatch: any) => {
//     dispatch(connectWebsocketRequest());
//     try {
//       const response: any = await axios.get(`${WS_BASE}`)
//       dispatch(connectWebsocketSuccess(response.data))
//     } catch (error) {
//       dispatch(connectWebsocketError(error))
//     }
//   }
// }
