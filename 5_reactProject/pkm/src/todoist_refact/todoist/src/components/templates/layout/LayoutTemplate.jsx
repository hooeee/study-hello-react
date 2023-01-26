import { Outlet } from "react-router-dom";
import { MainTemplate, ModalTemplates } from "..";

export function LayoutTemplate() {
  return (
    <>
      <MainTemplate>
        <Outlet />
      </MainTemplate>
      <ModalTemplates></ModalTemplates>
    </>
  );
}
