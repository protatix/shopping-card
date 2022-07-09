import { useGlobalState } from "../../context/Store"
import {
  HeaderWrapper,
  OrderBookDivider,
  OrderBookCurrItem,
  OrderBookSwitchBtn,
} from "./style"
import { handleType } from "../../utils"

const Header = () => {
  const [state, dispatch] = useGlobalState()

  const handleSwitch = () => {
    dispatch({
      type: "SELECTED_MARKET",
      payload: handleType(state?.selectedItem?.code),
    })
  }
  return (
    <HeaderWrapper>
      <h1>Order Book</h1>
      <OrderBookDivider />
      <OrderBookCurrItem>{state?.selectedItem?.code}</OrderBookCurrItem>
      <OrderBookDivider />
      <OrderBookSwitchBtn onClick={handleSwitch}>Switch</OrderBookSwitchBtn>
    </HeaderWrapper>
  )
}

export default Header
