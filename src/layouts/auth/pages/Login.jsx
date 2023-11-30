/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    Login();
  };
  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  const Login = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "kminchelle", password: "0lelplR" }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.token);
        if (res.token) {
            console.log('test')
          setUser(res);
        }
      });
  };
  return (
    <>
    <form
      className="flex flex-col w-52 m-auto bg-[#929292] p-4 gap-4"
      onSubmit={handleSubmit}
    >
      <input
        name="username"
        onChange={handleChange}
        className="outline-none h-8 border"
        type="text"
      />
      <input
        name="password"
        onChange={handleChange}
        className="outline-none h-8 border"
        type="text"
      />
      <button>LOGIN</button>
    </form>

    <Link to={'/'}>home</Link>
    </>

  );
}