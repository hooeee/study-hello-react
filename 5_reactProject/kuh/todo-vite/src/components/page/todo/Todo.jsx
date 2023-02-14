import { H2 } from "components/atoms/typograpics/H2";
import { TodoInputBox } from "components/molecules/todos/TodoInputBox";
import { TodoItem } from "components/molecules/todos/TodoItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectStore } from "stores";
import css from "./Todo.module.css";

const temp = [
  { id: 1, title: "", dene: false },
  { id: 2, title: "", dene: false },
  { id: 3, title: "", dene: false },
];

export function Todo() {
  const { id: projectId } = useParams();
  const [addTodo, getTodos, toggleTodo] = projectStore((state) => [
    state.addTodo,
    state.getTodos,
    state.toggleTodo,
  ]);
  const todos = getTodos(projectId);

  const onSubmitHandle = (e, keyword) => {
    e.preventDefault();
    const todo = {
      id: 1,
      title: keyword,
      done: false,
    };
    addTodo(todo, projectId);
  };
  return (
    <div className={css.container}>
      <div>
        <H2>프로젝트명</H2>
      </div>

      <>
        {todos.map((t) => (
          <TodoItem
            done={t.done}
            title={t.title}
            id={t.id}
            onClcik={() => {
              console.log(t);
              toggleTodo(t.id);
            }}
          ></TodoItem>
        ))}
      </>
      <>
        <TodoInputBox onSubmit={onSubmitHandle}></TodoInputBox>
      </>
    </div>
  );
}
