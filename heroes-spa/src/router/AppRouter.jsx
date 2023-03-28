import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { Dc } from "../heores/pages/Dc";
import { Marvel } from "../heores/pages/Marvel";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<Dc />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};
