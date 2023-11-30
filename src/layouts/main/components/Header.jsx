/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { BasketContext } from "../../../contexts/BasketContext";

export default function Header({ setquery }) {
  const { basket } = useContext(BasketContext);
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setquery(inputRef.current.value);
  };
  return (
    <header className="w-full h-20 bg-[#929292] flex justify-between items-center px-4">
      <h1 className="text-[40px] font-bold">Logo</h1>
      <div className="flex items-center gap-4">
      {basket.length}
        <svg
          className="cursor-pointer"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z" />
          <path d="M9 13h2v5H9zm4 0h2v5h-2z" />
        </svg>

        <form className="flex gap-4" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="outline-none h-10 w-[300px] p-4 text-[20px]"
          />
          <button type="submit" className="w-15 h-10 bg-green-600 px-4">
            Axtar
          </button>
        </form>
      </div>
    </header>
  );
}