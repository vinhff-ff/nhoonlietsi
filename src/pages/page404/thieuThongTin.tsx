import React from "react";

const XinLoiPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#A81010",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "40px 30px",
          borderRadius: "12px",
          backdropFilter: "blur(4px)",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          RẤT XIN LỖI!
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px", lineHeight: "1.6" }}>
          Chúng tôi hiện chưa thể cập nhật đầy đủ dữ liệu cho nội dung bạn đang tìm kiếm.
          <br />
          Mong bạn thông cảm và quay lại sau.
        </p>
      </div>
    </div>
  );
};

export default XinLoiPage;
