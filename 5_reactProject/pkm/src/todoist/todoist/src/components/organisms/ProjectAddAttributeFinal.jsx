import { CancelAdd } from "../molecules/CancelAdd";
export function ProjectAddAttributeFinal({ cancelName, addName, btnVarient, btnStyle }) {
  return (
    <>
      <CancelAdd cancelName={cancelName} addName={addName} variant={btnVarient} btnStyle={btnStyle}></CancelAdd>
    </>
  );
}
