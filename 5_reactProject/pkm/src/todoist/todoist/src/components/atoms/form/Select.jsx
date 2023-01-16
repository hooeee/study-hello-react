import { useState } from "react";

export function Select({items}) {
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <>
      <ui>
        <li id="target">{selectedItem | "색상을 선택하세요."}</li>
        {items.map((obj, index) => {
          <SelectItem key={index} color={obj.color} name={obj.name} />;
        })}
      </ui>
    </>
  );
}

function SelectItem({ color, name }) {
  return (
    <li>
      <div>
        <span>{color}</span>
        <span>{name}</span>
      </div>
    </li>
  );
}
