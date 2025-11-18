import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { mainImages } from "../../data/imgMain"; 

export default function ImgMain() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <>
      {mainImages.map((item) => (
        <div
          key={item.id}
          className="img-main"
          // onClick={() => handleClick(item.path)}
        >
          <div className="img-frame">
            <LazyLoadImage
              src={item.img}
              alt={item.noiDung}
              effect="blur"
              className="main-image"
            />
            <div className="img-info">
              <span className="img-name">{item.name}</span>
              <span className="img-date">{item.ngayThang}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
