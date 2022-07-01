import React from "react";

export const TurnoFS = () => {
  return (
    <div className="turno">
      <div className="turno__medico">
        <h1>Datos del médico</h1>

        <div className="turno__medico-datos">
          <div className="turno__datos-grupo">
            <div className="turno__datos-label">Nombre</div>
            <div className="turno__datos-dato">René Favaloro</div>
          </div>

          <div className="turno__datos-grupo">
            <div className="turno__datos-label">Especialidad</div>
            <div className="turno__datos-dato">Cardiólogo</div>
          </div>

          <div className="turno__datos-grupo">
            <div className="turno__datos-label">Categoría</div>
            <div className="turno__datos-dato">C</div>
          </div>

          <div className="turno__datos-grupo">
            <div className="turno__datos-label">Matrícula</div>
            <div className="turno__datos-dato">12345678</div>
          </div>

          <div className="turno__datos-grupo big">
            <div className="turno__datos-label">Datos importantes</div>
            <div className="turno__datos-dato">
              <p>
                Laborum deserunt id aliqua incididunt eiusmod deserunt labore
                laboris culpa aliquip aliqua do quis laboris. Cupidatat irure
                magna esse ut. Consequat cupidatat enim sint velit magna do
                incididunt eiusmod non cillum dolor.
              </p>
              <p>
                Aute consectetur labore ullamco consequat cillum sint nisi
                incididunt. Enim sit nulla cillum ex. Veniam excepteur est amet
                deserunt sit. Ex cillum quis commodo ad ullamco culpa occaecat
                nisi cillum irure eiusmod. Aute ex anim deserunt ea occaecat eu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="turno__header">
        <h2>Turno seleccionado para el <span>12/08/23</span> a las <span>18:00h</span></h2>

        <div className="turno__buttons">
          <button className="btn btn-confirmar">Confirmar</button>
          <button className="btn">Cancelar</button>
        </div>
      </div>

    </div>
  );
};
