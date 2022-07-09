import { useEffect, memo } from "react"
import useWebSocket from "react-use-websocket"
import { useGlobalState } from "../../context/Store"
import Loader from "../Loader"
import {
  OrderBookTableWrapper,
  OrderBookWrapper,
  OrderTitleWrapper,
  OrderBookTable,
  OrderBookTableHeader,
  OrderBookTableHeaderCell,
  OrderBookTableBody,
  OrderBookTableRow,
  OrderBookTableRowCell,
} from "./style"
import { WSS_URL } from "../../constanst"
import { handleType } from "../../utils"

const OrderBook = memo(() => {
  const [state, dispatch] = useGlobalState()
  const { sendJsonMessage } = useWebSocket(WSS_URL, {
    onOpen: () => console.log("the connection has opened"),
    onClose: () => console.log(" the connection has closed"),
    shouldReconnect: () => true,
    onMessage: (event) => processMessages(event),
  })

  const processMessages = (event) => {
    const response = JSON.parse(event.data)

    const types = {
      partial: () => {
        dispatch({ type: "FETCH_PARTIAL_MARKET", payload: response.data })
      },
      delete: () => {
        const ids = response.data.map((item) => item.id)
        dispatch({ type: "ACTION_DELETE", payload: ids })
      },
      insert: () => {
        dispatch({ type: "ACTION_INSERT", payload: response.data })
      },
      update: () => {
        dispatch({ type: "ACTION_UPDATE", payload: response.data })
      },
      default: () => {
        console.log("type not found")
      },
    }

    return (types[response.action] || types.default)()
  }

  useEffect(() => {
    dispatch({ type: "RESET_STATE" })
    sendJsonMessage({
      op: "unsubscribe",
      args: [`orderBookL2_25:${handleType(state.selectedItem.code)}`],
    })
    sendJsonMessage({
      op: "subscribe",
      args: [`orderBookL2_25:${state.selectedItem.code}`],
    })
  }, [state.selectedItem.code, sendJsonMessage, dispatch])

  if (state.market.loading) {
    return <Loader />
  }

  return (
    <OrderBookWrapper>
      <OrderBookTableWrapper>
        <OrderTitleWrapper>Buy Order</OrderTitleWrapper>
        <OrderBookTable>
          <OrderBookTableHeader>
            <OrderBookTableHeaderCell>Price</OrderBookTableHeaderCell>
            <OrderBookTableHeaderCell>Size (USD)</OrderBookTableHeaderCell>
            <OrderBookTableHeaderCell>Total (USD)</OrderBookTableHeaderCell>
          </OrderBookTableHeader>
          <OrderBookTableBody>
            {state.market.data
              .filter((item) => item.side === "Buy")
              .map((item) => (
                <OrderBookTableRow key={item?.id}>
                  <OrderBookTableRowCell>{item?.price}</OrderBookTableRowCell>
                  <OrderBookTableRowCell>{item?.size}</OrderBookTableRowCell>
                  <OrderBookTableRowCell>-</OrderBookTableRowCell>
                </OrderBookTableRow>
              ))}
          </OrderBookTableBody>
        </OrderBookTable>
      </OrderBookTableWrapper>
      <OrderBookTableWrapper>
        <OrderTitleWrapper>Sell Order</OrderTitleWrapper>
        <OrderBookTable>
          <OrderBookTableHeader>
            <OrderBookTableHeaderCell>Price</OrderBookTableHeaderCell>
            <OrderBookTableHeaderCell>Size (USD)</OrderBookTableHeaderCell>
            <OrderBookTableHeaderCell>Total (USD)</OrderBookTableHeaderCell>
          </OrderBookTableHeader>
          <OrderBookTableBody>
            {state.market.data
              .filter((item) => item.side === "Sell")
              .map((item) => (
                <OrderBookTableRow key={item?.id}>
                  <OrderBookTableRowCell>{item?.price}</OrderBookTableRowCell>
                  <OrderBookTableRowCell>{item?.size}</OrderBookTableRowCell>
                  <OrderBookTableRowCell>-</OrderBookTableRowCell>
                </OrderBookTableRow>
              ))}
          </OrderBookTableBody>
        </OrderBookTable>
      </OrderBookTableWrapper>
    </OrderBookWrapper>
  )
})

export default OrderBook
