import { type ReactNode, useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}
const Modal = (props: ModalProps) => {
  useEffect(() => {
    console.log("mount");
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      console.log("unmount");
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div>
      {props.children}
      <button onClick={props.onClose}>close</button>
    </div>
  );
};

export default Modal;
