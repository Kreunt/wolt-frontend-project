import React from "react";
import styled from "styled-components";
import InputArea from "./InputArea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */ /*Development only*/
  width: 414px;
  height: 722px;
  background: linear-gradient(180deg, #fff2ea 0%, #fff4ea 100%);
  border-radius: 20px;
  margin: 20px;
`;
const Header = styled.h1`
  position: relative;
  width: 320px;
  height: 40px;
  top: 46px;

  font-family: "Cormorant";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 0px;
  /* or 0% */

  display: flex;
  justify-content: center;

  color: #000000;
`;

const Calculator = () => {
  return (
    <Container>
      <Header>Delivery Fee Calculator</Header>
      {
        //<InputArea defText="Cart Value" symbol="€" />
      }
    </Container>
  );
};

export default Calculator;
