import { initialState, TTask } from "./Interfaces";
const initial: initialState = {
  task: []
};

const TodoRed = (state: initialState = initial, { type, payload }: any) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        task: [...state.task, payload]
      }
    case 'EDIT_TODO':
      return {
        ...state,
        task: state.task.map((vals, i) =>
          vals.id === payload.id ?
            { ...vals, task: payload.task, day: payload.day }
            : vals)
      };
    case "GET_INPUT":
      return {
        ...state,
        payload
      }
    case 'DELETE_TODO':
      return {
        ...state,
        task: state.task.filter((task: TTask) => task.id !== payload)
      }
    default:
      return state;
  }
};

export default TodoRed;