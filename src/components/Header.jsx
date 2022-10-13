import React from "react";
// styled-components를 사용하기 위해 import
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <div>My Todo List</div>
      <div>React</div>
    </StHeader>
  );
}
export default Header;

const StHeader = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
