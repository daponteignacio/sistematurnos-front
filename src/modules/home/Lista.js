const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const Lista = ({ tipo }) => {
  return (
    <>
      <h1 className="view__title">
        {tipo ? "Seleccioná la especialidad" : "Seleccioná el apellido"}
      </h1>

      <div className="tipos">
        {arr.map((esp) => (
          <button key={esp} className="btn btn-lista">
            Especialidad {esp}
          </button>
        ))}
      </div>
    </>
  );
};
