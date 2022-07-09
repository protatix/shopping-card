import { TYPES } from "../constanst"

export const handleType = (type) => {
  return type === TYPES.XBTUSD ? TYPES.ETHUSD : TYPES.XBTUSD
}
