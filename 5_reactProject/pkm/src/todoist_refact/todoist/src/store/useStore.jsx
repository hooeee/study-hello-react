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
  project: [{}],
  // project: [{ name: "", color: "", colorName: "", like: false, look: "list" }],
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
  setProject(name, color, colorName,like, look) {
    set((state) => ({
      // project: project.push({name:name, color:color, colorName:colorName, like:like, look:look})
      project: [{name:name, color:color, colorName:colorName, like:like, look:look}]
    }));
  },
}));
