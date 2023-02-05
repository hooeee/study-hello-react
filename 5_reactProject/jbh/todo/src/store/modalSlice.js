import { createSlice } from "@reduxjs/toolkit";

let project = createSlice({
    name: "project",
    initialState: {
        project: {
            name: "",
            colorKey: "",
            colorName: "",
            favorite: false,
            listName: "",
        },
        projectItems: [],
    },
    reducers: {
        changeProject(state, { payload }) {
            const { name, value } = payload;
            const cloneObj = { ...state.project };
            cloneObj[name] = value;
            state.project = cloneObj;
            console.log(state.project);
        },
        addProject(state, payload) {
            const project = payload.payload;
            const newObj = { ...project };
            state.projectItems = [...state.projectItems, newObj];
            console.log(state.projectItems);
        },
    },
});

export let { changeProject, addProject } = project.actions;

export default project;
