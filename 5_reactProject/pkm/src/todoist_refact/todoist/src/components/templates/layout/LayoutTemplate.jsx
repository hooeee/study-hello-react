import { Outlet } from "react-router-dom";
import { MainTemplate, ModalTemplates } from "..";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "zustand";
import { changeCheck } from "@store/store";
export function LayoutTemplate() {
  const { todos } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  return (
    <>
      <MainTemplate>
        <Outlet />
      </MainTemplate>
      <ModalTemplates></ModalTemplates>
    </>
  );
}
