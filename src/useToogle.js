/**
 * You may need this commented import😁
 */
import { useState } from "react";
import ReactDOM from "react-dom";
import { Switch } from "@material-ui/core";

function useToggle(initialValue = false) {
  /**
   * 1. Create a state using the useState react hook.
   */

  /**
   * 2. Define a `toggle` function which toggle the
   * value hold by the useState hook previously invoked.
   * If the function receive an argument, should use it as
   * the new value if it is a boolean, otherwise should ignore it
   * and toggle the previous state.
   *
   * 💯 Bonus point: find a way to memoize this function
   * to serve a memo version of it to consumer components.
   */

  /**
   * Return the value and the toggle handler
   * respecting the native signature of react hooks:
   * Array<Value, Updater>
   */

  const [value, setValue] = useState(initialValue);

  const toogle = (val) => {
    if (typeof val === "boolean") {
      setValue(val);
    } else {
      setValue((value) => !value);
    }
  };
  return [value, toogle];
}

function Demo() {
  const [isChecked, toggle] = useToggle();

  return <Switch checked={isChecked} onChange={toggle} />;
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Demo />, rootElement);
