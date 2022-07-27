import React from "react";

export default function Row({
  path,
  name,
  contactDetail,
  lastActivity,
  location,
  state,
}) {
  const action =
    state === 0 ? (
      <button className="btn btn-outline-primary" style={{ fontSize: "10px" }}>
        Sign In
      </button>
    ) : (
      <button className="btn btn-outline-danger" style={{ fontSize: "10px" }}>
        Sign OUT
      </button>
    ); // 1 : un depart et 0 : une arrivée

  return (
    <tr className="text-center">
      <td>
        <img src={path} alt="default" width={40} className="rounded-circle" />
      </td>
      <td>
        <p className="lh-1">
          {name}
          <br />
          <span style={{ fontSize: "7px" }}>Company Admin</span>
        </p>
      </td>
      <td>{contactDetail}</td>
      <td>{lastActivity}</td>
      <td>{location}</td>
      <td>{action}</td>
    </tr>
  );
}
