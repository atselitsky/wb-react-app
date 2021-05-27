//import { message } from 'antd';
import * as actionTypes from './actionTypes'

const initialState  = {
  value:111,
  articles: [
    {
      key: 1,
      path: "/test/topic",
      body:
        "ON",
    },
    {
      key: 2,
      path: "/test/topic/on",
      body:
        "32.35 C",
    },
  ],

}

const reducer = (
  state= initialState,
  action: ChannelAction
) => {
  let changed = false;
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      let changedArticles = state.articles.map((item)=>{
        if(action.article.path === item.path){
          changed = true;
          return {
            key:item.key,
            path:item.path,
            body:action.article.body
          }
        }
        return item
      })
      if (changed){
        changed = false;
        return{
          ...state,
          articles:changedArticles
        }
      }


      const newArticle: IMqttChannel = {
        key: Math.random(), // not really unique
        path: action.article.path,
        body: action.article.body,
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IMqttChannel[] = state.articles.filter(
        article => article.key !== action.article.key
      )
      return {
        ...state,
        articles: updatedArticles,
      }
  }
  return state
}

export default reducer


// const { CONNECT_WS_ERROR, CONNECT_WS_SUCCESS } = actionTypes

// const initialState: WebsocketState = {
//   messages:[
//   { 
//     from:'Test',
//     message:'MY FIRST DATA',
//   },
//   ]
// }

// const reducer = (
//   state: WebsocketState = initialState,
//   action: WebsocketAction
// ): WebsocketState => {
//   switch (action.type) {
//     case CONNECT_WS_SUCCESS:
//       return {
//         ...state,
//         log: state.log.concat("Lorem")
//       }
//     case CONNECT_WS_ERROR:
//       return {
//         ...state,
//         messages: new Error("Unable to get a websocket connection")
//       }
//   }
//   return state
// }

// export default reducer;
