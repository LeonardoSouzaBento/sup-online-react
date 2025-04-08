import React from 'react';
import styled from 'styled-components';
import Divlogo from './DivLogo';
import UserEnotif from './UserEnotif';

export const Sheader = styled.header `
    background-color: #d3482c;
    max-width: 1390px;
    padding: 8px 0px;
    padding-top: 17px;
    box-sizing: border-box;
    margin: auto;
    margin-bottom: -1px;
    background-image: linear-gradient(to right, #e34343, #C7381A);
`;
const Cabecalho= styled.div`
  width: 90%;
    margin: auto;
    margin-top: 0px;
    padding: 5px 0px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    gap: 10px;
    align-items: center;
`;
const Header = () => {
  return (
    <Sheader>
        <Cabecalho id='cabecalho'>
            <Divlogo></Divlogo>
            <UserEnotif></UserEnotif>
        </Cabecalho>
    </Sheader>
  )
}

export default Header;