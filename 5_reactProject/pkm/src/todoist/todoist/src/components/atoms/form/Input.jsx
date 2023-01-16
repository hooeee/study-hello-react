import "./Input.css";
export function Input({ inputStyle, onChangeInputData }) {
  return (
    <>
      <input
        className={"input-main"}
        onChange={(e) => {
          console.log(e.target.value);
          onChangeInputData(e.target.value);
        }}
      ></input>
    </>
  );
}
