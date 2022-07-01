import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthRoutes } from "./AuthRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <Routes>
      {(isAuth === true) ? (
        <Route path="/*" element={<DashboardRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
