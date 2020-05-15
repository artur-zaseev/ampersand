import React from "react";

export default function BasketCounter({count = null}) {
  return (
    <div className={`basketCounter ${count > 0 ? "activ" : ""}`}>{count}</div>
  );
}
