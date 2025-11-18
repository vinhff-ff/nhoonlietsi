import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
  };

  return (
    <div className="notfound">
      <h1 className="notfound__title" data-text="404">
        404
      </h1>

      <p className="notfound__subtitle">
        Ôi không! Trang bạn tìm kiếm không tồn tại hoặc đang phát triển
      </p>

      <Button type="primary" onClick={handleGoBack} className="btn-404">
        Trở về
      </Button>
    </div>
  );
};

export default NotFoundPage;
