import { Routes, Route, Navigate } from "react-router-dom";
import { Lista } from "../modules/home/Lista";
import { MisDatos } from "../modules/home/MisDatos";
import { MisTurnos } from "../modules/home/MisTurnos";
import { Opciones } from "../modules/home/Opciones";
import { TipoTurno } from "../modules/home/TipoTurno";
import { Layout } from "../modules/ui/Layout";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Opciones />} />
        
        <Route path="turnos-disponibles" element={<Lista />} />
        <Route path="mis-datos" element={<MisDatos/>}/>

        <Route path="mis-turnos" element={<MisTurnos />} />

        <Route path="tipo-turno" element={<TipoTurno />} />
        
        
      </Route>

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
