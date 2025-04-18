import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    height: 58px;
    width: calc(100% - 30px);
    position: sticky;
    bottom: 0;
    z-index: 4;
    box-shadow: 0px -2px 5px #00000032;
    padding: 0px 15px;
    padding-bottom: 10px;
`;

const DivDoFooter = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 40px;
    width: 28.5%;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;


const Pfooter = styled.p`
    font-family: "Fira Sans", serif;
    font-weight: 400;
    width: max-content;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9em;
`;

const DivClassStyled = styled.div`
    width: 90%;
    height: 4px;
    border-radius: 2px;
    background-color: white;

    ${props => props.$selected && 
    `background-color: red;`}
`;

function Footer() {
  return (
    <FooterStyled>
      <DivDoFooter>
        <span className="material-symbols-rounded">home</span>
        <Pfooter>Inicio</Pfooter>
        <DivClassStyled $selected={true}></DivClassStyled>
      </DivDoFooter>

      <DivDoFooter>
        <span className="material-symbols-rounded">contract_edit</span>
        <Pfooter>Carrinho</Pfooter>
        <DivClassStyled></DivClassStyled>
      </DivDoFooter>

      <DivDoFooter>
        <span className="material-symbols-rounded">menu</span>
        <Pfooter>Mais</Pfooter>
        <DivClassStyled></DivClassStyled>
      </DivDoFooter>
    </FooterStyled>
  );
}

export default Footer;