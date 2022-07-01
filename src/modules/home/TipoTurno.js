import { useNavigate } from "react-router-dom";

export const TipoTurno = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="view__title">Elegí una opción</h1>
      <div className="opciones">
        <div
          onClick={() => navigate("turnos-disponibles", {replace: true})}
          className="opcion"
        >
          Por especialidad 
        </div>

        <div
          onClick={() => navigate("turnos-disponibles", {replace: true})}
          className="opcion"
        >
          Por médico/a
        </div>
      </div>
    </>
  );
};
