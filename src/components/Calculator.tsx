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
  const [deliveryPrice, setDeliveryPrice] = React.useState<number>(0);

  const calculateDeliveryFee = () => {
    let deliveryFee = 0;
    if (cartValue > 100) {
      return deliveryFee;
    }

    if (cartValue < 10) {
      let cartSurcharge = 10 - cartValue;
      deliveryFee += cartSurcharge;
    }

    deliveryFee += 2; // base delivery fee
    if (deliveryDistance > 1000) {
      deliveryFee += Math.ceil((deliveryDistance - 1000) / 500);
    }

    if (amountOfItems > 4) {
      deliveryFee += (amountOfItems - 4) * 0.5;
    }
    if (amountOfItems > 12) {
      deliveryFee += 1.2; // bulk surcharge
    }

    if (time.getHours() <= 19 && time.getHours() >= 15 && time.getDay() === 5) {
      deliveryFee *= 1.2; // friday rush surcharge
    }

    if (deliveryFee > 15) {
      deliveryFee = 15;
    }

    return deliveryFee;
  };

  const handleCalculate = () => {
    setDeliveryPrice(calculateDeliveryFee());
  };

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
        setStateValue={setAmountOfItems}
        type="number"
      />
      <InputArea defText="Time" setStateValue={setTime} type="datetime-local" />
      <ButtonBar>
        <button type="button" onClick={handleCalculate}>
          Calculate
        </button>
      </ButtonBar>
      <InputArea
        defText="Delivery price"
        setStateValue={setDeliveryPrice}
        value={deliveryPrice.toString()}
      />
    </Container>
  );
};

export default Calculator;
