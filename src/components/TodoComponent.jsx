import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

export const TodoComponent = () => {
  const initialState = [{ id: 1, name: "Tarea 1", isFinalized: false }];
  const newTask = [{ id: 2, name: "Tarea 2", isFinalized: false }];
  const taskToEdit = [{ id: 1, name: "Tarea 3", isFinalized: false }];
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
  const addTaskInput = (event) => {
    event.preventDefault();
    if (tarea.trim() == "") return;
    const newTask = {
      id: new Date().getTime(),
      name: tarea,
      isFinalized: false,
    };
    const action = {
      type: "[TAREAS] Agregar tarea",
      payload: newTask,
    };
    dispatch(action);
    console.log(state);
  };

  const endTask = (id) => {
    const action = {
      type: "[TAREAS] Finalizar tarea",
      payload: id,
    };
    dispatch(action);
  };

  const deleteTask = (id) => {
    const action = {
      type: "[TAREAS] Eliminar tarea",
      payload: id,
    };
    dispatch(action);
  };

  const deleteAll = () => {
    const action = {
      type: "[TAREAS] Borrar tareas",
    };
    dispatch(action);
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { tarea, onInputChange } = useForm({ tarea: "" });

  return (
    <>
      <form onSubmit={addTaskInput}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="tarea"
            name="tarea"
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
        <button
          type="button"
          onClick={deleteAll}
          className="btn btn-danger m-2"
        >
          Borrar Todas
        </button>
        <hr />
        <ul className="list-group">
          {state.map((task) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={task.id}
              >
                <span>{task.name}</span>
                <div>
                  <input
                    type="checkbox"
                    checked={task.isFinalized}
                    onChange={() => endTask(task.id)}
                  />
                  <button
                    type="button"
                    className="btn btn-danger m-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};
