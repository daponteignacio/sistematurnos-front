export const LoginPage = () => {
  return (
    <div className="auth__container">
      <h1>Bienvenido</h1>

      <form className="auth__form">
        <div className="auth__form-group">
          <label className="auth__form-label">Número de documento</label>
          <input
            className="auth__form-input"
            type="number"
            placeholder="Ingresá tu DNI sin puntos ni espacios"
          />
        </div>

        <div className="auth__form-group">
          <label className="auth__form-label">Contraseña</label>
          <input
            className="auth__form-input"
            type="password"
            placeholder="Ingresá tu contraseña"
          />
        </div>

        <input className="btn btn-auth" type="submit" value="Iniciar sesión" />
      </form>

      <div className="auth__links">
        <a href="/" className="auth__link">
          ¿Olvidaste tu contraseña? <span>Recuperar</span>
        </a>
        <a href="/" className="auth__link">
          ¿No tenés cuenta? <span>Creá una</span>
        </a>
      </div>
    </div>
  );
};
