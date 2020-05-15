import React, {useState} from "react";

export default function FaqItem({title, text}) {
  let [status, setStatus] = useState(false);

  return (
    <div
      className={`faq_item ${status ? "activ" : ""}`}
      onClick={() => setStatus(!status)}
    >
      <div className="top">{title}</div>
      <div className="text">
        {text.split("\n").map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          );
        })}
      </div>
    </div>
  );
}
