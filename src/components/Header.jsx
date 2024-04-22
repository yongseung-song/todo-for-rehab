import styled from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <h1>To-do List mk1</h1>
      <StResetButton>don&apos;t push me</StResetButton>
    </StHeader>
  );
}

const StResetButton = styled.button`
  position: absolute;
  bottom: 70px;
  right: 100px;
  background-color: red;
  color: white;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  transform: rotate(-30deg);
  cursor: pointer;
  &:hover {
    background-color: #a00;
  }
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
