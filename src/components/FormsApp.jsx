import { useRef } from "react";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";

export const FormsApp = () => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
  };

  const { username, nickname, email, password, onInputChange } =
    useForm(initialForm);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, nickname, email, password);
  };

  const focusRef = useRef();

  useEffect(() => {
    console.log(focusRef.current.focus());
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="usernmae" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            ref={focusRef}
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
