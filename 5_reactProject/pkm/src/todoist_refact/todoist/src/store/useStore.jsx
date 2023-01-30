//npm install zustand
import { create } from "zustand";

//test
export const useStore = create((set) => ({
  name: "",
  color: "",
  colorName: "",
  like: true,
  look: "list",
  projectCancel: false,
  projectAdd: false,
  project: { name: "", color: "", colorName: "", like: false, look: "" },
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
  setProject() {
    set((state) => ({
      project: {
        name: state.name,
        color: state.color,
        like: state.like,
        look: state.look,
      },
    }));
  },
}));
