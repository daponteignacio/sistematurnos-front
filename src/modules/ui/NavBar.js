import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav__container">
        <h1 onClick={() => navigate('/')} className="nav__logo">Turnos</h1>

        <button onClick={() => navigate("mis-datos", { replace: true })} className="btn">
          Mis datos
        </button>
      </div>
      <button className="btn btn-logout">
        <IoLogOutOutline /> Cerrar sesión
      </button>
    </nav>
  );
};
