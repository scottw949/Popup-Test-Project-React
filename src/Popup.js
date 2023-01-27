import React from "react";
import "./Popup.css";

let tempNotes = "";
const Popup = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div class="container">
      <div class="interior-container">
        <textarea id="textarea">{tempNotes}</textarea>
      </div>
      <button class="save save-btn" onClick={getTextVal}>
        Save
      </button>
      <button class="cancel cancel-btn" onClick={onClose}>
        Exit
      </button>
    </div>
  );
};

const getTextVal = () => {
  let notes = document.getElementById("textarea");
  let val = notes.value;
  //alert(val);
  tempNotes = val;
  alert("Notes Saved!");
};

export default Popup;
