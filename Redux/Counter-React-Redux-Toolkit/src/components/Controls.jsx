import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter.js";
import { privacyActions } from "../store/privacy.js";

export const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      <button
        type="button"
        className="btn btn-warning"
        onClick={handlePrivacyToggle}
      >
        Privacy Toggle
      </button>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        ></input>
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
