import React from "react";
import { Dialog } from "primereact/dialog";

export default function ProjectModal({ header, visible, onHide, children }) {
  return (
    <Dialog
      header={header}
      visible={visible}
      style={{ width: "50vw" }}
      onHide={onHide}
    >
      <p className="m-0">{children}</p>
    </Dialog>
  );
}
