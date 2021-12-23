import { Tinput, TTask } from "./Interfaces";

export const getData = (data: Tinput) => {
    return {
        type: "GET_INPUT",
        payload: data
    };
}

export const addTodo = (data: TTask) => {
    return {
        type: "ADD_TODO",
        payload: data
    }
}

export const deleteTask = (data: number) => {
    return {
        type: "DELETE_TODO",
        payload: data
    }
}
export const editTask = (data: TTask) => {    
    return {
        type: "EDIT_TODO",
        payload: data
    }
}