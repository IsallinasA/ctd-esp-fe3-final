import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const dentist = state.data.find((d) => d.id === parseInt(id));

  if (!dentist) {
    return <div>Dentist not found</div>;
  }

  return (
    <div className="dentist-container">
      <h1>{dentist.name}</h1>
      <table className="dentist-table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{dentist.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{dentist.username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
