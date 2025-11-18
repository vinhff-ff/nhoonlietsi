import React, { InputHTMLAttributes } from "react";

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputCustom: React.FC<InputCustomProps> = (props) => {
  return <input className="input-custom" {...props} />;
};

export default InputCustom;
