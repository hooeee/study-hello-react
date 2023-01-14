import "./Label.css";

export function Label({ labelName, labelStyle }) {
  return (
    <div>
      <label htmlFor="input" className={labelStyle}>
        {labelName}
      </label>
    </div>
  );
}
