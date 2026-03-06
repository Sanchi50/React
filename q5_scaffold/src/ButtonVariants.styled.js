import styled from "styled-components";

export const ButtonView = styled.button`
  /* Common styles */
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 40px;
  cursor: pointer;

  /* Condition: If filled prop exists, use props values, else use default white/black */
  background-color: ${(props) => (props.filled ? props.bg : "#fff")};
  color: ${(props) => (props.filled ? props.color : "#000")};
  border: ${(props) => (props.filled ? "none" : "3px solid #000")};
`;