import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const van = useOutletContext();
  return (
    <div>
      <img src={van.imageUrl} className="host-van-detail-image" />
    </div>
  );
}
