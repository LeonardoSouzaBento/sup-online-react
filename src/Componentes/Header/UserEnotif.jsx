import React from 'react';
import styled from 'styled-components';

const DivPai= styled.div`
    height: 100%;
    min-width: 115px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`;
const Div = styled.div`
    display: none;
    @media (min-width: 992px){
        height: 40px;
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #d25252;
        box-shadow: 0px 0px 4px rgb(159, 62, 62);
        border-radius: 6px;
        padding: 7px 15px;
        color: white;
        box-sizing: border-box;
        transition: all 100ms ease;
    }
`;
const Img0 = styled.img`
    height: 45px;
    padding: 4px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #a93d40;
    box-shadow: 0px 0px 4px rgb(110, 18, 18);
`;
const Img1 = styled.img`
    height: 31px;
    padding: 11px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #a93d40;
    box-shadow: 0px 0px 4px rgb(110, 18, 18);
`;

//estilos
const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};
const pstyle = { fontFamily: "Fira Sans", letterSpacing: "0.8px", margin:"0px"};

//div das opcoes
const UserEnotif= () => {
    return (
    <DivPai>
        <Div>
            <span className="material-symbols-rounded" style={iconStyle}>contract_edit</span>
            <p style={pstyle}>colar Lista</p>
        </Div>
        <Div>
            <span className="material-symbols-rounded" style={iconStyle}>menu</span>
            <p style={pstyle}>Mais opções</p>
        </Div>
        <Img0 src='src\assets\person.png'></Img0>
        <Img1 src='src\assets\notifi.png'></Img1>
    </DivPai>
    )
}
export default UserEnotif;