import { Routes, Route } from "react-router-dom";
import MainContent from "./Componentes/Main/MainContent"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}/>
      {/* <Route path="/tema" element={<Tema />} /> */}
    </Routes>
  );
};

export default AppRoutes;