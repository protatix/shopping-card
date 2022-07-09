import styled from "styled-components"

export const OrderBookWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 1240px) {
    flex-direction: column;
  }
`

export const OrderTitleWrapper = styled.div`
  display: table-caption;
  min-width: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 21px;
  color: #212833;
  font-weight: 500;
  padding: 10px;
`

export const OrderBookTableWrapper = styled.div`
  border: 1px solid #eaecef;
  background: #ffffff;
  flex: 1;
  margin-right: 40px;

  @media screen and (min-width: 0px) and (max-width: 685px) {
    margin-right: 0px;
    width: 300px;
  }

  @media screen and (min-width: 686px) and (max-width: 1240px) {
    margin-right: 0px;
    width: 650px;
  }
`

export const OrderBookTable = styled.div`
  display: table;
  border-spacing: 10px;
  width: 100%;
`

export const OrderBookTableHeader = styled.div`
  display: table-header-group;
  background-color: #ffffff;
  color: #848e9c;
  font-weight: bold;
  font-size: 15px;
`

export const OrderBookTableHeaderCell = styled.div`
  display: table-cell;
  padding: 10px 0;
  text-align: justify;
  border-bottom: 1px solid #f2f2f2;
`
export const OrderBookTableBody = styled.div`
  display: table-row-group;
`

export const OrderBookTableRow = styled.div`
  display: table-row;

  &:nth-child(even) {
    background: #eaecef;
  }

  &:nth-child(odd) {
    background: #ffffff;
  }
`
export const OrderBookTableRowCell = styled.div`
  display: table-cell;
`
