import { useMemo } from "react";
import ReactDOM from "react-dom";
import { Container, Modal, Button } from "@material-ui/core";

import useToggle from "./useToggle";

function useBoolean(initialValue = false) {
  const [value, toggle] = useToggle(initialValue);

  const handler = useMemo(
    () => ({
      on: () => toggle(true),
      off: () => toggle(false),
      toggle,
    }),
    []
  );

  return [value, handler];
}

const modalStyle = {
  position: "absolute",
  top: 100,
  left: 100,
  width: 300,
  height: 200,
  background: "#FFFFFF",
};

function Demo() {
  const [isOpen, { on: openModal, off: closeModal }] = useBoolean();

  return (
    <Container>
      <Button onClick={openModal} variant="contained" color="primary">
        Click here to open the modal!
      </Button>
      <Modal open={isOpen} onClose={closeModal}>
        <div style={modalStyle}>
          <Button onClick={closeModal} variant="contained" color="primary">
            Click here to open the modal!
          </Button>
        </div>
      </Modal>
    </Container>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Demo />, rootElement);
