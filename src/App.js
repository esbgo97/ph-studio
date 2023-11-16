import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/eventos/Home";
import Bodas from "./pages/eventos/Bodas";
import Footer from "./components/Footer";
import { Box, Container, Grid } from "@chakra-ui/react";
import Bautizos from "./pages/eventos/Bautizos";
import Personas from "./pages/retratos/Personas";
import QuinceAnios from "./pages/eventos/QuinceAnios";

function App() {
  return (
    <>
      <Navbar />

      <Grid >
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/eventos/bodas" element={<Bodas />} />
          <Route exact path="/eventos/bautizos" element={<Bautizos />} />
          <Route exact path="/eventos/quince-anios" element={<QuinceAnios />} />

          <Route exact path="/retratos/personas" element={<Personas />} />
        </Routes>
      </Grid>

      <Footer />
    </>
  );
}

export default App;
