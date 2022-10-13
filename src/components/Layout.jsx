import React from "react";

// styled-components를 import
import styled from "styled-components";

// Layout 안의 자식 컴포넌트들을 받을 때 {props.children} 사용
function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}
export default Layout;

const StLayout = styled.div`
  /* 레이아웃의 최대, 최소 너비 지정 */
  max-width: 1200px;
  min-width: 800px;
  /* 레이아웃 가운데 정렬 */
  margin: 0 auto;
`;
