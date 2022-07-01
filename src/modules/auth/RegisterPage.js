export const RegisterPage = () => {
    return (
      <div className="auth__container">
        <h1>Bienvenido</h1>

  
        <form className="auth__form">

          <div className="auth__form-group">
            <label className="auth__form-label">Nombre</label>
            <input
              className="auth__form-input"
              type="text"
              placeholder="Ingresá tu nombre"
            />
          </div>

          <div className="auth__form-group">
            <label className="auth__form-label">Apellido</label>
            <input
              className="auth__form-input"
              type="text"
              placeholder="Ingresá tu apellido"
            />
          </div>

          <div className="auth__form-group">
            <label className="auth__form-label">Correo</label>
            <input
              className="auth__form-input"
              type="email"
              placeholder="Ingresá tu correo"
            />
          </div>

          <div className="auth__form-group">
            <label className="auth__form-label">Número de documento</label>
            <input
              className="auth__form-input"
              type="number"
              placeholder="Ingresá tu DNI sin puntos ni espacios"
            />
          </div>
  
          <div className="auth__form-group">
            <label className="auth__form-label">Creá una contraseña</label>
            <input
              className="auth__form-input"
              type="password"
              placeholder="Ingresá tu contraseña"
            />
          </div>
  
          <input className="btn btn-auth" type="submit" value="Crear cuenta" />
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
  