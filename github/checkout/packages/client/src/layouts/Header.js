import React from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
    display: flex;
    &> div {
        margin: 10px;
        align-items: center;
    }
`;


const Header = ({ children }) => {
    return (
        <div data-testid="header-app">
           <HeaderStyle>
            { children }
           </HeaderStyle>
        </div>
    )
}

export default Header;
