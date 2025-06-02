import { useReducer } from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

export const TodoComponent = () => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
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
          {tasks.map((task) => {
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
