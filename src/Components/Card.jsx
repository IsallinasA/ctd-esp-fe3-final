import React from "react";

import { useNavigate } from "react-router-dom";

const Card = ({ id, name, username, email, phone, website }) => {
  const navigate = useNavigate();

  const addFav = () => {
    const favDentist = {
      id,
      name,
      username,
      email,
      phone,
      website,
    };

    let favs = JSON.parse(localStorage.getItem("favs")) || [];
    favs.push(favDentist);
    localStorage.setItem("favs", JSON.stringify(favs));

    alert("Dentista añadido a favoritos");
  };

  return (
    <div
      className="card"
      onClick={(e) =>
        e.target.tagName !== "BUTTON" ? navigate(`/dentist/${id}`) : ""
      }
    >
      <img src={`https://robohash.org/${id}?set=set5`} alt="robot" />
      <h2>{name}</h2>
      <p>{username}</p>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
