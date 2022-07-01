export const ResetPassword = () => {
  return (
    <div className="auth__container">
      <h1>Crear nueva contraseña</h1>

      <form className="auth__form">
        <div className="auth__form-group">
          <label className="auth__form-label">Creá una contraseña</label>
          <input
            className="auth__form-input"
            type="password"
            placeholder="Ingresá tu nueva contraseña"
          />
        </div>

        <input className="btn btn-auth" type="submit" value="Guardar cambios" />
      </form>

      <div className="auth__links">
        <a href="/" className="auth__link">
          ¿Ya tenés cuenta? <span>Iniciá sesión</span>
        </a>
        <a href="/" className="auth__link">
          ¿No tenés cuenta? <span>Creá una</span>
        </a>
      </div>
    </div>
  );
};
