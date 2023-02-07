//npm install zustand
import { create } from "zustand";
import produce from "immer";

//test
export const useStore = create((set) => ({
  projectArg: {
    name: "",
    color: "",
    colorName: "",
    like: true,
    look: "list",
    projectCancel: false,
    projectAdd: false,
  },
  project: [],
  todoList: [],
  setName(inputName) {
    set(() => ({ name: inputName }));
  },
  setColor(color, colorName) {
    set(() => ({ color: color, colorName: colorName }));
  },
  setLike(isLike) {
    set(() => ({
      like: isLike,
    }));
  },
  setLook(isLook) {
    set(() => ({
      look: isLook,
    }));
  },
  setProjectCancel() {
    set((state) => ({
      projectCancel: !state.projectCancel,
    }));
  },
  setProjectAdd() {
    set((state) => ({
      projectAdd: true,
    }));
  },
  setValueInit() {
    set(() => ({
      name: "",
      color: "",
      colorName: "",
      like: true,
      look: "list",
      todoList: [],
    }));
  },
  setProject: (name, color, colorName, like, look) =>
    set(
      produce((draft) => {
        draft.project.push({
          name: name,
          color: color,
          colorName: colorName,
          like: like,
          look: look,
          todoList: [],
        });
      })
    ),
  setProjectDelete: (id) =>
    set(
      produce((draft) => {
        draft.project.splice(id, 1);
      })
    ),
  setTodoList: (id, content) =>
    set(
      produce((draft) => {
        draft.project[id].todoList.push({
          content,
        });
      })
    ),
  setTodoListDelete: (id) =>
    set(
      produce((draft) => {
        draft.project.splice(id, 1);
      })
    ),
}));
