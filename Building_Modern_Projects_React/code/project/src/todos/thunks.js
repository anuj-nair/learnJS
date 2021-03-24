import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markTodoAsCompleted,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(dispatch(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(dispatch(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    });
    const todo = await response.json();
    dispatch(removeTodo(todo));
  } catch (e) {
    dispatch(dispatch(e));
  }
};

export const markTodoAsCompletedRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "POST",
      }
    );
    const todo = await response.json();
    dispatch(markTodoAsCompleted(todo));
  } catch (e) {
    dispatch(dispatch(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
