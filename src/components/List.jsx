import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다
import { useDispatch } from "react-redux"; //useDispatch 훅 임포트, 액션명령을 주고 받는다
import { updateTodo, deleteTodo } from "../redux/modules/todos"; // 액션객체 임포트
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate훅 임포트

function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos); //store 연결확인

  // dispatch로 명령 전달
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const onToggle = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <StListContainer>
      <h1>Working.. 🔥</h1>
      <StListBox>
        {todoStore.map((todo) => {
          if (todo.isDone === false) {
            return (
              <StTodoBox key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>
                  상세보기
                </StDetailBtn>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
                <StBtnBox>
                  <StBtn borderColor="red" onClick={() => onDelete(todo.id)}>
                    삭 제
                  </StBtn>
                  <StBtn borderColor="blue" onClick={() => onToggle(todo.id)}>
                    {todo.isDone ? "취 소" : "완 료"}
                  </StBtn>
                </StBtnBox>
              </StTodoBox>
            );
          } else {
            return null;
          }
        })}
      </StListBox>

      <h1 style={{ marginTop: "80px" }}>Done..! 🎉</h1>
      <StListBox>
        {todoStore.map((todo) => {
          if (todo.isDone === true) {
            return (
              <StTodoBox key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>
                  상세보기
                </StDetailBtn>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
                <StBtnBox>
                  <StBtn borderColor="red" onClick={() => onDelete(todo.id)}>
                    삭 제
                  </StBtn>
                  <StBtn borderColor="blue" onClick={() => onToggle(todo.id)}>
                    {todo.isDone ? "취 소" : "완 료"}
                  </StBtn>
                </StBtnBox>
              </StTodoBox>
            );
          } else {
            return null;
          }
        })}
      </StListBox>
    </StListContainer>
  );
}

export default List;
const StListContainer = styled.div`
  padding: 0 25px;
`;

const StListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const StTodoBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StDetailBtn = styled.button`
  float: right; // 오른쪽 상단으로 버튼을
  border: 1px solid teal;
  text-decoration: none;
  padding: 5px 5px;
  width: 80px;
  background-color: #fff;
  border-radius: 12px;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;
const StBtn = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
