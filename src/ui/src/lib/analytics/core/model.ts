export enum MessageType {
  info = "info",
  debug = "debug",
  error = "error"
}

export interface Log {
  timestamp: number,
  type: MessageType
  message: string
}