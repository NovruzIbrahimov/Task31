/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, setUser } = useContext(AuthContext);
  
  if (user) return  children ;
  else return <Navigate to={"/auth/login"} />;
}