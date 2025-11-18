import { mainImages } from "../../data/imgMain"; 

export default function ImgMain() {

  return (
    <>
      {mainImages.map((item) => (
        <div
          key={item.id}
          className="img-main"
        >
          <div className="img-frame">
            <img
              src={item.img}
              alt={item.noiDung}
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
