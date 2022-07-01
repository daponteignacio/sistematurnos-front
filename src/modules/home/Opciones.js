import { useNavigate } from "react-router-dom";

export const Opciones = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="view__title">Elegí una opción</h1>
      <div className="opciones">
        <div onClick={() => navigate("tipo-turno")} className="opcion">
          Nuevo turno
        </div>

        <div onClick={() => navigate("mis-turnos")} className="opcion">
          Mis turnos
        </div>
      </div>
    </>
  );
};
