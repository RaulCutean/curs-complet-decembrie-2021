import React from "react";
import { Link, Btn } from "./Button.style";

export function Button({ to, onClick, label, type, primary }) {
  return (
    <>
      {to ? (
        <Link to={to}>{label}</Link>
      ) : (
        <Btn
          onClick={onClick}
          type={type ? type : "button"}
          primary={primary}
          value={label}
        />
      )}
    </>
  );
}
