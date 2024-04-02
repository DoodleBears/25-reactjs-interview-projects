// 1. single selection feature
// 2. multiple selection feature

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    if (selected === getCurrentId) {
      setSelected(null);
    } else {
      setSelected(getCurrentId);
    }
  }

  function handleMultiSelection(getCurrentId) {
    if (multiple.includes(getCurrentId)) {
      setMultiple(multiple.filter((item) => item !== getCurrentId));
    } else {
      setMultiple([...multiple, getCurrentId]);
    }
  }

  console.log(selected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data &&
          data.length > 0 &&
          data.map((dataItem) => (
            <div className="accordian-item">
              <div
                className="accordian-title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
              </div>
              <span>+</span>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="accordian-content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="accordian-content">{dataItem.answer}</div>
                  )}
            </div>
          ))}
      </div>
    </div>
  );
}
