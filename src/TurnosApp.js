import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

const TurnosApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default TurnosApp;
