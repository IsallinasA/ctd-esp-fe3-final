import React, { useContext } from "react";
import Card from "../Card";

import { ContextGlobal } from "../utils/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="flex-container">
      {state.data.map((dentist) => (
        <Card
          key={dentist.id}
          id={dentist.id}
          name={dentist.name}
          username={dentist.username}
          email={dentist.email}
          phone={dentist.phone}
          website={dentist.website}
        />
      ))}
    </div>
  );
};

export default Home;
