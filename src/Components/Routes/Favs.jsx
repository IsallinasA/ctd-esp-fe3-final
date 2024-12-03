import React, { useEffect, useState } from "react";
import Card from "../Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div className="flex-container">
      {favs.length > 0 ? (
        favs.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            email={dentist.email}
            phone={dentist.phone}
            website={dentist.website}
          />
        ))
      ) : (
        <p>Aún no tienes dentistas favoritos</p>
      )}
    </div>
  );
};

export default Favs;
