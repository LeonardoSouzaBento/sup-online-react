import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  background-color: #d3482c;
  background-image: linear-gradient(to right,#e34343,#C7381A);
  position: sticky;
  top: 0;
  z-index: 3;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row nowrap;
  width: 90%;
  margin: auto;
  height: 40px;
  padding: 13px 0px;
  padding-bottom: 14px;
  position: sticky;
  top: 0;
  z-index: 3;
`;

const Input = styled.input`
  height: 100%;
  width: calc(100% - 50px);
  border-radius: 20px 0px 0px 20px;
  border: none;
  font-weight: 300;
  font-size: 0.85em;
  text-indent: 20px;
  font-size: 0.97em;
`;

const Divf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 0px 20px 20px 0px;
  width: 50px;
`;

function SearchBar() {
  return (
    <Div id="div_search">
      <Form action="/search" method="post" id="for_search">
      <Input type="search" id="search" name="query" placeholder="O que você quer? Digite aqui"></Input>
      <Divf><span className="material-symbols-rounded" style={{color: "rgb(111, 111, 111"}}>search</span></Divf>
      </Form>
    </Div>
  );
}

export default SearchBar;