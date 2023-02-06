import { H2 } from "components/atoms/typograpics/H2";
import { TodoInputBox } from "components/molecules/todos/TodoInputBox";
import { TodoItem } from "components/molecules/todos/TodoItem";
import { useState } from "react";
import { useParams } from "react-router-dom";
import css from "./Todo.module.css";

export function Todo() {
  const { id } = useParams();

  const temp = [
    { id: 1, title: "", dene: false },
    { id: 2, title: "", dene: false },
    { id: 3, title: "", dene: false },
  ];

  const [datas, setDatas] = useState(temp);

  const setTitle = (value, id) => {
    setDatas(
      datas.map((t) => {
        if (t.id == id) t.title = value;
        return t;
      })
    );
  };
  return (
    <div className={css.container}>
      <div>
        <H2>프로젝트명</H2>
      </div>

      <>
        {datas.map((t) => (
          <TodoItem title={t.title} setTitle={setTitle} id={t.id}></TodoItem>
        ))}
      </>
      <>
        <TodoInputBox
          onSubmit={(e) => {
            e.preventDefault();
            console.log("test");
          }}
        ></TodoInputBox>
      </>
    </div>
  );
}
