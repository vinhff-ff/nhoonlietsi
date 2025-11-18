import React from "react";
import { Spin } from "antd";

const LoadingSpin: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <Spin size="large" />
      </div>

      <style>
        {`
          .ant-spin-dot-item {
            background-color: white !important;
          }
        `}
      </style>
    </>
  );
};

export default LoadingSpin;
