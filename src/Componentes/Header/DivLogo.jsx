import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    color: rgb(255, 255, 255);
`;

const Img = styled.img`
    height: 100%;
    border-radius: 40%;
    box-shadow:0px 0px 6px #ab3636;
`;

const P = styled.p`
@media (min-width: 320px) and (max-width: 520px){
    font-size: 0.75em;
    letter-spacing: 0.5px;
    font-weight: 300;
    font-family: "Fira Sans", serif;
    line-height: 15px;
    padding: 5px;
}
@media (min-width: 521px) and (max-width: 576px){
    font-size: 0.9em;
    letter-spacing: 0.5px;
    font-weight: 300;
    font-family: "Fira Sans", serif;
    line-height: 17px;
    padding: 5px;
}
@media (min-width: 577px){
    font-size: 0.9em;
    letter-spacing: 0.5px;
    font-weight: 300;
    font-family: "Fira Sans", serif;
    line-height: 20px;
    text-align: justify;
    padding: 5px;
}
`;

const Divlogo = () => {
    return (
    <Div>
        <Img src="src\assets\WelcomeSection\logoGenerico_compressed.jpg" alt=""></Img>
        <div>
            <P><strong>SUPERMERCADO UNIÃO</strong><br></br>
                Seja bem vindo.
            </P>
        </div>
    </Div>
    )
}

export default Divlogo;