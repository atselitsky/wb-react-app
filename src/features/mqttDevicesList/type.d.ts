// interface IWS{
//   from: string
//   message: string
//   // Implement Date in mqtt message
//   // time: Date
// }
// type WebsocketState = {
//   messages: WebsocketMessage[]
// }
type WebsocketAction = {
  type: string
  status?: boolean | error
}

// type DispatchType = (args: WebsocketAction) => WebsocketAction

interface IMqttChannel {
  key: number
  path: string
  body: string
}

type ChannelState = {
  articles: IMqttChannel[]
}

type ChannelAction = {
  type: string
  article: IArticle
}

type DispatchType = (args: ChannelAction|WebsocketAction) => ChannelAction|WebsocketAction