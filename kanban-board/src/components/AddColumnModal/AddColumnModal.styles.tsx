import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 350px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: #333; 
  background: white; 
  outline: none;

  &::placeholder {
    color: #999; 
  }
`;


export const ColorInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button<{ $variant: "cancel" | "submit" }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;

  background: ${({ $variant }) => ($variant === "submit" ? "#007bff" : "#ccc")};
  color: ${({ $variant }) => ($variant === "submit" ? "white" : "black")};

  &:hover {
    background: ${({ $variant }) => ($variant === "submit" ? "#0056b3" : "#aaa")};
  }
`;
