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
  position: absolute; //Development only
  left: 25%; //Development only
  background: linear-gradient(180deg, #fff2ea 0%, #fff4ea 100%);
  border-radius: 20px;
  margin: 20px;
  gap: 32px;
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
  const [cartValue, setCartValue] = React.useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = React.useState<number>(0);
  const [amountOfItems, setAmountOfItems] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);
  return (
    <Container>
      <Header>Delivery Fee Calculator</Header>
      <InputArea defText="Cart Value" symbol="€" setStateValue={setCartValue} />
      <InputArea
        defText="Delivery Distance"
        symbol="m"
        setStateValue={setDeliveryDistance}
      />
      <InputArea
        defText="Amount of Items"
        symbol=""
        setStateValue={setAmountOfItems}
      />
      <InputArea defText="Time" symbol="" setStateValue={setTime} />
    </Container>
  );
};

export default Calculator;
