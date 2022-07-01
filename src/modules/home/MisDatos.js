import { useState } from "react";

export const MisDatos = () => {
  const [edit, setEdit] = useState(true);

  return (
    <form className="mis-datos">
      <div className="mis-datos__group">
        <label className="mis-datos__label">Nombre</label>
        <input type="text" className="mis-datos__dato " disabled={edit} />
      </div>

      <div className="mis-datos__group">
        <label className="mis-datos__label">Documento</label>
        <input type="number" className="mis-datos__dato " disabled={edit} />
      </div>

      <div className="mis-datos__group">
        <label className="mis-datos__label">Correo</label>
        <input type="email" className="mis-datos__dato " disabled={edit} />
      </div>

      <div className="mis-datos__group">
        <label className="mis-datos__label">Obra social</label>
        <input type="text" className="mis-datos__dato " disabled={edit} />
      </div>

      <div className="mis-datos__group">
        <label className="mis-datos__label">Nro de afiliado</label>
        <input type="number" className="mis-datos__dato " disabled={edit} />
      </div>

      {edit ? (
        <button className="btn" onClick={() => setEdit(!edit)}>Editar datos</button>
      ) : (
        <input
          type="submit"
          className="btn btn-confirmar"
          value="Guardar cambios"
        />
      )}
    </form>
  );
};
