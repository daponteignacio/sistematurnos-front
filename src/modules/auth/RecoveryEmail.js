export const RecoveryEmail = () => {
    return (
      <div className="auth__container">
        <h1>Recuperar contraseña</h1>

  
        <form className="auth__form">

          <div className="auth__form-group">
            <label className="auth__form-label">Correo</label>
            <input
              className="auth__form-input"
              type="email"
              placeholder="Ingresá tu correo"
            />
          </div>
  
          <input className="btn btn-auth" type="submit" value="Enviar instrucciones" />
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
  