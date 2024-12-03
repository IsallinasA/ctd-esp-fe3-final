import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Routes/Home";
import Detail from "./Components/Routes/Detail";
import Contact from "./Components/Routes/Contact";
import Favs from "./Components/Routes/Favs";

import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <div className="Main">
        <div className="App">
          <Routes>
            <Route path="home/*" element={<Home />} />
            <Route path="dentist/:id" element={<Detail />} />
            <Route path="contact/*" element={<Contact />} />
            <Route path="favs/*" element={<Favs />} />

            <Route path="*" element={<Navigate replace to="home" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </ContextProvider>
  );
}

export default App;
