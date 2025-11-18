import React from "react";

export const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fef2f2", 
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#dc2626",
          marginBottom: "8px",
        }}
      >
        Oops! Đã xảy ra lỗi.
      </h2>
      <p
        style={{
          color: "#374151", 
          marginBottom: "16px",
        }}
      >
        {error?.message || "Một lỗi không xác định đã xảy ra."}
      </p>
      <button
        onClick={resetErrorBoundary}
        style={{
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          borderRadius: "0.375rem",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#2563eb";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#3b82f6";
        }}
      >
        Thử lại
      </button>
    </div>
  );
};
