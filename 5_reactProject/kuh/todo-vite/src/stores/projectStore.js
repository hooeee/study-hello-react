import { create } from "zustand";

const newId = (arr) => {
  const data = arr.length < 1 ? 1 : arr[arr.length - 1].id + 1;
  return data;
};

export const projectStore = create((set, get) => ({
  projects: [],
  modal: {
    // id: -1,
    // title: undefined,
    // color: undefined,
    // bookMark: undefined,
    // type: undefined,
    // createAt: undefined,
  },
  newProjectFactory: () => {
    return {
      id: -1,
      color: "red",
      type: "목록",
      bookmark: true,
      title: "",
      createAt: Date.now(),
      todos: [],
    };
  },
  getTodos: (projectId) => {
    const { projects } = get();
    const { todos } = projects.find((t) => t.id == projectId);
    return todos;
  },
  setModal: (newData) => set((state) => ({ modal: { ...newData } })),

  addProject: (newProject) => {
    const { projects } = get();
    newProject.id = newId(projects);
    set((state) => ({ projects: [...projects, newProject] }));
  },
  updateProject: (newProject) => {
    const { projects } = get();
    const newProjects = projects.map((t) =>
      t.id == newProject.id ? newProject : t
    );
    set((state) => ({ projects: newProjects }));
  },
  addTodo: (todo, projectId) => {
    const { projects } = get();

    const newProjects = projects.map((p) => {
      if (p.id == projectId) {
        todo.id = newId(p.todos);
        return {
          ...p,
          todos: [...p.todos, todo],
        };
      }
      return p;
    });
    set((state) => ({ projects: newProjects }));
  },
  toggleTodo: (todoId) => {
    const { projects } = get();
    const newProjects = projects.map((p) => {
      const newTodos = p.todos.map((t) => {
        if (t.id == todoId) {
          return {
            ...t,
            done: !t.done,
          };
        }
        return t;
      });
      return {
        ...p,
        todos: newTodos,
      };
    });
    set((state) => ({ projects: newProjects }));
  },
}));
