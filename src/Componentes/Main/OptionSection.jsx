import React from 'react'
import styled from 'styled-components';

const FundoStyled = styled.div`
    position: fixed;
    top: 0px;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.505);
    z-index: 5;
    transition: opacity 0.3s ease;
    opacity: 0%;
    touch-action: none;
`;

const DivOptions = styled.div`
    min-width: 300px;
    width: 70%;
    max-width: 360px;
    position: absolute;
    background-color: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    border-radius: 8px 0px 0px 8px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-family: "Fira Sans", sans-serif;
    padding: 20px 25px;
    padding-right: 10px;
    right: 0px;
    bottom: 60px;
`;

const DivHeadOptions = styled.div`
  padding: 0px;
  margin-bottom: 8px;
`;

const PaiOptions = styled.div`
    display: flex;
    align-items: center;
    padding-top:12px;
    gap: 12px;
    padding-bottom: 12px;
`;

const SpanOptions = styled.span`
  font-variation-settings:'FILL' 1;
  color: rgb(101, 101, 101);
  font-size: 1.35em;
  color: #4e4848;
`;

const OptionsP = styled.p`
  letter-spacing: 0.5px;
`;


const OptionSection = () => {
  return (
    <FundoStyled>
        <DivOptions>
            <DivHeadOptions/>
            <PaiOptions>
                <SpanOptions className="material-symbols-rounded">settings</SpanOptions>
                <OptionsP>Configurações</OptionsP>
            </PaiOptions>

            <PaiOptions>
                <SpanOptions className="material-symbols-rounded">notifications</SpanOptions>
                <OptionsP>Notificações</OptionsP>
            </PaiOptions>

            <PaiOptions>
                <SpanOptions className="material-symbols-rounded">shopping_bag</SpanOptions>
                <OptionsP>Meus Pedidos</OptionsP>
            </PaiOptions>

            <PaiOptions>
                <SpanOptions className="material-symbols-rounded">mail</SpanOptions>
                <OptionsP>Fale Conosco</OptionsP>
            </PaiOptions>

            <PaiOptions>
                <SpanOptions className="material-symbols-rounded"> id_card</SpanOptions>
                <OptionsP>Trabalhe Conosco</OptionsP>
            </PaiOptions>

            <PaiOptions>
                <SpanOptions className="material-symbols-rounded"> login</SpanOptions>
                <OptionsP>Entrar/Se cadastrar</OptionsP>
            </PaiOptions>
        </DivOptions>
    </FundoStyled>
  )
}

export default OptionSection;