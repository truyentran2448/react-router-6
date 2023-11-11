import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VansHost() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  console.log(vans);

  const vanElements = vans.map((item) => (
    <Link
      key={item.id}
      className="host-van-link-wrapper"
      to={`/host/vans/${item.id}`}
    >
      <div className="host-van-single">
        <img src={item.imageUrl} alt="" />
        <div className="host-van-info">
          <h3>{item.name}</h3>
          <p>${item.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{vanElements}</section>
      </div>
    </div>
  );
}
