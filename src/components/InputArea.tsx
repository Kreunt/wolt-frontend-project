import React from "react";
import styled from "styled-components";

interface InputAreaProps {
  defText: string;
  symbol?: string;
  type?: string;
  value?: string;
  setStateValue: React.Dispatch<React.SetStateAction<any>>;
}
const ColumnContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 40px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 40px;
`;
const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  width: 265px;
  left: 0px;
  top: 20px;

  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #ffffff;
  box-shadow: inset 0px 0px 10px 4px rgba(218, 218, 218, 0.4);
  border-radius: 7px;
`;
const StyledText = styled.p`
  font-family: "Baskervville";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 0px;
`;
const InputArea = (props: InputAreaProps) => {
  return (
    <ColumnContainer>
      <StyledText>{props.defText}</StyledText>
      <RowContainer>
        <Input
          onChange={(e) => {
            if (props.defText !== "Delivery price") {
              if (props.type === "datetime-local") {
                props.setStateValue(new Date(e.target.value));
              } else {
                props.setStateValue(e.target.value);
              }
            }
          }}
          type={props.type}
          value={props.value}
        />
        <StyledText>{props.symbol}</StyledText>
      </RowContainer>
    </ColumnContainer>
  );
};

export default InputArea;
