import React from "react";
import './TextArea.scss';
export default function TextArea({ ...props }) {
  return (
    <label className="customTextArea">
      <textarea {...props}>
      </textarea>
      <div>Mô tả...</div>
    </label>
  );
}
