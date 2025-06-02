import { legacy_createStore as createStore } from "redux";

const initialState = [{ id: 1, name: "Tarea 1", isFinalized: false }];
const taskReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar tarea":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isFinalized: !task.isFinalized }
          : task,
      );
    case "[TAREAS] Eliminar tarea":
      return state.filter((task) => task.id !== action.payload);
    case "[TAREAS] Borrar tareas":
      return [];
    default:
      break;
  }
  return state;
};

export const store = createStore(taskReducer);
