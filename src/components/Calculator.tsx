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
  gap: 20px;
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
const ButtonBar = styled.div`
  position: relative;
  width: 414px;
  height: 50px;
  top: 40px;

  background: rgba(255, 255, 255, 0.4);
`;

const Calculator = () => {
  const [cartValue, setCartValue] = React.useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = React.useState<number>(0);
  const [amountOfItems, setAmountOfItems] = React.useState<number>(0);
  const [time, setTime] = React.useState<Date>(new Date());
  return (
    <Container>
      <Header>Delivery Fee Calculator</Header>
      <InputArea
        defText="Cart Value"
        symbol="€"
        setStateValue={setCartValue}
        type="number"
      />
      <InputArea
        defText="Delivery Distance"
        symbol="m"
        setStateValue={setDeliveryDistance}
        type="number"
      />
      <InputArea
        defText="Amount of Items"
        symbol=""
        setStateValue={setAmountOfItems}
        type="number"
      />
      <InputArea
        defText="Time"
        symbol=""
        setStateValue={setTime}
        type="datetime-local"
      />
      <ButtonBar></ButtonBar>
      <InputArea
        defText="Delivery price"
        symbol=""
        setStateValue={setTime}
        value="1.0"
      />
    </Container>
  );
};

export default Calculator;
