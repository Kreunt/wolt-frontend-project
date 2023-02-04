import React from "react";
import styled from "styled-components";
import InputArea from "./InputArea";
import calculateButton from "../assets/calculateButton.png";

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
  display: flex;
  justify-content: center;
  width: 414px;
  height: 50px;
  top: 40px;
  padding: 5px;

  background: rgba(255, 255, 255, 0.4);
`;
const CalculateImage = styled.img`
  --g: 0px; /* the gap */
  --b: 2px; /* border thickness*/
  --c: #ff9a62; /* the color */

  padding: calc(var(--g) + var(--b));
  --_c: #0000 0 25%, var(--c) 0 50%;
  --_g1: repeating-linear-gradient(90deg, var(--_c)) repeat-x;
  --_g2: repeating-linear-gradient(180deg, var(--_c)) repeat-y;
  background: var(--_g1) var(--_p, 25%) 0, var(--_g2) 0 var(--_p, 125%),
    var(--_g1) var(--_p, 125%) 100%, var(--_g2) 100% var(--_p, 25%);
  background-size: 200% var(--b), var(--b) 200%;
  cursor: pointer;
  filter: grayscale(50%);
  transition: 0.3s;
  &:hover {
    --_p: 75%;
    filter: grayscale(0%);
  }
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
        <CalculateImage
          src={calculateButton}
          onClick={handleCalculate}
          alt="Calculate Button"
        />
      </ButtonBar>
      <InputArea
        defText="Delivery price"
        symbol="€"
        setStateValue={setDeliveryPrice}
        value={deliveryPrice.toString()}
      />
    </Container>
  );
};

export default Calculator;
