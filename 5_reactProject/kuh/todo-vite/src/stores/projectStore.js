import { create } from "zustand";

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
		};
	},
	setModal: (newData) => set((state) => ({ modal: { ...newData } })),

	addProject: (newProject) => {
		const { projects } = get();
		newProject.id = projects.length > 0 ? projects[projects.length - 1].id + 1 : 0;
		set((state) => ({ projects: [...projects, newProject] }));
	},
	updateProject: (newProject) => {
		const { projects } = get();
		newProject.id = projects.length > 0 ? projects[projects.length - 1].id + 1 : 0;
		set((state) => ({ projects: [...projects, newProject] }));
	},
}));
