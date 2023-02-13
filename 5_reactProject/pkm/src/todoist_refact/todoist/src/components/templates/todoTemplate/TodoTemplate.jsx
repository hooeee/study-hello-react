import { useStore } from "@store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./TodoTemplate.module.css";
import { TodoMain } from "@components/organisms";
import { GoogleIcon, Label } from "@components/atoms";
import { TodoTitle } from "@components/organisms/todoTitle/TodoTitle";

export function TodoTemplate() {
  const { project, setTodoList } = useStore();
  const [icon, setIcon] = useState(1);
  const { id } = useParams();
  const [todo, setTodo] = useState([{}]);
  const a = function addTodo() {
    const copyTodo = [...todo];
  };
  useEffect(() => {
    setTodo(todo);
  }, [todo]);
  let navigate = useNavigate();
  const hoverIn = () => {
    setIcon(1);
    console.log(icon);
  };
  const hoverOut = () => {
    setIcon(0);
    console.log(icon);
  };
  return (
    <>
      {project.length == 0 || project.length - 1 < id ? (
        navigate("/project")
      ) : (
        <ul>
          {console.log(project.length)}
          <TodoTitle namess={project[id].name}></TodoTitle>
          {/* <h1>{project[id].name}</h1>{" "}
          <GoogleIcon iconName={"message"}></GoogleIcon> */}
          {/* <h2>컬러: {project[id].color}</h2>
          <h3>컬러 이름: {project[id].colorName}</h3>
          <h4>즐겨찾기 유무: {project[id].like == false ? "false" : "true"}</h4>
          <h4>보는 방식: {project[id].look}</h4> */}
          {project[id].todoList.length == 0
            ? null
            : project[id].todoList.map((obj, index) => {
                return (
                  <div className={style.TodoMain}>
                    <TodoMain key={index}></TodoMain>
                  </div>
                );
              })}
          <div
            className={style.workAddMain}
            onMouseEnter={() => {
              return setIcon(1);
            }}
            onMouseLeave={() => {
              return setIcon(0);
            }}
            onClick={() => {
              setTodoList(id, "");
              setTodo(todo);
            }}
          >
            <div>
              {icon == 0 ? (
                <GoogleIcon iconName={"add"} color={"red"}></GoogleIcon>
              ) : (
                <GoogleIcon iconName={"add_circle"} color={"red"}></GoogleIcon>
              )}
            </div>
            작업 추가
          </div>
        </ul>
      )}
    </>
  );
}
