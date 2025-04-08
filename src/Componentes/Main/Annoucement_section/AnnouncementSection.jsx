import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';


const Div = styled.div`
  width:calc(100% - 30px);
  position: relative;
  overflow-x: hidden;
  margin: auto;
  padding-bottom: 60px;
  touch-action: pan-x;
  border-radius: 5px;

  //celulares
  @media screen and (min-width: 320px) and (max-width:576px){
    width: 100%;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    width: calc(100% - 15px);
  }
  //tablets
  @media screen and (min-width: 769px) and (max-width:992px){
    width: calc(100% - 20px);
  }
  //notebooks
  @media screen and (min-width: 993px) and (max-width:1200px){
    width: calc(100% - 20px);
    margin-bottom: 70px;
    padding-bottom: 0px;
  }
  @media screen and (min-width: 1201px){
    width: calc(100% - 50px);
    margin-bottom: 70px;
    padding-bottom: 0px;
  }
`;

const P = styled.p`
   width: 100%;
    text-align: center;
    margin-bottom: 22px;
    font-size: 1.15em;
    letter-spacing: 1.75px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    color: #892c2f;

 //celulares
  @media screen and (min-width: 320px) and (max-width:576px){
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.24em;
  }
  //tablets
  @media screen and (min-width: 769px) and (max-width:992px){
    font-size: 1.25em;
  }
  //notebooks
  @media screen and (min-width: 993px) and (max-width:1200px){
    font-size: 1.27em;
  }
  @media screen and (min-width: 1201px){
    font-size: 1.3em;
  }
`;

const Advertisements= styled.div`
    height: 170px;
    width:100%;
    margin: auto;
    padding-bottom: 30px;
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
    touch-action: pan-x;

    @media screen and (min-width: 577px) and (max-width:768px){
    gap: 15px;
    }
    @media screen and (min-width: 769px){
    gap: 17px;
    }
`;

const Fundo = styled.div`
    position: relative;
    height: 170px;
    min-width: 340px;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    filter: blur(5px) brightness(0.72);
    z-index: -1;
  }
`;

const Img = styled.img`
    height: 100%;
    display: block;
    object-fit: contain;
    margin: auto;
`;

let imageUrls = [
  "https://i.pinimg.com/736x/07/e7/fa/07e7fa050221671f1ca5fb8efbbc836b.jpg",
  "https://i.pinimg.com/736x/26/7e/6b/267e6b57f769a42dbf2b61681364ca1c.jpg",
  "https://i.pinimg.com/736x/a0/96/75/a09675ab98661f098006f3ca31c8d90b.jpg",
  "https://i.pinimg.com/736x/63/3b/16/633b16299e2fa1f2223d6bd6ff6cf1eb.jpg",
  "https://i.pinimg.com/736x/5e/52/e5/5e52e58e04d7b121674d314b54fc715e.jpg",
  "https://i.pinimg.com/736x/c6/9d/59/c69d59f77cea3f83235e432e8d311520.jpg"
];

const Pagination = styled.div`
    height: 12px;
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
`;

const Span = styled.span.attrs(() => ({
  // nada é passado para o DOM
}))`
  height: 100%;
  width: 12px;
  background-color: rgb(159, 159, 159);
  border-radius: 50%;

  ${props => props.$atual && `
    transform: scale(1.1);
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px rgb(164, 164, 164);
  `}
`;


function AnnouncementSection() {

  const divRef = useRef(null);
  const fundoRef = useRef(null);
  const advertisementsRef = useRef(null);
  const [indicesCentrais, setIndices] = useState([]);

  useEffect(() => {
    if (divRef.current && fundoRef.current && advertisementsRef.current) {
      const divWidth = divRef.current.offsetWidth;
      const fundoWidth = fundoRef.current.offsetWidth;
      const advertisementsStyle = getComputedStyle(advertisementsRef.current);
      const gap = parseFloat(advertisementsStyle.gap);

      let img_center = Math.ceil((imageUrls.length)/2);

      const visibleRatio = divWidth / (fundoWidth + gap);
      const anun_visible = visibleRatio > 2.6 ? 3 : 1;

      let indices = [img_center];
      if (anun_visible === 3) {
        indices = [img_center - 1, img_center, img_center + 1];
      }
      setIndices(indices);
    }
  }, []);

  return (
    <Div ref={divRef}>
      <P>Temos novidades!</P>
      <Advertisements ref={advertisementsRef}>
        {imageUrls.map((url, index) => (
          <Fundo key={index} $bg={url} ref={index === 0 ? fundoRef : null // pega só o primeiro como exemplo
          }>
            <Img src={url} alt={`Imagem de anúncio ${index + 1}`} id={`anun ${index + 1}`} />
          </Fundo>
        ))}
      </Advertisements>
      <Pagination>
        {imageUrls.map((_, i) => (
          <Span key={i} $atual={indicesCentrais.includes(i)}></Span>
        ))}
      </Pagination>
    </Div>
  );
}

export default AnnouncementSection;