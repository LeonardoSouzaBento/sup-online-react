import React, { useState } from 'react';
import styled from 'styled-components';

const PaiProdStyled = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    max-width: 350px;
    height: 150px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgb(190, 190, 190);
    box-shadow: 0px 0px 2px rgb(185, 185, 185);
`;

// Oferta
const OfertaStyled = styled.div`
    height: 100%;
    width: 140px;
    padding: 5px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`;

const DivImgOfertaStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(207, 207, 207);
    border-radius: 4px;
`;

const ImgOfertaStyed = styled.img`
  height: 100%;
  object-fit: contain;
`;

const DivPesoStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5px;
    left: 5px;
    background-color: rgb(229, 229, 229);
    height: 20px;
    width: 45px;
    border-radius: 10px;
`;

const DivOffStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    left: 5px;
    background-color: rgb(229, 229, 229);
    height: 20px;
    width: 45px;
    border-radius: 10px;
`;

const Oferta = ()=>{(
  <OfertaStyled>
      <DivImgOfertaStyled>
        <DivPesoStyled></DivPesoStyled>
        <ImgOfertaStyed></ImgOfertaStyed>
        <DivOffStyled></DivOffStyled>
      </DivImgOfertaStyled>
  </OfertaStyled>
)}


// Preco
const PaiPrecoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
`;

const DivPrecoStyled = styled.div`
   width: calc(100% - 40px);
`;

const PprecoStyled = styled.p`
    width: 100%;
    text-align: center;
    text-indent: -10px;
`;

const DivMaisStyled = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: white;
    border-radius: 20px 20px 20px 20px;
`;

const Preco = ()=>{(
  <PaiPrecoStyled>
    <DivPrecoStyled>
      <PprecoStyled></PprecoStyled>
      <DivMaisStyled></DivMaisStyled>
    </DivPrecoStyled>
  </PaiPrecoStyled>
)}

//Selecionar a quantidade
const DivQuantStyled = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(215, 69, 69);
    border-radius: 7px;
    color: white;
    display: none;
`;
const BotoesStyled = styled.div`
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Botoes = ()=>{(
  <DivQuantStyled>
    <BotoesStyled>-</BotoesStyled>
    <BotoesStyled>0</BotoesStyled>
    <BotoesStyled>+</BotoesStyled>
  </DivQuantStyled>
)}

//Descrição da Oferta
const DescOfertaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: calc(100% - 140px);
    padding: 7px;
    padding-top: 9px;
    box-sizing: border-box;
    gap: 5px;
`;

const DivNomeStyled = styled.div`
    height: calc(100% - 40px);
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;  
`;
const PnomeStyled = styled.p`
  text-transform: uppercase;
`;

const DescOferta = ()=>{
  <DescOferta>
    <DivNomeStyled>
      <PnomeStyled></PnomeStyled>
    </DivNomeStyled>

    <Preco></Preco>
  </DescOferta>
}


function ProductItem({ product }) {
  return (
    <PaiProdStyled>

    </PaiProdStyled>
  );
}

export default ProductItem;

/* Função para adição e remoção de produto

  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
  */