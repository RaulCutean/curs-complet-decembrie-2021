import React from "react";
import "./Input.css";

interface Props {
  value: string;
  name: string;
  onChange: (value: string, key?: string) => void;
  label?: string;
  error?: string;
  placeholder?: string;
}

export function Input({
  value,
  name,
  onChange,
  label,
  error,
  placeholder,
}: Props) {
  return (
    <div className="Input_Container">
      {label && <label className="Input_Label">{label}</label>}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        placeholder={placeholder}
      />
      {error && <span className="Input_Error">{error}</span>}
    </div>
  );
}
