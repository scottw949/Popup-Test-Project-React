import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  const sampleText =
    "Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text.";

  /*let btn = document.getElementById("button_for_notes");

  btn.addEventListener("click", hideshow, false); */
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="App flex-container">
      <div id="childOne">
        <Popup open={openPopup} onClose={() => setOpenPopup(false)} />
      </div>
      <div id="childTwo">
        <table class="center">
          <tr class="App">
            <td>
              <p value="pg 1L">{sampleText}</p>
            </td>
            <td>{sampleText}</td>
          </tr>
          <tr class="App">
            <td>
              <p>
                {sampleText} <mark>More Random Text Thats Highlighted. </mark>
              </p>
              <button class="notes-btn" onClick={() => setOpenPopup(true)}>
                Add Notes
              </button>
            </td>
            <td>{sampleText}</td>
          </tr>
          <tr class="App">
            <td>{sampleText}</td>
            <td>{sampleText}</td>
          </tr>
          <tr class="App">
            <td>{sampleText}</td>
            <td>{sampleText}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
