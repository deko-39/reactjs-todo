import React from "react";

export const Task = (props) => {
  function handleClick(e, id) {
    props.handleDelete(id);
  }

  return (
    <table style={{ border: "#000 solid 1px" }}>
      <tr>
        <th>Id </th>
        <th>Task name</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
      {props.task.map((el) => {
        return (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.des}</td>
            <td>{el.date}</td>
            <td>
              <button type="button" onClick={(e) => handleClick(e, el.id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
