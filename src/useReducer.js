import { useReducer } from "react";
import ReactDOM from "react-dom";
import { Switch } from "@material-ui/core";

const toggleFn = (oldVal, newVal) => {
  return typeof newVal === "boolean" ? newVal : !oldVal;
};

function useToggle(initialValue = false) {
  return useReducer(toggleFn, initialValue);
}

function Demo() {
  const [isChecked, toggle] = useToggle();

  return <Switch checked={isChecked} onChange={toggle} />;
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Demo />, rootElement);
