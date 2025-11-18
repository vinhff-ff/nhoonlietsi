import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor?: string;
  textColor?: string;
  icon?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bgColor = "#A81010",
  textColor = "#fff",
  icon,
  style,
  ...rest
}) => {
  return (
    <button
      className="custom-button"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: icon ? 1 : 0,
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        padding: "8px 16px",
        fontWeight: "bold",
        ...style,
      }}
      {...rest}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButton;
