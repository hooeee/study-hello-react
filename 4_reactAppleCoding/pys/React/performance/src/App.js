import logo from "./logo.svg";
import { useState, useTransition, useDeferredValue } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState("");
  let a = new Array(10000).fill(0);

  //isPending 처리 중일 때 true
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);
  return (
    <div className="App">
      {name}
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value); // 실행 시점을 뒤로 미룸
          });
        }}
      />
      {isPending
        ? "로딩 중"
        : a.map(() => {
            return <div>{name}</div>;
          })}
    </div>
  );
}

export default App;
