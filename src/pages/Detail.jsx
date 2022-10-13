import React from "react";
import styled from "styled-components";

// useParams는 path에 있는 id값을 조회할 수 있게 해주는 훅!
// useNavigate는 컴포넌트 간의 연결을 도와주는 훅! (다른 종류로는 Linkto가 있음)
import { useParams, useNavigate } from "react-router-dom";

// useSelector를 통해 store에 있는 state를 구독!
import { useSelector } from "react-redux";

function Detail() {
  const param = useParams();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos);

  return (
    <StDetailContainer>
      <StDetailBox>
        <StHeadContainer>
          <h3>ID - {param.id}</h3>
          <StButton onClick={() => navigate("/")}>이전으로</StButton>
        </StHeadContainer>

        {/* useSelector를 통해 가져온 state(여기서의 이름은 todoStore) 요소에 하나하나 접근하여 id일치 여부를 확인 */}
        {todoStore.map((todo) => {
          // pram.id의 타입은 문자열, todo.id는 숫자여서 형변환
          if (todo.id === parseInt(param.id)) {
            return (
              <StTodoDescBox>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
              </StTodoDescBox>
            );
          } else {
            return null;
          }
        })}
      </StDetailBox>
    </StDetailContainer>
  );
}

export default Detail;

const StDetailContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000000f6;
`;

const StDetailBox = styled.div`
  border: none;
  border-radius: 20px;

  background-color: white;

  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;
const StHeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    color: black;
  }
`;
const StButton = styled.button`
  display: inline-block;

  border: 1px solid black;
  border-radius: 20px;

  background-color: white;

  width: 120px;
  height: 40px;

  cursor: pointer;

  font-weight: bold;
`;

const StTodoDescBox = styled.div`
  & > h1,
  p {
    color: black;
  }
`;
